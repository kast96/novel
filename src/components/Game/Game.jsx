const Game = (props) => {
    console.log(props);

    const onClick = () => {
        props.setStep(props.current.step + 1);
    }

    return (
        <div onClick={onClick}>
            Game
        </div>
    );
}

export default Game;