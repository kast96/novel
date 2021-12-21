import ScenariesContainer from './components/Scenaries/ScenariesContainer';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import Game from './components/Game/Game';

function App() {
  return (
    <Provider store={store}>
      <ScenariesContainer />
    </Provider>
  );
}

export default App;
