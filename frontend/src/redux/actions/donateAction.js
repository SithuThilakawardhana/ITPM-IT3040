import axios from 'axios';
import { donate_LOAD_FAIL, donate_LOAD_REQUEST, donate_LOAD_SINGLE_FAIL, donate_LOAD_SINGLE_REQUEST, donate_LOAD_SINGLE_SUCCESS, donate_LOAD_SUCCESS } from "../constants/donateConstant"


export const donateLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: donate_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/donate/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        dispatch({
            type: donate_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: donate_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// single job action
export const donateLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: donate_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`/api/donate/${id}`);
        dispatch({
            type: donate_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: donate_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}