import Menu from './components/Menu/Menu';
import ToogleButton from './components/ToggleButton/ToggleButton';
import Vote from "./components/Vote/Vote";

import './App.css';

import menuItems from "./data/menuItems.json";

function App() {
  return (
    <div className="App">
      <Menu items={menuItems} />
      {/* const props = {
           items: menuItems,
          };
          const menu = new Menu(props);
          menu.render();
      */}
      <ToogleButton text="Click me" />
      <Vote />
    </div>
  );
}

export default App;
