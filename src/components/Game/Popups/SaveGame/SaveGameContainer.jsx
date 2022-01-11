import SaveGame from "./SaveGame";
import { connect } from "react-redux";
import { compose } from "redux";
import { setSaves, getSaves } from "../../../../redux/reducer-saves";
import { useEffect } from "react";

const SaveGameContainer = ({onSetActivePopup, current, saves, storyLength, getSaves, setSaves}) => {
    useEffect(() => {
        getSaves();
    }, [saves, getSaves]);

    const onClickSaveGame = (id) => {
        setSaves(id, current);
    }

    return (
        <SaveGame onSetActivePopup={onSetActivePopup} onClickSaveGame={onClickSaveGame} saves={saves} storyLength={storyLength} />
    );
}

const mapStateToProps = (state) => {
    return {
        saves: state.saves.saves,
    }
}

export default compose(
    connect(mapStateToProps, {setSaves, getSaves}),
)(SaveGameContainer);