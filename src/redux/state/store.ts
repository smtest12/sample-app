import  {createStore,applyMiddleware} from "redux";

import  rootReducer from "../reducers/index";
import initialState from "./initialState";
import { createLogger} from "redux-logger";
const reduxLogger = createLogger();
const middlewares = [reduxLogger];

 export default createStore(rootReducer,{},applyMiddleware(middlewares));