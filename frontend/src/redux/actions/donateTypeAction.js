import axios from 'axios';
import { donate_TYPE_LOAD_FAIL, donate_TYPE_LOAD_REQUEST, donate_TYPE_LOAD_SUCCESS } from '../constants/donateTypeConstant';



export const donateTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: donate_TYPE_LOAD_REQUEST });
    try {
        const { data } = await axios.get('/api/type/donate');
        dispatch({
            type: donate_TYPE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: donate_TYPE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}