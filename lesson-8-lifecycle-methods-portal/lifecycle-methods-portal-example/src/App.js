import Books from "./components/Books/Books";
import Posts from "./components/Posts/Posts";
import PostsSearch from "./components/PostsSearch/PostsSearch";

import "./shared/styles/style.scss";

function App() {
  return (
    <div className="App">
      <PostsSearch />
      {/* <Posts /> */}
      {/* <Books /> */}
      {/* 
      const props = {};
      const books = new Books(props);
      const result = books.render();
      result => DOM
      books.componentDidMount()
      */}
    </div>
  );
}

export default App;
