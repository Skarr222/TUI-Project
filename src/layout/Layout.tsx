import { Container } from "react-bootstrap";
import { NavBar } from "../components/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";

export const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <div style={{ flex: 1 }}>
        <Container fluid style={{ padding: 0 }}>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </div>
  );
};
