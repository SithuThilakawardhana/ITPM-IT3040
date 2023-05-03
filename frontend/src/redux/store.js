import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loaddonateReducer, loaddonateSingleReducer } from './reducers/donateReducer';
import { loaddonateTypeReducer } from './reducers/donateTypeReducer';
import { allUserReducer, userApplydonateReducer, userReducerLogout, userReducerProfile, userReducerSignIn } from './reducers/userReducer';

//combine reducers
const reducer = combineReducers({
    loaddonate: loaddonateReducer,
    donateTypeAll: loaddonateTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singledonate: loaddonateSingleReducer,
    userdonateApplication: userApplydonateReducer,
    allUsers: allUserReducer
});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;