import { donate_TYPE_LOAD_FAIL, donate_TYPE_LOAD_REQUEST, donate_TYPE_LOAD_RESET, donate_TYPE_LOAD_SUCCESS } from "../constants/donateTypeConstant"


export const loaddonateTypeReducer = (state = { donateType: [] }, action) => {
    switch (action.type) {
        case donate_TYPE_LOAD_REQUEST:
            return { loading: true }
        case donate_TYPE_LOAD_SUCCESS:
            return {
                loading: false,
                donateType: action.payload.donateT
            }
        case donate_TYPE_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case donate_TYPE_LOAD_RESET:
            return {}
        default:
            return state;
    }
}