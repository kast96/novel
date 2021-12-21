import Scenario from "./Scenario";

const Scenaries = ({scenaries}) => {
    return (
        <div>
            {scenaries.map(scenario => <Scenario key={scenario.id} id={scenario.id} name={scenario.name} />)}
        </div>
    );
}

export default Scenaries;