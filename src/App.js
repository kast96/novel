import ScenariesContainer from './components/Scenaries/ScenariesContainer';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GameContainer from './components/Game/GameContainer';
import './resources/fonts/Nunito/Nunito.scss';
import s from './App.module.scss';

function App() {
  return (
    <div className={s.app}>
      <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<ScenariesContainer />}/>
            <Route exact path="/game/:id" element={<GameContainer />}/>
            <Route exact path="*" element={<div>404</div>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
