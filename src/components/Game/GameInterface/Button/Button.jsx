import s from './Button.module.scss';
import {ReactComponent as AngleLeftSvg} from '../../../../resources/svg/angle-left-solid.svg';

const Button = ({children, icon, clickHandler}) => {
    return (
        <div className={s.btn} onClick={clickHandler}>
            <div className={s.btn__icon}>{icon}</div>
            <div className={s.btn__text}>{children}</div>
        </div>
    );
}

export default Button;