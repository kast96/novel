import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useParams } from "react-router-dom";
import Game from "./Game";
import { getStory, setStep, updateCurrent } from "../../redux/reducer-story";
import { useState } from 'react';
import { SAVES_COUNT } from "../../utils/constants";

const GameContainer = ({isLoading, error, config, resources, story, jumpLabels, current, getStory, setStep, updateCurrent}) => {
    let params = useParams();
    let [step, setLocalStep] = useState(false);
    let [textPostion, setLocalTextPositin] = useState(0);
    let lazyText = (current.text) ? current.text.substring(0, textPostion) : '';
    let [activePopup, setActivePopup] = useState(null);
    let [arSaves, setSaves] = useState([]);

    const onClickGame = () => {
        if (current.jumpSelect) return;
        if (textPostion < current.text.length) {
            //skip lazy text. -1 for setTimeout make last step
            textPostion = current.text.length - 1;
        } else {
            setStep(current.step + 1);
        }
    }

    const onClickOption = (value) => {
        if (value && typeof(jumpLabels[value]) != 'undefined') {
            setStep(jumpLabels[value]);
            console.log(`jumpSelect: [${jumpLabels[value]}] ${value}`);
        }
    }

    const onSetActivePopup = (value) => {
        setActivePopup(value);
    }

    useEffect(() => {
        if (current.jumpTo && typeof(jumpLabels[current.jumpTo]) != 'undefined') {
            setStep(jumpLabels[current.jumpTo]);
            console.log(`jumpTo: [${jumpLabels[current.jumpTo]}] ${current.jumpTo}`);
        }
    }, [setStep, current.jumpTo, jumpLabels]);

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
        if (isLoading || !current.text || textPostion >= current.text.length) return;
        setTimeout(() => {
            let nextValue = textPostion + 1;
            if (isLoading || !current.text || textPostion >= current.text.length) return;
            if (textPostion > current.text.length) nextValue = current.text.length;
            setLocalTextPositin(nextValue);
        }, 50);
    }, [textPostion, current.text, isLoading]);
    
    useEffect(() => {
        let arTmpSaves = [];
        for (let i = 1; i <= SAVES_COUNT; i++) {
            arTmpSaves.push(JSON.parse(localStorage.getItem(`save${i}`)));
        }
        setSaves(arTmpSaves);
    }, [localStorage, setSaves]);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && error && <div>Error: {error}</div>}
            {!isLoading && !error && <Game config={config} resources={resources} story={story} current={current} lazyText={lazyText} onClickGame={onClickGame} onClickOption={onClickOption} activePopup={activePopup} onSetActivePopup={onSetActivePopup} arSaves={arSaves} />}
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
        jumpLabels: state.story.jumpLabels,
        current: state.story.current
    }
}

export default compose(
    connect(mapStateToProps, {getStory, setStep, updateCurrent}),
)(GameContainer);