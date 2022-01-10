import s from './SaveGame.module.scss';

const SaveGame = ({onSetActivePopup}) => {
    return (
        <div className={s.popup}>
            <div>Save</div>
            <div onClick={onSetActivePopup.bind(this, null)}>X</div>
        </div>
    );
}

export default SaveGame;