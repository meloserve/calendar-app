
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Capacity from "./pages/Capacity";
import Settings from "./pages/Settings";

function App() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    const paths = {
      dashboard: "/",
      calendar: "/calendar",
      capacity: "/capacity",
      settings: "/settings",
    };

    navigate(paths[page] || "/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard onNavigate={handleNavigate} />}
      />

      <Route
        path="/calendar"
        element={<Calendar onNavigate={handleNavigate} />}
      />

      <Route
        path="/capacity"
        element={<Capacity onNavigate={handleNavigate} />}
      />

      <Route
        path="/settings"
        element={<Settings onNavigate={handleNavigate} />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
