
//
import axios from 'axios';
import {IUser} from "../utils/interfaces";

export function registerUser(params:IUser) {
    return axios.post("/user/register",params);
}

export function loginUser(params:IUser) {
    return axios.post("/user/login",params);
}