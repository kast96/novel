import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Game from "./Game";
import { getStory, setStep } from "../../redux/reducer-story";

const GameContainer = ({isLoading, error, config, resources, story, current, getStory, setStep}) => {
    let params = useParams();

    useEffect(() => {
        getStory(params.id);
    }, [getStory, params.id]);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && error && <div>Error: {error}</div>}
            {!isLoading && !error && <Game config={config} resources={resources} story={story} current={current} setStep={setStep} />}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.story.isLoading,
        error: state.story.error,
        config: state.story.config,
        resources: state.story.resources,
        story: state.story.story,
        current: state.story.current
    }
}

export default compose(
    connect(mapStateToProps, {getStory, setStep}),
)(GameContainer);