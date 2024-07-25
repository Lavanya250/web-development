import { createStore } from "redux";
import { CounterReducer } from "./Reducer";
export const Store=createStore(CounterReducer);
