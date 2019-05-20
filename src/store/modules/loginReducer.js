import { createAction, handleActions } from 'redux-actions';

const CHANGE_VALUE = 'login/CHANGE_VALUE';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAIL = 'login/LOGIN_FAIL';
const CLEAR = 'login/CLEAR';

export const change_value = createAction(CHANGE_VALUE);
export const login_success = createAction(LOGIN_SUCCESS);
export const login_fail = createAction(LOGIN_FAIL)
export const clear = createAction(CLEAR);

const initialState = {
    email : '',
    password : '',
    wrong: false,
    signed: false,
    signed_email: null,
};

export default handleActions ({
    [CHANGE_VALUE]: (state, action) => {
        const { name, value } = action.payload;
        return {
            ...state,
            [name] : value,
        }
    },
    [LOGIN_SUCCESS]: (state, action) => {
        const { email } = this.state;
        console.log('로그인 성공');
        return {
            ...state,
            wrong: false,
            signed: true,
            signed_email: email,
        }
    },
    [LOGIN_FAIL]: (state, action) => {
        console.log('로그인 실패');
        return {
            ...state,
            wrong: true,
        }
    },
    [CLEAR]: (state, action) => {
        return initialState;
    },
}, initialState);