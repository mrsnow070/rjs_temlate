import { Action } from "../types";
import { RootReducerInterface } from "../reducer";
export const moduleName = "test";
export const COUNT_ADD = `${moduleName}/COUNT_ADD`;
export const COUNT_SUB = `${moduleName}/COUNT_SUB`;
export const START_FETCH = `${moduleName}/START_FETCH`;

export type TestReducerStateType = {
  count: number;
};

const initState: TestReducerStateType = {
  count: 2,
};

export default (state = initState, action: Action<any>) => {
  const { type, payload } = action;
  typeof payload !== "undefined" && console.log(payload);
  switch (type) {
    case COUNT_ADD:
      return { ...state, count: state.count + 1 };

    case COUNT_SUB:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

//selectors
export const getState = (state: RootReducerInterface): TestReducerStateType =>
  state[moduleName];
export const getCount = (state: any): number => getState(state).count;
