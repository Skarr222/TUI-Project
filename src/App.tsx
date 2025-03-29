import { Card } from "react-bootstrap";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        marginTop: "32px",
      }}
    >
      <Card
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Body>App</Card.Body>
      </Card>
    </div>
  );
}

export default App;
