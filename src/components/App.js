import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
    </Routes>
  </BrowserRouter>;
}

export default App;