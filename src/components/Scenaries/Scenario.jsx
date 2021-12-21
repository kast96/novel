import { Link } from "react-router-dom";

const Scenario = ({id, name}) => {
    return (
        <div>
            <Link to={`/game/${id}/`}>{name}</Link>
        </div>
    );
}

export default Scenario;