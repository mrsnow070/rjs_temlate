import { combineReducers } from "redux";
import testReducer, {
  moduleName as testModule,
  TestReducerStateType,
} from "./testReducer";

export interface RootReducerInterface {
  [testModule]: TestReducerStateType;
}

const rootReducer = combineReducers<RootReducerInterface>({
  [testModule]: testReducer,
});

export default rootReducer;
