import axios from 'axios';
import { toast } from 'react-toastify';
import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../constants/userConstant';

export const userSignInAction = (user) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST});
    try {
        const { data } = await axios.post('/api/signin', user);
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Login Successfully!");
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// Log out action
export const userLogOutAction = () => async (dispatch) => {
    dispatch({type: USER_LOGOUT_REQUEST});
    try {
        const { data } = await axios.get('/api/logout');
        localStorage.removeItem('userInfo');
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Log out Successfully!");
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}