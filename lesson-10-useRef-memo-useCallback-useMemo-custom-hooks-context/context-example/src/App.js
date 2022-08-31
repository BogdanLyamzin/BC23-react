import LangContext from './langContext';

import Navbar from './modules/Navbar';
import Main from "./modules/Main";

import './App.css';

function App() {

  return (
    <LangContext>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </LangContext>
  );
}

export default App;
