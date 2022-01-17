import React from "react";
import { Route, Routes } from "react-router-dom";
import CampDetail from "./pages/CampDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Hello! This is CodeSchool Page.</h1>
      <Routes>
        <Route path="/codeschool/" element={<Home />} />
        <Route path="/codeschool/detail/" element={<CampDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
