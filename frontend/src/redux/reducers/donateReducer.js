import { donate_LOAD_FAIL, donate_LOAD_REQUEST, donate_LOAD_RESET, donate_LOAD_SUCCESS } from "../constants/donateConstant"


export const loaddonateReducer = (state = { donate: [] }, action) => {
    switch (action.type) {
        case donate_LOAD_REQUEST:
            return { loading: true }
        case donate_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                donate: action.payload.donate
            }
        case donate_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case donate_LOAD_RESET:
            return {}
        default:
            return state;
    }
}