import { createAction, handleActions } from 'redux-actions';

const SIGN_IN = 'login/SIGN_IN';
const CLEAR = 'login/CLEAR';

export const sign_in = createAction(SIGN_IN);
export const clear = createAction(CLEAR);

const initialState = {
    id : '',
    password : ''
};

export default handleActions ({
    [SIGN_IN]: (state, action) => {
        console.log('로그인');
    },
    [CLEAR]: (state, action) => {
        console.log('입력 초기화');
    }
}, initialState);