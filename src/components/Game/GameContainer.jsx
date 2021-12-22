import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Game from "./Game";
import { getStory } from "../../redux/reducer-story";

const GameContainer = ({isLoading, error, config, resources, story, getStory}) => {
    let params = useParams();

    useEffect(() => {
        getStory(params.id);
    }, [getStory, params.id]);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && error && <div>Error: {error}</div>}
            {!isLoading && !error && <Game config={config} resources={resources} story={story} />}
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
    }
}

export default compose(
    connect(mapStateToProps, {getStory}),
)(GameContainer);