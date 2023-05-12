import { USER_SIGNIN_REQUEST, USER_SIGNIN_FAIL, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS } from "../constants/userConstant";
import { USER_LOGOUT_REQUEST, USER_LOGOUT_FAIL, USER_LOGOUT_RESET, USER_LOGOUT_SUCCESS } from "../constants/userConstant";

export const userReducerSignIn = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {
                loading: true, 
                userInfo: null, 
                isAuthenticated: false 
            }
        case USER_SIGNIN_SUCCESS: 
            return {
                loading: false,
                userInfo: action.payload, 
                isAuthenticated: true
            }
        case USER_SIGNIN_FAIL: 
            return {
                loading: false,
                userInfo: null, 
                isAuthenticated: false,
                error: action.payload
            }
        case USER_SIGNIN_RESET:
            return {}
        default:
            return state;
    }
}

// log out reducer
export const userReducerLogOut = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true }
        case USER_LOGOUT_SUCCESS: 
            return { loading: false,
                     userInfo: action.payload 
                   }
        case USER_LOGOUT_FAIL: 
            return {
                loading: false,
                error: action.payload
            }
        case USER_LOGOUT_RESET:
            return {}
        default:
            return state;
    }
}
