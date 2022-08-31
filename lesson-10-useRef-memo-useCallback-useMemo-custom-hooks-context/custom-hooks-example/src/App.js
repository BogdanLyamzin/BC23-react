import Books from "./components/Books/Books";
import Posts from "./components/Posts/Posts";
import PostsSearch from "./components/PostsSearch/PostsSearch";

import "./shared/styles/style.scss";

function App() {
  return (
    <div className="App">
      {/* <Posts /> */}
      {/* <Books /> */}
      <PostsSearch />
      
    </div>
  );
}

export default App;
