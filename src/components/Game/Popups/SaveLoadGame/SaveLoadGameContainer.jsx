import SaveLoadGame from "./SaveLoadGame";
import { connect } from "react-redux";
import { compose } from "redux";
import { setSave, getSaves } from "../../../../redux/reducer-saves";
import { useEffect } from "react";
import { setCurrent } from "../../../../redux/reducer-story";

const SaveLoadGameContainer = ({onSetActivePopup, current, saves, storyLength, getSaves, setSave, activePopup, setCurrent}) => {
    useEffect(() => {
        getSaves();
    }, [saves, getSaves]);

    const onClickSaveGame = (id) => {
        setSave(id, current);
    }

    const onClickLoadGame = (id) => {
        let save = JSON.parse(localStorage.getItem(`save${id}`));
        if (!save) return;
        setCurrent(save.current);
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
    connect(mapStateToProps, {setSave, getSaves, setCurrent}),
)(SaveLoadGameContainer);