import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Button from "./components/Button/Button";
import TextField from "./components/TextField/TextField";

import menuItems from "./data/menuItems.json";


import './App.css';

const showModalProps = {
  text: "Show modal",
  type: "button",
};

const addUserProps = {
  text: "Add user",
  type: "submit",
}

function App() {
  return (
    <div className="App">
     <Header title="Welcome to site!" menuItems={menuItems} />
     <p><Button text={showModalProps.text} type={showModalProps.type} /></p>
          {/* const props = {
      text: "Show modal",
      type: "button"
     }
     Button(props) */}
     <p><Button {...addUserProps} /></p>
     <p><TextField placeholder="Enter name"/></p>
     {/* Header() */}
     <Footer />
    </div>
  );
}

export default App;
