import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Game from "./Game";
import { getStory, setStep, updateCurrent } from "../../redux/reducer-story";
import { useState } from 'react';

const GameContainer = ({isLoading, error, config, resources, story, current, getStory, setStep, updateCurrent}) => {
    let params = useParams();
    let [step, setLocalStep] = useState(false);
    let [textPostion, setLocalTextPositin] = useState(0);
    let lazyText = (current.text) ? current.text.substring(0, textPostion) : '';

    useEffect(() => {
        getStory(params.id);
    }, [getStory, params.id]);

    useEffect(() => {
        if (isLoading || step === current.step) return;
        updateCurrent();
        setLocalStep(current.step);
        setLocalTextPositin(0);
    }, [step, current.step, isLoading, updateCurrent]);

    useEffect(() => {
        if (isLoading || !current.text  || textPostion === current.text.length) return;
        setTimeout(() => {
            if (isLoading || !current.text || textPostion === current.text.length) return;
            setLocalTextPositin(textPostion + 1);
        }, 50);
    }, [textPostion, current.text, isLoading]);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && error && <div>Error: {error}</div>}
            {!isLoading && !error && <Game config={config} resources={resources} story={story} current={current} setStep={setStep} lazyText={lazyText} />}
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
    connect(mapStateToProps, {getStory, setStep, updateCurrent}),
)(GameContainer);