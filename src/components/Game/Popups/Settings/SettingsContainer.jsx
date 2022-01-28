import { connect } from "react-redux";
import { compose } from "redux";
import Settings from "./Settings";
import { setAudioVolume } from "../../../../redux/reducer-settings";

const SettingsContainer = ({audioVolume, setAudioVolume, onSetActivePopup}) => {
    return (
        <Settings onSetActivePopup={onSetActivePopup} audioVolume={audioVolume} setAudioVolume={setAudioVolume} />
    );
}

const mapStateToProps = (state) => {
    return {
        audioVolume: state.settings.audioVolume,
    }
}

export default compose(
    connect(mapStateToProps, {setAudioVolume}),
)(SettingsContainer);