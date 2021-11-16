
//

import {userConstants} from "../constants/user.constant";
import {IUser} from "../../utils/interfaces";

export function registerUser(user:IUser) {
    return{
        type: userConstants.NEW_USER,
        payload : user
    }
};

