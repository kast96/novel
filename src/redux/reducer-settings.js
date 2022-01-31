const SET_AUDIO_VOLUME = 'novel/settings/SET-AUDIO-VOLUME';

const initialState = {
	audioVolume: 50
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUDIO_VOLUME:
			return {
				...state,
				audioVolume: action.volume
			};

		default:
			return state;
	}
}


export const setAudioVolume = (volume) => {
	return {type: SET_AUDIO_VOLUME, volume}
}

export default settingsReducer;