import React from "react";
import { Route, Routes } from "react-router-dom";
import CampDetail from "./pages/CampDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import routes from "./routes";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.campdetail + "*"} element={<CampDetail />} />
    </Routes>
  );
}

export default App;
