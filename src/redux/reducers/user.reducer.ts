
import _ from "lodash";
import {userConstants} from "../constants/user.constant";
import {IUser} from "../../utils/interfaces";

interface IAction {
    type:string,
    payload:any
}

export function userReducer(state:IUser,action:IAction) {
    
    let nState = _.cloneDeep(state);

    switch (action.type) {
        case userConstants.NEW_USER:
            nState = action.payload;
         break;

        default:
            nState = state;
            break;
    }

    return nState;
}