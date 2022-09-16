import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import UserRoutes from "./UserRoutes";

import { current } from "./redux/auth/auth-operations";

import "./shared/styles/style.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(current());
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <UserRoutes />
    </div>
  );
}

export default App;
