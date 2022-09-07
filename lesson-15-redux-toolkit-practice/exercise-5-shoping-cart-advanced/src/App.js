import React from "react";
import { Routes, Route } from "react-router-dom";

// import { Counter } from './features/counter/Counter';
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bucket from "./pages/Bucket";

import { Container } from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bucket" element={<Bucket />} />
      </Routes>
    </Container>
  );
}

export default App;
