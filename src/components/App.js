import React from "react";
import BotsPage from "./BotsPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <BotsPage />
      <Outlet />
    </div>
  );
}

export default App;
