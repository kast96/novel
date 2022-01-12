import { SAVES_COUNT } from "../utils/constants";
import { getSaveCode } from "../utils/variables-helper";

const GET_SAVES = 'novel/saves/GET-SAVES';

const initialState = {
    saves: [],
};

const savesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SAVES:
            let saves = [];
            for (let i = 1; i <= SAVES_COUNT; i++) {
                saves.push(JSON.parse(localStorage.getItem(getSaveCode(action.storyCode, i))));
            }

            if (JSON.stringify(saves) === JSON.stringify(state.saves)) {
                return state;
            }

            return {
                ...state,
                saves
            };

        default:
            return state;
    }
}

export const setSave = (storyCode, id, current) => {
    let saveData = {
        date: new Date().toISOString().substring(0, 10),
        current
    };

    localStorage.setItem(getSaveCode(storyCode, id), JSON.stringify(saveData));
	return getSaves(storyCode);
}

export const getSaves = (storyCode) => {
	return {type: GET_SAVES, storyCode}
}

export default savesReducer;