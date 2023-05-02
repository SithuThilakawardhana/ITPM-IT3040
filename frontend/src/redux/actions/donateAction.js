import axios from 'axios';
import { donate_LOAD_FAIL, donate_LOAD_REQUEST, donate_LOAD_SUCCESS } from "../constants/donateConstant"


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