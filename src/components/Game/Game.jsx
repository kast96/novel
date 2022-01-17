import classNames from 'classnames';
import s from './Game.module.scss';
import GameInterface from './GameInterface/GameInterface';
import { POPUP_LOAD_GAME, POPUP_SAVE_GAME } from '../../utils/constants';
import SaveLoadGameContainer from './Popups/SaveLoadGame/SaveLoadGameContainer';
import MultiSoundPlayer from './MultiSoundPlayer/MultiSoundPlayer';

const Game = ({config, resources, current, lazyText, onClickGame, onClickOption, activePopup, onSetActivePopup, storyLength, onClickNewGame}) => {
    let path = '/scenaries/'+config.id+'/';
    let background = (resources.backgrounds && resources.backgrounds[current.background]) ? 'url("'+path+resources.backgrounds[current.background]+'")' : '';
    let personSpriteLeft = current.persons.left.spriteName || 'normal';
    let personLeft = (current.persons.left.person && resources.persons && resources.persons[current.persons.left.person]?.sprites[personSpriteLeft]) ? path+resources.persons[current.persons.left.person].sprites[personSpriteLeft] : false;
    let personSpriteCenterLeft = current.persons.centerLeft.spriteName || 'normal';
    let personCenterLeft = (current.persons.centerLeft.person && resources.persons && resources.persons[current.persons.centerLeft.person]?.sprites[personSpriteCenterLeft]) ? path+resources.persons[current.persons.centerLeft.person].sprites[personSpriteCenterLeft] : false;
    let personSpriteCenter = current.persons.center.spriteName || 'normal';
    let personCenter = (current.persons.center.person && resources.persons && resources.persons[current.persons.center.person]?.sprites[personSpriteCenter]) ? path+resources.persons[current.persons.center.person].sprites[personSpriteCenter] : false;
    let personSpriteCenterRight = current.persons.centerRight.spriteName || 'normal';
    let personCenterRight = (current.persons.centerRight.person && resources.persons && resources.persons[current.persons.centerRight.person]?.sprites[personSpriteCenterRight]) ? path+resources.persons[current.persons.centerRight.person].sprites[personSpriteCenterRight] : false;
    let personSpriteRight = current.persons.right.spriteName || 'normal';
    let personRight = (current.persons.right.person && resources.persons && resources.persons[current.persons.right.person]?.sprites[personSpriteRight]) ? path+resources.persons[current.persons.right.person].sprites[personSpriteRight] : false;
    let speaker = (current.speaker && resources.persons && ((current.speaker === 'player' && resources.player) || resources.persons[current.speaker]));
    let sounds = Object.keys(resources.sounds);
    let soundIndex = (current.sound && sounds) ? sounds.indexOf(current.sound) : -1;
    let urls = (sounds) ? sounds.map((code) => path+resources.sounds[code]) : false;
    
    return (
        <div className={s.game}>
            {urls && <MultiSoundPlayer urls={urls} soundIndex={soundIndex} />}
            <div className={s.background} style={{backgroundImage: background}}></div>
            <div className={s.clickarea} onClick={onClickGame}></div>
            <div className={s.persons}>
                <div className={classNames(s.person, s.person__left)}>{personLeft && <img src={personLeft} alt="" />}</div>
                <div className={classNames(s.person, s.person__centerLeft)}>{personCenterLeft && <img src={personCenterLeft} alt="" />}</div>
                <div className={classNames(s.person, s.person__center)}>{personCenter && <img src={personCenter} alt="" />}</div>
                <div className={classNames(s.person, s.person__centerRight)}>{personCenterRight && <img src={personCenterRight} alt="" />}</div>
                <div className={classNames(s.person, s.person__right)}>{personRight && <img src={personRight} alt="" />}</div>
            </div>
            <div className={s.message}>
                <div className={s.message__author} style={{color: speaker?.color}}>{speaker?.name || ' '}</div>
                <div className={s.message__text}>{lazyText}</div>
            </div>
            {current.jumpSelect &&
                <div className={s.select}>
                    {current.jumpSelect.map((option) => <div key={option.jumpTo} className={s.select__option} onClick={onClickOption.bind(this, option.jumpTo)}>{option.text}</div>)}
                </div>
            }
            <GameInterface onSetActivePopup={onSetActivePopup} onClickNewGame={onClickNewGame} />
            {(activePopup === POPUP_SAVE_GAME || activePopup === POPUP_LOAD_GAME) && <SaveLoadGameContainer onSetActivePopup={onSetActivePopup} current={current} storyLength={storyLength} activePopup={activePopup} config={config} />}
        </div>
    );
}

export default Game;