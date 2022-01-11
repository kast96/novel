import SaveGame from "./SaveGame";

const SaveGameContainer = ({onSetActivePopup, current, arSaves}) => {
    const onClickSaveGame = (id) => {
        if (!id) return;
        localStorage.setItem(`save${id}`, JSON.stringify(current));
    }
    console.log(arSaves);

    return (
        <SaveGame onSetActivePopup={onSetActivePopup} onClickSaveGame={onClickSaveGame} />
    );
}

export default SaveGameContainer;