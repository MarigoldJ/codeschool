import React from "react";
import { Route, Routes } from "react-router-dom";
import CampDetail from "@pages/CampDetail";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import routes from "@utils/routes";
import { MobileContext } from "@context/MobileContext";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

  return (
    <MobileContext.Provider value={{ isMobile }}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.campdetail + ":id"} element={<CampDetail />} />
      </Routes>
    </MobileContext.Provider>
  );
}

export default App;
