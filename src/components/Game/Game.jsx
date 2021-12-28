import classNames from 'classnames';
import s from './Game.module.scss';

const Game = ({config, resources, current, setStep, lazyText}) => {
    const onClick = () => {
        setStep(current.step + 1);
    }

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
    let speaker = (current.speaker && resources.persons && resources.persons[current.speaker]);

    return (
        <div className={s.game} onClick={onClick}>
            <div className={s.background} style={{backgroundImage: background}}></div>
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
        </div>
    );
}

export default Game;