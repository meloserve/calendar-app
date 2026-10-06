import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Capacity from "./pages/Capacity";
import Settings from "./pages/Settings";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  switch (currentPage) {
    case "calendar":
      return <Calendar onNavigate={setCurrentPage} />;

    case "capacity":
      return <Capacity onNavigate={setCurrentPage} />;

    case "settings":
      return <Settings onNavigate={setCurrentPage} />;

    default:
      return <Dashboard onNavigate={setCurrentPage} />;
  }
}

export default App;
