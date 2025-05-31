import {
  Container,
  Table,
  Button,
  Badge,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { FaTrash, FaPlus } from "react-icons/fa";

// Przykładowe dane pracowników
const workers = [
  {
    id: 1,
    firstName: "Anna",
    lastName: "Kowalska",
    position: "Recepcjonistka",
    email: "anna.kowalska@example.com",
    phone: "123-456-789",
    status: "Aktywny",
    startDate: "2020-03-15",
  },
  {
    id: 2,
    firstName: "Piotr",
    lastName: "Nowak",
    position: "Doradca Klienta",
    email: "piotr.nowak@example.com",
    phone: "987-654-321",
    status: "Aktywny",
    startDate: "2019-07-01",
  },
  {
    id: 3,
    firstName: "Marta",
    lastName: "Wiśniewska",
    position: "Kierownik Biura",
    email: "marta.wisniewska@example.com",
    phone: "555-111-222",
    status: "Urlop",
    startDate: "2018-01-10",
  },
  {
    id: 4,
    firstName: "Jan",
    lastName: "Zieliński",
    position: "Specjalista ds. Marketingu",
    email: "jan.zielinski@example.com",
    phone: "333-888-999",
    status: "Aktywny",
    startDate: "2021-11-20",
  },
  {
    id: 5,
    firstName: "Katarzyna",
    lastName: "Wójcik",
    position: "Księgowa",
    email: "kasia.wojcik@example.com",
    phone: "777-666-555",
    status: "Nieaktywny",
    startDate: "2017-05-01",
  },
];

export const WorkerList = () => {
  return (
    <Container className="py-5">
      <Row className="mb-4 align-items-center">
        <Col>
          <h2 className="mb-0">Lista Pracowników</h2>
        </Col>
        <Col xs="auto">
          <Button variant="primary" className="d-flex align-items-center">
            <FaPlus className="me-2" /> Dodaj nowego pracownika
          </Button>
        </Col>
      </Row>

      {workers.length === 0 ? (
        <Alert variant="info" className="text-center">
          Brak pracowników do wyświetlenia. Dodaj pierwszego pracownika!
        </Alert>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Imię i Nazwisko</th>
              <th>Stanowisko</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>Status</th>
              <th>Data Zatrudnienia</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker) => (
              <tr key={worker.id}>
                <td>{worker.id}</td>
                <td>
                  <strong>
                    {worker.firstName} {worker.lastName}
                  </strong>
                </td>
                <td>{worker.position}</td>
                <td>{worker.email}</td>
                <td>{worker.phone}</td>
                <td>
                  <Badge
                    bg={
                      worker.status === "Aktywny"
                        ? "success"
                        : worker.status === "Urlop"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {worker.status}
                  </Badge>
                </td>
                <td>{worker.startDate}</td>
                <td>
                  <Button
                    href={`/admin/worker/${worker.id}`}
                    variant="outline-info"
                    size="sm"
                    className="me-2"
                  >
                    Szczegóły
                  </Button>
                  <Button variant="outline-danger" size="sm">
                    <FaTrash /> Usuń
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};
