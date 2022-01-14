import s from './GameInterface.module.scss';
import {ReactComponent as PlusSvg} from '../../../resources/svg/plus-solid.svg';
import {ReactComponent as DownloadSvg} from '../../../resources/svg/download-solid.svg';
import {ReactComponent as UploadSvg} from '../../../resources/svg/upload-solid.svg';
import {ReactComponent as AngleLeftSvg} from '../../../resources/svg/angle-left-solid.svg';
import { POPUP_LOAD_GAME, POPUP_SAVE_GAME } from '../../../utils/constants';
import classNames from 'classnames';
import Button from './Button/Button';
import ButtonLink from './Button/ButtonLink';

const GameInterface = ({onSetActivePopup, onClickNewGame}) => {
    return (
        <>
            <div className={classNames(s.interface, s.interface__left)}>
                <ButtonLink icon={<AngleLeftSvg />} to={'/'}>Back</ButtonLink>
            </div>
            <div className={classNames(s.interface, s.interface__right)}>
                <Button icon={<PlusSvg />} clickHandler={onClickNewGame}>New Game</Button>
                <Button icon={<DownloadSvg />} clickHandler={onSetActivePopup.bind(this, POPUP_SAVE_GAME)}>Save Game</Button>
                <Button icon={<UploadSvg />} clickHandler={onSetActivePopup.bind(this, POPUP_LOAD_GAME)}>Load Game</Button>
            </div>
        </>
    );
}

export default GameInterface;