import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AdminNavBar } from "../components/adminNavbar";

export const AdminLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AdminNavBar />
      <div style={{ flex: 1 }}>
        <Container fluid style={{ padding: 0 }}>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};
