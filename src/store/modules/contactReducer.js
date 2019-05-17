import { createAction, handleActions } from 'redux-actions';
import { __await } from 'tslib';

const SEND_MAIL_REQUEST = 'contact/SEND_MAIL_REQUEST';
const SEND_MAIL_SUCCESS = 'contact/SEND_MAIL_SUCCESS'
const SEND_MAIL_FAILED = 'contact/SEND_MAIL_FAILED';

export const send_mail_request = createAction(SEND_MAIL_REQUEST);
export const send_mail_success = createAction(SEND_MAIL_SUCCESS);
export const send_mail_failed = createAction(SEND_MAIL_FAILED);

const initialState = {
    loading: false,
    message: '',
    errMessage: ''
}

export default handleActions ({
    [SEND_MAIL_REQUEST]: (state, action) => {
        return {
            ...state,
            loading: true,
            message: '',
            errMessage: ''
        };
    },
    [SEND_MAIL_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            message: action.payload.message,
            errMessage: ''
        };
    },
    [SEND_MAIL_FAILED]: (state, action) => {
        return {
            ...state,
            loading: false,
            message: '',
            errMessage: action.payload
        };
    }
}, initialState);