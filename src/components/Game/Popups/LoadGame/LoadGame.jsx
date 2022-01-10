import s from './LoadGame.module.scss';

const LoadGame = ({onSetActivePopup}) => {
    return (
        <div className={s.popup}>
            <div>Load</div>
            <div onClick={onSetActivePopup.bind(this, null)}>X</div>
        </div>
    );
}

export default LoadGame;