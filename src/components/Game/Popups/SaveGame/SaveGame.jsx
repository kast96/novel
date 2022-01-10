import s from './SaveGame.module.scss';
import {ReactComponent as CloseSvg} from '../../../../resources/svg/times-solid.svg';

const SaveGame = ({onSetActivePopup}) => {
    let items = [];
    for (let i = 1; i <= 6; i++) {
        items.push(i);
    }
    return (
        <div className={s.popup}>
            <div className={s.popup__header}>
                <h1 className={s.popup__title}>Save</h1>
                <div className={s.popup__close} onClick={onSetActivePopup.bind(this, null)}><CloseSvg /></div>
            </div>
            <div className={s.popup__body}>
                <div className={s.popup__items}>
                    {items.map(item => (
                    <div className={s.popup__item}>
                        <div className={s.popup__item__number}>{item}</div>
                        <div className={s.popup__item__name}>Save {item}</div>
                        <div className={s.popup__item__progress  + ' green'}>34%</div>
                        <div className={s.popup__item__date}>10.01.2022</div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SaveGame;