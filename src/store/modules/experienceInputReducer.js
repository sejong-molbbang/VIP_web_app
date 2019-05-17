import { createAction, handleActions } from 'redux-actions';

const ADD_EXPERIENCE = 'signup/ADD_EXPERIENCE';
const DELETE_EXPERIENCE = 'signup/DELETE_EXP';
const CHANGE_VALUE = 'experience/CHANGE_VALUE';

export const add_experience = createAction(ADD_EXPERIENCE);
export const delete_experience = createAction(DELETE_EXPERIENCE, id=>id);
export const change_value = createAction(CHANGE_VALUE);

const initialState = {
    experiences : [
        {
            id: 1,
            project_name: '',
            explanation: '',
            tags: []
        }
    ]
}

export default handleActions ({
    [ADD_EXPERIENCE]: (state, action) => {
        const { experiences } = state;
        const length = experiences.length;
        let id = 1;
        if(length >= 1) id = experiences[length-1].id + 1;

        return {
            ...state,
            experiences : [
                ...experiences,
                {
                    id: id,
                    project_name: '',
                    explanation: '',
                    tags: []
                }
            ]
        }
    },
    [DELETE_EXPERIENCE]: (state, action) => {
        const id = action.payload;
        const { experiences } = state;
        const index = experiences.findIndex(experience=> experience.id === id)

        return {
            ...state,
            experiences: [
                ...experiences.slice(0, index),
                ...experiences.slice(index+1, experiences.length)
            ]
        }
    },
    [CHANGE_VALUE]: (state, action) => {
        const { id, name, value } = action.payload;
        const { experiences } = state;
        const index = experiences.findIndex(experience=> experience.id === id);
        const selected = experiences[index];
        
        return {
            ...state,
            experiences: [
                ...experiences.slice(0, index),
                {
                    ...selected,
                    [name]: value
                },
                ...experiences.slice(index+1, experiences.length)
            ]
        }
    }
}, initialState);
