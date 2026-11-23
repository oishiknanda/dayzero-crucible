import type { FaceResult, Human as HumanEngine } from "@vladmandic/human";

export interface FaceIdentityReference {
  embedding: number[];
  neutralYaw: number;
  neutralPitch: number;
  neutralGazeBearing: number;
  neutralGazeStrength: number;
}

let enginePromise: Promise<HumanEngine> | null = null;

export function loadProctoringVision(): Promise<HumanEngine> {
  if (!enginePromise) {
    enginePromise = import("@vladmandic/human").then(async ({ Human }) => {
      const human = new Human({
        backend: "webgl",
        modelBasePath: "/proctor-models/",
        cacheModels: true,
        debug: false,
        face: {
          enabled: true,
          detector: { maxDetected: 4, minConfidence: 0.6, rotation: true, skipTime: 0 },
          mesh: { enabled: true },
          iris: { enabled: true },
          description: { enabled: true },
          emotion: { enabled: false },
          antispoof: { enabled: false },
          liveness: { enabled: false },
        },
        body: { enabled: false },
        hand: { enabled: false },
        object: { enabled: false },
        segmentation: { enabled: false },
        gesture: { enabled: false },
      });
      await human.load();
      await human.warmup();
      return human;
    }).catch((error) => {
      enginePromise = null;
      throw error;
    });
  }
  return enginePromise;
}

export async function detectFaces(video: HTMLVideoElement): Promise<FaceResult[]> {
  const human = await loadProctoringVision();
  const result = await human.detect(video);
  return result.face;
}

export async function captureFaceIdentity(video: HTMLVideoElement): Promise<FaceIdentityReference> {
  const samples: FaceResult[] = [];
  for (let index = 0; index < 3; index += 1) {
    const faces = await detectFaces(video);
    if (faces.length !== 1) throw new Error(faces.length === 0 ? "No face was detected. Center your face in the camera and try again." : "More than one face is visible. Make sure you are alone in the camera frame and try again.");
    if (!faces[0].embedding || faces[0].embedding.length < 64 || faces[0].score < 0.6) throw new Error("The face image was not clear enough to verify. Improve the lighting and try again.");
    samples.push(faces[0]);
    if (index < 2) await new Promise((resolve) => window.setTimeout(resolve, 350));
  }
  const seed = samples[0].embedding!;
  const identity = seed.map((_, dimension) => samples.reduce((sum, face) => sum + face.embedding![dimension], 0) / samples.length);
  return {
    embedding: identity,
    neutralYaw: samples.reduce((sum, face) => sum + (face.rotation?.angle.yaw ?? 0), 0) / samples.length,
    neutralPitch: samples.reduce((sum, face) => sum + (face.rotation?.angle.pitch ?? 0), 0) / samples.length,
    neutralGazeBearing: samples.reduce((sum, face) => sum + (face.rotation?.gaze.bearing ?? 0), 0) / samples.length,
    neutralGazeStrength: samples.reduce((sum, face) => sum + (face.rotation?.gaze.strength ?? 0), 0) / samples.length,
  };
}

export async function compareFaceIdentity(reference: FaceIdentityReference, candidate: FaceResult): Promise<number | null> {
  if (!candidate.embedding || candidate.embedding.length !== reference.embedding.length) return null;
  const human = await loadProctoringVision();
  return human.match.similarity(reference.embedding, candidate.embedding);
}
