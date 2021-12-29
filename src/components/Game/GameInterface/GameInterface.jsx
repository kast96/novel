import s from './GameInterface.module.scss';
import {ReactComponent as DownloadSvg} from '../../../svg/download-solid.svg';
import {ReactComponent as UploadSvg} from '../../../svg/upload-solid.svg';

const GameInterface = () => {
    return (
        <div className={s.interface}>
            <div className={s.interface__btn}>
                <DownloadSvg />
            </div>
            <div className={s.interface__btn}>
                <UploadSvg />
            </div>
        </div>
    );
}

export default GameInterface;