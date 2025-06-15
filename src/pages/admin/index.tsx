import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AdminDashboard() {
  // const { isAdminAuthenticated, adminUser, logoutAdmin } = useAuth();

  // if (!isAdminAuthenticated) {
  //   return <Navigate to="/admin/login" />;
  // }

  const offersData = {
    total: 125,
    active: 98,
    drafts: 27,
  };

  // Data for "Status Ofert" chart
  const offersChartData = [
    { name: "Wszystkie", value: offersData.total },
    { name: "Aktywne", value: offersData.active },
    { name: "Szkice", value: offersData.drafts },
  ];

  const salesData = {
    today: "1 250 PLN",
    week: "8 750 PLN",
    month: "35 000 PLN",
  };

  const salesChartData = [
    {
      name: "Dzisiaj",
      value: parseFloat(salesData.today.replace(" ", "").replace(" PLN", "")),
    },
    {
      name: "Ten tydzień",
      value: parseFloat(salesData.week.replace(" ", "").replace(" PLN", "")),
    },
    {
      name: "Ten miesiąc",
      value: parseFloat(salesData.month.replace(" ", "").replace(" PLN", "")),
    },
  ];

  const popularDestinations = [
    { name: "Hiszpania", count: 45 },
    { name: "Włochy", count: 30 },
    { name: "Grecja", count: 28 },
    { name: "Chorwacja", count: 22 },
    { name: "Egipt", count: 18 },
  ];

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">Panel Administracyjny</h2>
      <Row className="g-4 mb-5">
        {/* Karta do zarządzania pracownikami */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-3">
                <i className="bi bi-people-fill me-2"></i>Zarządzaj Pracownikami
              </Card.Title>
              <Card.Text>
                Przeglądaj, dodawaj, edytuj i usuwaj konta pracowników.
              </Card.Text>
              <Link
                to="/admin/workers"
                className="btn btn-primary mt-auto w-100"
              >
                Przejdź do Pracowników
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-3">
                <i className="bi bi-plus-circle-fill me-2"></i>Dodaj Nową Ofertę
              </Card.Title>
              <Card.Text>
                Stwórz nową ofertę pracy, uzupełniając wszystkie niezbędne
                szczegóły.
              </Card.Text>
              <Link
                to="/admin/offer/add"
                className="btn btn-success mt-auto w-100"
              >
                Dodaj Ofertę
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Karta z szybkim podsumowaniem lub dodatkowymi akcjami */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="text-center mb-3">
                <i className="bi bi-info-circle-fill me-2"></i>Szybkie Akcje
              </Card.Title>
              <ListGroup variant="flush" className="flex-grow-1">
                <ListGroup.Item action as={Link} to="/admin/offers">
                  <i className="bi bi-clipboard-list me-2"></i>Przeglądaj
                  Wszystkie Oferty
                </ListGroup.Item>
                <ListGroup.Item action as={Link} to="/admin/settings">
                  <i className="bi bi-gear-fill me-2"></i>Ustawienia Panelu
                </ListGroup.Item>
                <ListGroup.Item action as={Link} to="/admin/customers">
                  <i className="bi bi-person-fill me-2"></i>Zarządzaj Klientami
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Sekcja Statystyki i Wykresy */}
      <h3 className="mb-4 text-center">Statystyki i Przegląd Działalności</h3>
      <Row className="g-4 mb-5">
        {/* Karta z przeglądem ofert */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              {" "}
              {/* Added flex-column */}
              <Card.Title className="text-center mb-3">
                <i className="bi bi-journals me-2"></i>Status Ofert
              </Card.Title>
              <ListGroup variant="flush" className="flex-grow-1">
                {" "}
                {/* Added flex-grow-1 */}
                <ListGroup.Item>
                  <strong className="me-2">Wszystkie oferty:</strong>
                  <span className="float-end">{offersData.total}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong className="me-2">Aktywne oferty:</strong>
                  <span className="float-end text-success fw-bold">
                    {offersData.active}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong className="me-2">Szkice:</strong>
                  <span className="float-end text-warning">
                    {offersData.drafts}
                  </span>
                </ListGroup.Item>
              </ListGroup>
              <div style={{ height: "200px" }}>
                {" "}
                {/* Removed mt-3 */}
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={offersChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, "auto"]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" name="Liczba Ofert" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Karta z przeglądem sprzedaży */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              {" "}
              {/* Added flex-column */}
              <Card.Title className="text-center mb-3">
                <i className="bi bi-cash-stack me-2"></i>Przychody
              </Card.Title>
              <ListGroup variant="flush" className="flex-grow-1">
                {" "}
                {/* Added flex-grow-1 */}
                <ListGroup.Item>
                  <strong className="me-2">Dzisiaj:</strong>
                  <span className="float-end">{salesData.today}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong className="me-2">Ten tydzień:</strong>
                  <span className="float-end">{salesData.week}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong className="me-2">Ten miesiąc:</strong>
                  <span className="float-end">{salesData.month}</span>
                </ListGroup.Item>
              </ListGroup>
              <div style={{ height: "200px" }}>
                {" "}
                {/* Removed mt-3 */}
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, "auto"]} />
                    <Tooltip formatter={(value) => `${value} PLN`} />
                    <Legend />
                    <Bar dataKey="value" fill="#82ca9d" name="Przychody" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Karta z popularnymi kierunkami */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body className="d-flex flex-column">
              {" "}
              {/* Added flex-column */}
              <Card.Title className="text-center mb-3">
                <i className="bi bi-geo-alt-fill me-2"></i>Najpopularniejsze
                Kierunki
              </Card.Title>
              <ListGroup variant="flush" className="flex-grow-1">
                {" "}
                {/* Added flex-grow-1 */}
                {popularDestinations.map((dest, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>{dest.name}</span>
                    <span className="badge bg-primary rounded-pill">
                      {dest.count} rezerwacji
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div style={{ height: "200px" }}>
                {" "}
                {/* Removed mt-3 */}
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={popularDestinations}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, "auto"]} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="count"
                      fill="#ffc658"
                      name="Liczba Rezerwacji"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Sekcja Ostatnie Aktywności */}
      <h3 className="mb-4 text-center">Ostatnie Aktywności</h3>
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>
                <i className="bi bi-activity me-2"></i>Historia Zdarzeń
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span className="text-muted me-2">[2025-05-24 10:30]</span>{" "}
                  Użytkownik **Jan Kowalski** dodał nową ofertę: "Słoneczna
                  Hiszpania"
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-muted me-2">[2025-05-24 09:15]</span>{" "}
                  **System** zaktualizował status 3 ofert.
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-muted me-2">[2025-05-23 18:00]</span>{" "}
                  Pracownik **Anna Nowak** edytował dane pracownika: "Piotr
                  Zieliński"
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-muted me-2">[2025-05-23 11:45]</span>{" "}
                  Nowa rezerwacja dla oferty "Włoskie Lato".
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
