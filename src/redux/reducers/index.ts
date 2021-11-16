import  {userReducer} from "./user.reducer";
import  {combineReducers} from "redux";

const appReducer = combineReducers({
    userReducer
});

export default appReducer;