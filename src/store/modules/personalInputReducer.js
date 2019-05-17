import { createAction, handleActions } from 'redux-actions';
//import  MyMailer  from 'server/models/mail/node_mailer';

const CHANGE_VALUE = 'signup/CHANGE_VALUE';
const SUBMIT_FIRST = 'signup/SUBMIT_FIRST';
const SEND_EMAIL = 'signup/SEND_EMAIL';
const CERTIFICATION = 'signup/CERTIFICATION';
const TO_HOME = 'signup/TO_HOME';

const SEND_MAIL_SUCCESS = 'contact/SEND_MAIL_SUCCESS'
const SEND_MAIL_FAILED = 'contact/SEND_MAIL_FAILED';

export const send_mail_success = createAction(SEND_MAIL_SUCCESS);
export const send_mail_failed = createAction(SEND_MAIL_FAILED);

export const change_value = createAction(CHANGE_VALUE, target => target);
export const submit_first = createAction(SUBMIT_FIRST);
export const send_email = createAction(SEND_EMAIL);
export const certification = createAction(CERTIFICATION);
export const to_home = createAction(TO_HOME);

const initialState = {
    email : '',
    password : '',
    pcheck : '',
    certification_number : '',
    sended : false,
    // 인증 확인 번호
    check_number : '1q2w3e',
    check : {
        email : false,
        password : false,
        pcheck : false,
        enable_next : false
    },

    loading: false,
    message: '',
    errMessage: ''
};

export default handleActions ({
    [CHANGE_VALUE] : (state, action) => {
        const { name, value } = action.payload;
        const email_regex = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/;
        const password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,20}$/;
        let check = false;

        if(name === 'email') {
            check = (email_regex.exec(value) !== null);
        }
        else if(name === 'password') {
            check = (password_regex.exec(value) !== null);
        }
        else if(name === 'pcheck') {
            if(value === state.password) check = true;
        }

        return {
            ...state,
            [name] : value,
            check: {
                ...state.check,
                [name] : check
            }
        }
    },
    [SUBMIT_FIRST] : (state, action) => {
        return { email : action.email, password : action.password};
    },
    [SEND_EMAIL] : (state, action) => {
        console.log(state.email + '로 메일을 전송합니다');
        return {...state,
             sended : true,
             loading: true,
             message: '',
             errMessage: ''};
    },
    [CERTIFICATION] : (state, action) => {
        if(state.certification_number === state.check_number) {
            return {
                ...state,
                check : {
                    ...state.check,
                    enable_next : true
                }
            };
        }
        else {
            return {
                ...state,
                check : {
                    ...state.check,
                    enable_next : false
                }
            }
        }
    },
    [TO_HOME] : (state, action) => {
        return initialState;
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