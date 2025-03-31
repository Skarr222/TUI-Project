import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", // Zmiana height na minHeight
        overflow: "hidden",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
