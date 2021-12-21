import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Game from "./Game";

const GameContainer = () => {
    let params = useParams();
    console.log(params.id);

    return (
        <Game />
    );
}

const mapStateToProps = (state) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, {}),
)(GameContainer);