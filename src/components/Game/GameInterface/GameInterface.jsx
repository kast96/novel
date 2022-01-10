import s from './GameInterface.module.scss';
import {ReactComponent as DownloadSvg} from '../../../resources/svg/download-solid.svg';
import {ReactComponent as UploadSvg} from '../../../resources/svg/upload-solid.svg';
import { POPUP_LOAD_GAME, POPUP_SAVE_GAME } from '../../../utils/constants';

const GameInterface = ({onSetActivePopup}) => {
    return (
        <div className={s.interface}>
            <div className={s.interface__btn} onClick={onSetActivePopup.bind(this, POPUP_SAVE_GAME)}>
                <DownloadSvg />
            </div>
            <div className={s.interface__btn} onClick={onSetActivePopup.bind(this, POPUP_LOAD_GAME)}>
                <UploadSvg />
            </div>
        </div>
    );
}

export default GameInterface;