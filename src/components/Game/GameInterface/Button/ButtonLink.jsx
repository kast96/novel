import { Link } from "react-router-dom";
import s from './Button.module.scss';

const ButtonLink = ({children, icon, ...props}) => {
    return (
        <Link className={s.btn} {...props}>
            <span className={s.btn__icon}>{icon}</span>
            <span className={s.btn__text}>{children}</span>
        </Link>
    );
}

export default ButtonLink;