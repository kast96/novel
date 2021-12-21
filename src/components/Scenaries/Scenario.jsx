const Scenario = ({id, name}) => {
    return (
        <div>
            <a href={id}>{name}</a>
        </div>
    );
}

export default Scenario;