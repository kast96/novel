import { scenaries } from '../../api/api';

const Scenaries = () => {
    scenaries.getList().then((response) => {
        let scenariesList = response;

        for (const key in scenariesList) {
            scenaries.getConfig(scenariesList[key].src).then((response) => {
                let config = response;
                config.src = scenariesList[key].src;
                console.log(config);
            });
        }
    });

    return (
        <div>Scenaries</div>
    );
}

export default Scenaries;