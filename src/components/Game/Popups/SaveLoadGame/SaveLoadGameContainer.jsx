import SaveLoadGame from "./SaveLoadGame";
import { connect } from "react-redux";
import { compose } from "redux";
import { setSave, getSaves } from "../../../../redux/reducer-saves";
import { useEffect } from "react";

const SaveLoadGameContainer = ({onSetActivePopup, current, saves, storyLength, getSaves, setSave, activePopup}) => {
    useEffect(() => {
        getSaves();
    }, [saves, getSaves]);

    const onClickSaveGame = (id) => {
        setSave(id, current);
    }

    const onClickLoadGame = (id) => {
        console.log(JSON.parse(localStorage.getItem(`save${id}`)));
        //updateCurrent(JSON.parse(localStorage.getItem(`save${id}`)));
    }

    return (
        <SaveLoadGame onSetActivePopup={onSetActivePopup} onClickSaveGame={onClickSaveGame} onClickLoadGame={onClickLoadGame} saves={saves} storyLength={storyLength} activePopup={activePopup} />
    );
}

const mapStateToProps = (state) => {
    return {
        saves: state.saves.saves,
    }
}

export default compose(
    connect(mapStateToProps, {setSave, getSaves}),
)(SaveLoadGameContainer);