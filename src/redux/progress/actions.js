import { PROGRESS_STAGE_CHANGE } from "./types";

export function progressStageChange(stage) {
  return { type: PROGRESS_STAGE_CHANGE, payload: { stage } };
}
