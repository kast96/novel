import s from './Settings.module.scss';
import {ReactComponent as CloseSvg} from '../../../../resources/svg/times-solid.svg';
import { Range } from 'react-range';
import classNames from 'classnames';

const Settings = ({onSetActivePopup, audioVolume, setAudioVolume}) => {
	let onChangeAudioVolume = (volume) => {
		setAudioVolume(volume[0] / 100);
	}

	return (
		<div className={s.popup}>
			<div className={s.popup__header}>
				<h1 className={s.popup__title}>Settings</h1>
				<div className={s.popup__close} onClick={onSetActivePopup.bind(this, null)}><CloseSvg /></div>
			</div>
			<div className={s.popup__body}>
				<div className={classNames(s.popup__setting, s.audio_volume)}>
					<div className={s.popup__setting__title}>Audio Volume</div>
					<Range step={1} min={0} max={100} values={[audioVolume * 100]} onChange={onChangeAudioVolume} 
						renderTrack={({ props, children }) => (<div {...props} className={s.audio_volume__track}>{children}</div>)}
						renderThumb={({ props }) => (<div {...props} className={s.audio_volume__thumb} />)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Settings;