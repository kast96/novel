import s from './Settings.module.scss';
import {ReactComponent as CloseSvg} from '../../../../resources/svg/times-solid.svg';
import { getTrackBackground, Range } from 'react-range';

const Settings = ({onSetActivePopup, audioVolume, setAudioVolume}) => {
	let onChangeAudioVolume = (volume) => {
		setAudioVolume((volume[0]));
	}

	return (
		<div className={s.popup}>
			<div className={s.popup__header}>
				<h1 className={s.popup__title}>Settings</h1>
				<div className={s.popup__close} onClick={onSetActivePopup.bind(this, null)}><CloseSvg /></div>
			</div>
			<div className={s.popup__body}>
				<div className={s.popup__setting}>
					<div className={s.popup__setting__title}>Audio Volume</div>
					<Range className={s.range} cstep={1} min={0} max={100} values={[audioVolume]} onChange={onChangeAudioVolume} 
						renderTrack={({ props, children }) => (<div {...props} className={s.range__track}
							style={{background: getTrackBackground({
								values: [audioVolume],
								colors: ["#548BF4", "#ccc"],
								min: 0,
								max: 100
						  	})}}
						>{children}</div>)}
						renderThumb={({ props }) => (<div {...props} className={s.range__thumb}><div className={s.range__value}>{audioVolume}</div></div>)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Settings;