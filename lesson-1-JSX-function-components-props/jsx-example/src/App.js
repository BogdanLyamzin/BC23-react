import './App.css';

const title = "Home page";

const userName = "Тайвин";
const userLastName = "Ланнистер";

const userAge = 59;

const nullVar = null;
const booleanVar = true;
const underfinedVar = undefined;

const userChildren = ["Джейме Ланнистер", "Серсея Ланнистер", "Тирион"];

const house = {
  words: "Услышь мой рёв!",
  city: "Ланниспорт"
}

function App() {
  return (
    // createElement({tag: "div"})
    <>
      <header className='header'>Header</header>
      <main>
        <h1>{title}</h1>
        <p>User: {`${userName} ${userLastName}`}</p>
        <p>User age: {userAge}</p>
        <p>{nullVar}</p>
        <p>{booleanVar}</p>
        <p>{underfinedVar}</p>
        {house}
        <p>User children: {userChildren}</p>
        <label htmlFor="user-name">User name</label>
        <input id="user-name" type="text" autoComplete='' required />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
