import { SAVES_COUNT } from "../utils/constants";

const GET_SAVES = 'novel/saves/GET-SAVES';

const initialState = {
    saves: [],
};

const savesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SAVES:
            let saves = [];
            for (let i = 1; i <= SAVES_COUNT; i++) {
                saves.push(JSON.parse(localStorage.getItem(`save${i}`)));
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

export const setSave = (id, current) => {
    let saveData = {
        date: new Date().toISOString().substring(0, 10),
        current
    };

    localStorage.setItem(`save${id}`, JSON.stringify(saveData));
	return getSaves();
}

export const getSaves = () => {
	return {type: GET_SAVES}
}

export default savesReducer;