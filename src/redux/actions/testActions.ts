import { COUNT_ADD, COUNT_SUB, START_FETCH } from "../reducer/testReducer";
import { ActionCreator } from "../types";

type addToCountPayload = {};

export const addToCount: ActionCreator<addToCountPayload> = (data) => {
  return {
    type: COUNT_ADD,
    payload: data,
  };
};

export const startFetch = () => {
  return {
    type: START_FETCH,
  };
};

export const subFromCount = () => {
  return {
    type: COUNT_SUB,
  };
};
