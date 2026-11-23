import Link from "next/link";

export const metadata = { title: "Privacy | DAY-ZERO.AI" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 text-slate-800">
      <p className="mb-6 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">Draft - the owner must review this page before launch.</p>
      <h1 className="text-3xl font-extrabold">Privacy</h1>
      <p className="mt-2 text-sm text-slate-500">Contact: {"{{CONTACT_EMAIL}}"}</p>

      <h2 className="mt-8 text-xl font-bold">What we store</h2>
      <p className="mt-2 text-sm leading-6">When you create an account we store your name, email address and (for email sign-up) a salted hash of your password, never the password itself. If you sign in with Google or GitHub we receive your name, email and profile picture from them. We also store your interview history (company, role, round, score and verdict), your company waitlist votes (and the notification email you give), and how long you are active on the site.</p>

      <h2 className="mt-8 text-xl font-bold">Camera and microphone</h2>
      <p className="mt-2 text-sm leading-6">Proctored rounds ask for your camera and microphone. The camera image is analysed inside your browser to check that you are present and looking at the screen; the video is not uploaded or stored by us. Audio is sent to our server and then to an AI speech service only when you submit a spoken answer, so it can be turned into text. We do not keep the recording.</p>

      <h2 className="mt-8 text-xl font-bold">AI services</h2>
      <p className="mt-2 text-sm leading-6">What you type or say in interviews, the Neo assistant, the debugging assistant and the resume scanner (including resume text) is sent to third-party AI providers (Google Gemini and Groq) to produce replies and scores. Please do not enter anything you would not want processed this way.</p>

      <h2 className="mt-8 text-xl font-bold">Cookies</h2>
      <p className="mt-2 text-sm leading-6">We use only the cookies needed to keep you signed in. We do not use advertising or tracking cookies.</p>

      <h2 className="mt-8 text-xl font-bold">Your choices</h2>
      <p className="mt-2 text-sm leading-6">Signed-in users can download a copy of their data or permanently delete their account from the <Link className="underline" href="/profile">Profile</Link> page. Deleting removes your account, history, votes and activity records.</p>

      <h2 className="mt-8 text-xl font-bold">Where data is kept</h2>
      <p className="mt-2 text-sm leading-6">Account data is kept in a managed database provider and the site is served by a hosting provider. Questions or requests: {"{{CONTACT_EMAIL}}"}.</p>
    </main>
  );
}
