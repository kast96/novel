import s from './Button.module.scss';

const Button = ({children, icon, clickHandler}) => {
    return (
        <div className={s.btn} onClick={clickHandler}>
            <span className={s.btn__icon}>{icon}</span>
            <span className={s.btn__text}>{children}</span>
        </div>
    );
}

export default Button;