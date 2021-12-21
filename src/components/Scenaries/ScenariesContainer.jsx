import React, { useEffect } from "react";
import { connect } from "react-redux";
import Scenaries from "./Scenaries";
import { getScenaries } from '../../redux/reducer-scenaries';

const ScenariesContainer = React.memo(({scenaries, isLoading, getScenaries}) => {
  useEffect(() => {
    getScenaries();
  }, [getScenaries]);

  return (
    <div>
      <h1>Сценарии</h1>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <Scenaries scenaries={scenaries} />}
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.scenaries.isLoading,
    scenaries: state.scenaries.scenaries
  }
}

export default connect(mapStateToProps, {getScenaries})(ScenariesContainer);