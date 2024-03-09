import { RESULT } from "./actionTypes";

export const addition = (Wpm, Accuracy, Mistakes) => {
  return {
    type: RESULT,
    payload: {
      Wpm,
      Accuracy,
      Mistakes
    },
  };
};
