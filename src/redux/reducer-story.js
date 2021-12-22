import {scenaries as scenariesAPI} from '../api/api';

const SET_CONFIG = 'novel/scenaries/SET-CONFIG';
const SET_RESOURCES = 'novel/scenaries/SET-RESOURCES';
const SET_STORY = 'novel/scenaries/SET-STORY';
const TOGGLE_IS_LOADING = 'novel/scenaries/TOGGLE-IS-LOADING';
const SET_ERROR = 'novel/scenaries/SET-ERROR';

const initialState = {
    isLoading: true,
    config: {},
    resources: {},
    story: {},
    error: false,
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
            return {
                ...state,
                story: action.story
            };
        
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        case SET_ERROR:
            return {...state, error: action.error}

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

export default storyReducer;