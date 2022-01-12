import {scenaries as scenariesAPI} from '../api/api';

const SET_CONFIG = 'novel/story/SET-CONFIG';
const SET_RESOURCES = 'novel/story/SET-RESOURCES';
const SET_STORY = 'novel/story/SET-STORY';
const TOGGLE_IS_LOADING = 'novel/story/TOGGLE-IS-LOADING';
const SET_ERROR = 'novel/story/SET-ERROR';
const SET_STEP = 'novel/story/SET-STEP';
const UPDATE_CURRENT = 'novel/story/UPDATE-CURRENT';
const SET_CURRENT = 'novel/story/SET-CURRENT';

const initialState = {
    isLoading: true,
    config: {},
    resources: {},
    story: {},
    jumpLabels: {},
    error: false,
    current: {
        step: 0,
        background: false,
        persons: {
            left: {
                person: false,
                spriteName: false,
            },
            centerLeft: {
                person: false,
                spriteName: false,
            },
            center: {
                person: false,
                spriteName: false,
            },
            centerRight: {
                person: false,
                spriteName: false,
            },
            right: {
                person: false,
                spriteName: false,
            },
        },
        speaker: false,
        text: false,
        jumpTo: false,
        jumpSelect: false
    }
};

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONFIG:
            return {
                ...state,
                config: action.config
            };

        case SET_RESOURCES:
            return {
                ...state,
                resources: action.resources
            };

        case SET_STORY:
            let jumpLabels = {};
            for (const key in action.story) {
                const storyItem = action.story[key];
                if (storyItem.jumpLabel) {
                    jumpLabels[storyItem.jumpLabel] = parseInt(key);
                }
            }
            return {
                ...state,
                story: action.story,
                jumpLabels,
            };
        
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        case SET_ERROR:
            return {...state, error: action.error}

        case SET_STEP:
            return {
                ...state,
                current: {
                    ...state.current,
                    step: (action.step < state.story.length) ? action.step : 0
                }
            }

        case UPDATE_CURRENT:
            let current = {
                ...state.current,
                persons: {
                    left: {...state.current.persons.left},
                    centerLeft: {...state.current.persons.centerLeft},
                    center: {...state.current.persons.center},
                    centerRight: {...state.current.persons.centerRight},
                    right: {...state.current.persons.right}
                }
            };

            let storyItem = state.story[current.step];
            if (storyItem) {
                if (storyItem.background) current.background = storyItem?.background;

                if (storyItem.personLeft) current.persons.left.person = storyItem.personLeft;
                if (storyItem.personCenterLeft) current.persons.centerLeft.person = storyItem.personCenterLeft;
                if (storyItem.personCenter) current.persons.center.person = storyItem.personCenter;
                if (storyItem.personCenterRight) current.persons.centerRight.person = storyItem.personCenterRight;
                if (storyItem.personRight) current.persons.right.person = storyItem.personRight;

                if (storyItem.personLeftSprite) current.persons.left.spriteName = storyItem.personLeftSprite;
                if (storyItem.personCenterLeftSprite) current.persons.centerLeft.spriteName = storyItem.personCenterLeftSprite;
                if (storyItem.personCenterSprite) current.persons.center.spriteName = storyItem.personCenterSprite;
                if (storyItem.personCenterRightSprite) current.persons.centerRight.spriteName = storyItem.personCenterRightSprite;
                if (storyItem.personRightSprite) current.persons.right.spriteName = storyItem.personRightSprite;

                if (storyItem.personLeft && !storyItem.personLeftSprite) current.persons.left.spriteName = false;
                if (storyItem.personCenterLeft && !storyItem.personCenterLeftSprite) current.persons.centerLeft.spriteName = false;
                if (storyItem.personCenter && !storyItem.personCenterSprite) current.persons.center.spriteName = false;
                if (storyItem.personCenterRight && !storyItem.personCenterRightSprite) current.persons.centerRight.spriteName = false;
                if (storyItem.personRight && !storyItem.personRightSprite) current.persons.right.spriteName = false;

                if (storyItem.speaker) current.speaker = storyItem?.speaker;
                if (storyItem.text) current.text = storyItem?.text;

                current.jumpTo = storyItem.jumpTo ? storyItem.jumpTo : false;
                current.jumpSelect = storyItem.jumpSelect ? storyItem.jumpSelect : false;
            }

            return {
                ...state,
                current
            }

        case SET_CURRENT: {
            return {
                ...state,
                current: action.current
            }
        }

        default:
            return state;
    }
}

export const getStory = (id) => {
	return async (dispatch) => {
		dispatch(setError(false));
		dispatch(toggleIsLoading(true));

		let config = await scenariesAPI.getConfig(id);
        if (typeof(config) !== 'object') {
            dispatch(setError('Не найден конфигурационный файл сценария'));
            dispatch(toggleIsLoading(false));
            return;
        }
        config.id = id;
        dispatch(setConfig(config));

        let resources = await scenariesAPI.getResources(id);
        if (typeof(resources) !== 'object') {
            dispatch(setError('Не найден файл ресурсов сценария'));
            dispatch(toggleIsLoading(false));
            return;
        }
        dispatch(setResources(resources));

        let story = await scenariesAPI.getStory(id);
        if (typeof(story) !== 'object') {
            dispatch(setError('Не найден файл сценария'));
            dispatch(toggleIsLoading(false));
            return;
        }
        dispatch(setStory(story));

		dispatch(toggleIsLoading(false));
	}
}

export const setConfig = (config) => {
	return {type: SET_CONFIG, config}
}

export const setResources = (resources) => {
	return {type: SET_RESOURCES, resources}
}

export const setStory = (story) => {
	return {type: SET_STORY, story}
}

export const toggleIsLoading = (isLoading) => {
	return {type: TOGGLE_IS_LOADING, isLoading}
}

export const setError = (error) => {
	return {type: SET_ERROR, error}
}

export const setStep = (step) => {
    return {type: SET_STEP, step}
}

export const updateCurrent = () => {
    return {type: UPDATE_CURRENT}
}

export const setCurrent = (current) => {
    return {type: SET_CURRENT, current}
}

export default storyReducer;