import {
  Container,
  Card,
  Badge,
  Button,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaEdit, FaArrowLeft } from "react-icons/fa";

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
    address: "ul. Kwiatowa 5, 00-001 Warszawa",
    notes:
      "Anna jest bardzo sumienną i pomocną recepcjonistką. Doskonale radzi sobie z obsługą klienta i koordynacją rezerwacji. Zawsze uśmiechnięta i profesjonalna.",
    skills: [
      "Obsługa klienta",
      "Organizacja biura",
      "Znajomość języków obcych (angielski, niemiecki)",
    ],
    profileImage: "https://placehold.co/150x150/E0E0E0/333333?text=Anna+K",
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
    address: "ul. Leśna 10, 01-123 Kraków",
    notes:
      "Piotr to doświadczony doradca z doskonałymi umiejętnościami sprzedażowymi i negocjacyjnymi. Zawsze stawia na pierwszym miejscu zadowolenie klienta.",
    skills: ["Sprzedaż", "Negocjacje", "Budowanie relacji", "Analiza rynku"],
    profileImage: "https://placehold.co/150x150/D0D0D0/222222?text=Piotr+N",
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
    address: "al. Jerozolimskie 100, 00-901 Warszawa",
    notes:
      "Marta efektywnie zarządza zespołem i operacjami biurowymi. Jest zorganizowana i potrafi rozwiązywać problemy pod presją czasu.",
    skills: [
      "Zarządzanie zespołem",
      "Planowanie",
      "Rozwiązywanie problemów",
      "Komunikacja",
    ],
    profileImage: "https://placehold.co/150x150/C0C0C0/111111?text=Marta+W",
  },
];

export const WorkerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const worker = workers.find((w) => w.id === Number(id));

  if (!worker) {
    return (
      <Container className="py-5 text-center">
        <h2>Pracownik nie został znaleziony</h2>
        <p>
          Przepraszamy, ale pracownik o podanym identyfikatorze nie istnieje.
        </p>
        <Button href="/admin/workers" variant="primary" className="mt-3">
          <FaArrowLeft className="me-2" /> Powrót do listy pracowników
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={12}>
          <Card className="shadow-lg border-0">
            <Card.Body className="p-4">
              <Row className="align-items-center">
                <Col md={3} className="text-center mb-3 mb-md-0">
                  <img
                    src={
                      worker.profileImage ||
                      "https://placehold.co/150x150/E0E0E0/333333?text=Brak+zdjęcia"
                    }
                    alt={`${worker.firstName} ${worker.lastName}`}
                    className="rounded-circle border border-3 border-primary"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col md={9}>
                  <Card.Title as="h1" className="mb-2 display-5">
                    {worker.firstName} {worker.lastName}
                  </Card.Title>
                  <h2 className="text-muted mb-3 h4">
                    {worker.position}
                    <Badge
                      bg={
                        worker.status === "Aktywny"
                          ? "success"
                          : worker.status === "Urlop"
                          ? "warning"
                          : "danger"
                      }
                      className="ms-3 align-baseline"
                    >
                      {worker.status}
                    </Badge>
                  </h2>
                  <p className="lead">
                    Email: <strong>{worker.email}</strong>
                  </p>
                  <p className="lead">
                    Telefon: <strong>{worker.phone}</strong>
                  </p>
                  <p className="text-muted">
                    Data zatrudnienia: {worker.startDate}
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="primary"
                      href={`/admin/worker/edit/${worker.id}`}
                      className="me-2"
                    >
                      <FaEdit className="me-2" /> Edytuj pracownika
                    </Button>
                    <Button href="/admin/workers" variant="outline-secondary">
                      <FaArrowLeft className="me-2" /> Powrót do listy
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={8}>
          {/* Sekcja "O pracowniku"*/}
          <Card className="shadow-sm border-0 mb-4">
            <Card.Body>
              <h3 className="mb-3 text-primary">O pracowniku</h3>
              <p>{worker.notes}</p>
            </Card.Body>
          </Card>

          {/* Sekcja "Umiejętności" */}
          {worker.skills && worker.skills.length > 0 && (
            <Card className="shadow-sm border-0">
              <Card.Body>
                <h3 className="mb-3 text-primary">Umiejętności</h3>
                <ListGroup variant="flush">
                  {worker.skills.map((skill, idx) => (
                    <ListGroup.Item key={idx} className="border-0 px-0">
                      {skill}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          )}
        </Col>

        <Col md={4}>
          {/* Sekcja "Dane kontaktowe i adres" */}
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="mb-3 text-primary">Dane kontaktowe</h3>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0">
                  <span>Email:</span>
                  <strong>{worker.email}</strong>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0">
                  <span>Telefon:</span>
                  <strong>{worker.phone}</strong>
                </ListGroup.Item>
                {worker.address && (
                  <ListGroup.Item className="border-0 px-0">
                    <h5 className="mt-3 mb-2">Adres:</h5>
                    <p className="mb-0">{worker.address}</p>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
