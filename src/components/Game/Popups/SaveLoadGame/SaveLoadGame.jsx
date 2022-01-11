import s from './SaveLoadGame.module.scss';
import {ReactComponent as CloseSvg} from '../../../../resources/svg/times-solid.svg';
import classNames from 'classnames';
import { POPUP_SAVE_GAME, POPUP_LOAD_GAME } from '../../../../utils/constants';

const SaveLoadGame = ({saves, storyLength, onSetActivePopup, onClickSaveGame, onClickLoadGame, activePopup}) => {
    storyLength = storyLength || 0;
    let title = '';
    let onClickEvent = () => {};

    switch (activePopup) {
        case POPUP_SAVE_GAME:
            title = 'Save';
            onClickEvent = onClickSaveGame;
            break;

        case POPUP_LOAD_GAME:
            title = 'Load';
            onClickEvent = onClickLoadGame;
            break;
    
        default:
            break;
    }

    return (
        <div className={s.popup}>
            <div className={s.popup__header}>
                <h1 className={s.popup__title}>{title}</h1>
                <div className={s.popup__close} onClick={onSetActivePopup.bind(this, null)}><CloseSvg /></div>
            </div>
            <div className={s.popup__body}>
                <div className={s.popup__items}>
                    {saves.map((item, key) => {
                        let index = key + 1;
                        let step = item?.current?.step + 1 || 0;
                        let progress = Math.round(step / storyLength * 100);
                        let date = item?.date || '-';

                        return (
                            <div className={s.popup__item} key={key} onClick={onClickEvent.bind(this, index)}>
                                <div className={s.popup__item__number}>{index}</div>
                                <div className={s.popup__item__name}>Save {index}</div>
                                <div className={classNames(s.popup__item__progress, {yellow: progress > 33, green: progress > 66})}>{`${progress}%`}</div>
                                <div className={s.popup__item__date}>{date}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SaveLoadGame;