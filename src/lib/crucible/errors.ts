import type { ApiError, ErrorCode } from "@/types/crucible";

const STATUS_BY_CODE: Record<ErrorCode, number> = {
  BAD_REQUEST: 400,
  INVALID_STATE: 409,
  CHAT_DISABLED: 403,
  QUESTION_COMPLETE: 409,
  AI_UNAVAILABLE: 503,
  AI_BAD_OUTPUT: 502,
  INTERNAL: 500
};

/** An error the API can show to the client with a stable, machine-readable code. */
export class EngineError extends Error {
  readonly code: ErrorCode;
  readonly status: number;

  constructor(code: ErrorCode, message: string) {
    super(message);
    this.name = "EngineError";
    this.code = code;
    this.status = STATUS_BY_CODE[code];
  }

  toBody(): ApiError {
    return { error: this.message, code: this.code };
  }
}

export function isEngineError(value: unknown): value is EngineError {
  return value instanceof EngineError;
}
