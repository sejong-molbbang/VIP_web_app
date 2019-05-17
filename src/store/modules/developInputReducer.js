import { createAction, handleActions } from 'redux-actions';

const CLICK_AREA = 'signup/CLICK_AREA';
const ADD_INTEREST = 'signup/ADD_INTEREST';
const DESIGNER_RADIO = 'signup/DESIGNER_RADIO';
const DEVELOP_RADIO = 'signup/DEVELOP_RADIO';

export const click_area = createAction(CLICK_AREA, name=>name);
export const add_interest = createAction(ADD_INTEREST, name=>name);
export const designer_radio = createAction(DESIGNER_RADIO, value=>value);
export const develop_radio = createAction(DEVELOP_RADIO, value=>value);

const initialState = {
    everCoding : true,
    designer: true,
    choiceLimit : false,
    areas: {
        ai: true,
        web: true,
        mobile: true,
        server: true,
        dataAnalysis: true,
        algorithm: true,
        iot: true,
        embedded: true,
        system: true,
        multimedia: true,
        graphic: true,
        network: true,
        game: true,
        security: true,
        language: false,
    },
    interests : [
        { id: 1, text: 'Sound', color:'orange', choice: false },
        { id: 2, text: 'Social', color:'red', choice: false },
        { id: 3, text: 'Game', color:'purple', choice: false },
        { id: 4, text: 'Fashion', color:'blue', choice: false },
        { id: 5, text: 'Fitness', color:'green', choice: false },
        { id: 6, text: 'Education', color:'yellow', choice: false },
        { id: 7, text: 'Construction', color:'pink', choice: false },
        { id: 8, text: 'Inconvenience solution', color:'olive', choice: false },
        { id: 9, text: 'Mechanical Engineering', color:'violet', choice: false },
        { id: 10, text: 'Economy', color:'teal', choice: false },
        { id: 11, text: 'Image processing', color:'brown', choice: false },
    ]
};

export default handleActions ({
    [CLICK_AREA] : (state, action) => {
        const { areas } = state;
        const {inverted, name} = action.payload;

        return {
            ...state,
            areas : {
                ...areas,
                [name] : !inverted
            }
        };
    },
    [ADD_INTEREST] : (state, action) => {
        const name = action.payload;
        const interests = state.interests;
        const index = interests.findIndex(interest => interest.text === name);
        const selected = interests[index];
        const choicedinterestList = interests.filter(interest => interest.choice);
        let limit = false;

        // 이미 선택된 걸 취소하는 경우
        if(selected.choice) {
            if(choicedinterestList.length <= 5) limit = false;
            else limit = true;
        }
        // 새로운 걸 선택하는 경우
        else {
            if(choicedinterestList.length === 3) limit = true;
            else if(choicedinterestList.length >= 4) return {...state};
        }
        
        return {
            ...state,
            choiceLimit : limit,
            interests: [
                ...interests.slice(0, index),
                {
                    ...selected,
                    choice: !selected.choice,
                },
                ...interests.slice(index + 1, interests.length)
            ]
        };
    },
    [DESIGNER_RADIO] : (state, action) => {
        const value = action.payload;
        if(value === 'yes') {
            return {
                ...state,
                designer : true
            }
        }
        else {
            return {
                ...state,
                designer : false
            }
        }
    },
    [DEVELOP_RADIO] : (state, action) => {
        const value = action.payload;
        if(value === 'yes') {
            return {
                ...state,
                everCoding : true
            }
        }
        else {
            return {
                ...state,
                everCoding : false
            }
        }
    }
}, initialState);