import s from './LoadGame.module.scss';

const LoadGame = ({onSetActivePopup}) => {
    return (
        <div className={s.popup}>
            <div className={s.popup__header}>
                <h1 className={s.popup__title}>Load</h1>
                <div className={s.popup__close} onClick={onSetActivePopup.bind(this, null)}>X</div>
            </div>
            <div className={s.popup__body}>

            </div>
        </div>
    );
}

export default LoadGame;