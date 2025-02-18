import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main className="overflow-x-hidden flex flex-col h-screen">
      <Navigation />
      <Outlet />
    </main>
  );
}

export default App;
