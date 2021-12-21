import {scenaries as scenariesAPI} from '../api/api';

const SET_SCENARIES = 'novel/scenaries/SET-SCENARIES';
const TOGGLE_IS_LOADING = 'novel/scenaries/TOGGLE-IS-LOADING';

const initialState = {
    isLoading: true,
    scenaries: {}
};

const scenariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SCENARIES:
            return {
                ...state,
                scenaries: action.scenaries
            };
        
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        default:
            return state;
    }
}

export const getScenaries = () => {
	return async (dispatch) => {
		dispatch(toggleIsLoading(true));
		let scenariesList = await scenariesAPI.getList();
        let scenariesConfings = [];
        for (const key in scenariesList) {
            let config = await scenariesAPI.getConfig(scenariesList[key]);
            config.src = scenariesList[key];
            scenariesConfings.push(config);
        }
		dispatch(setScenaries(scenariesConfings));
		dispatch(toggleIsLoading(false));
	}
}

export const setScenaries = (scenaries) => {
	return {type: SET_SCENARIES, scenaries}
}

export const toggleIsLoading = (isLoading) => {
	return {type: TOGGLE_IS_LOADING, isLoading}
}

export default scenariesReducer;