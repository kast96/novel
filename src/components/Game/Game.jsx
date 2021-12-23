import classNames from 'classnames';
import s from './Game.module.scss';

const Game = ({config, resources, current, setStep}) => {
    const onClick = () => {
        setStep(current.step + 1);
    }

    let background = (resources.backgrounds && resources.backgrounds[current.background]) ? 'url("/scenaries/'+config.id+'/'+resources.backgrounds[current.background]+'")' : '';
    let personSpriteCenter = current.persons.center.spriteName || 'normal';
    let personCenter = (current.persons.center.person && resources.persons && resources.persons[current.persons.center.person]?.sprites[personSpriteCenter]) ? '/scenaries/'+config.id+'/'+resources.persons[current.persons.center.person].sprites[personSpriteCenter] : false;

    return (
        <div className={s.game} onClick={onClick}>
            <div className={s.background} style={{background: background}}></div>
            <div className={s.persons}>
                <div className={classNames(s.person, s.person__left)}></div>
                <div className={classNames(s.person, s.person__centerLeft)}></div>
                <div className={classNames(s.person, s.person__center)}>{personCenter && <img src={personCenter} />}</div>
                <div className={classNames(s.person, s.person__centerRight)}></div>
                <div className={classNames(s.person, s.person__right)}></div>
            </div>
        </div>
    );
}

export default Game;