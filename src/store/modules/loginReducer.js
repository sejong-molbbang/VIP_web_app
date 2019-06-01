import { createAction, handleActions } from 'redux-actions';

const CHANGE_VALUE = 'login/CHANGE_VALUE';
const LOGIN_RESULT = 'login/LOGIN_RESULT';
const CLEAR = 'login/CLEAR';

export const change_value = createAction(CHANGE_VALUE);
export const login_result = createAction(LOGIN_RESULT);
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
    [LOGIN_RESULT]: (state, action) => {
        const { result } = action.payload;
        if (result == 'success') {
            console.log('로그인 성공');
            return {
                ...state,
                wrong: false,
                signed: true,
                signed_email: state.email,
            }
        }
        else {
            console.log('로그인 실패');
            return {
                ...state,
                signed: false,
                wrong: true,
            }
        }
    },
    [CLEAR]: (state, action) => {
        if (state.signed) {
            return {
                email : '',
                password : '',
                wrong: false,
                signed: false,
                signed_email: state.email,
            }
        }
        else if (state.wrong) {
            return {
                email : '',
                password : '',
                wrong: true,
                signed: false,
            }
        }
        
        return initialState;
    },
}, initialState);