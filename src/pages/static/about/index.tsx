import { Container, Row, Col, Card, Image } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <Container className="py-5 min-vh-100">
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4" style={{ color: "#007bff" }}>
            O nas
          </h1>
          <p className="text-center lead">
            Witaj w Travel Dreams - Twojej bramie do niezapomnianych podróży i
            przygód!
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <Image
            src="/about-us-hero.jpg"
            alt="Zespół Travel Dreams"
            fluid
            rounded
            className="shadow-sm"
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h2 className="mb-4">Nasza Historia</h2>
            <p>
              Od 2010 roku pomagamy naszym klientom spełniać marzenia o
              podróżach. Zaczynaliśmy jako mała, lokalna agencja, a dziś
              jesteśmy jednym z wiodących biur podróży w Polsce, obsługującym
              tysiące zadowolonych klientów rocznie.
            </p>
            <p>
              Naszą misją jest tworzenie wyjątkowych doświadczeń podróżniczych,
              które pozostają w pamięci na całe życie.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Dlaczego My?</h2>
        </Col>
      </Row>

      <Row className="mb-5 g-4">
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="mb-3">
                <i className="fas fa-check-circle fa-3x text-primary"></i>
              </div>
              <Card.Title>Doświadczenie</Card.Title>
              <Card.Text>
                Ponad 13 lat doświadczenia w branży turystycznej i tysiące
                zadowolonych klientów.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="mb-3">
                <i className="fas fa-heart fa-3x text-primary"></i>
              </div>
              <Card.Title>Personalizacja</Card.Title>
              <Card.Text>
                Tworzymy spersonalizowane oferty dopasowane do Twoich potrzeb i
                preferencji.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="mb-3">
                <i className="fas fa-shield-alt fa-3x text-primary"></i>
              </div>
              <Card.Title>Bezpieczeństwo</Card.Title>
              <Card.Text>
                Gwarantujemy bezpieczne podróże i pełne ubezpieczenie dla
                wszystkich naszych klientów.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card className="border-0 bg-light">
            <Card.Body className="text-center py-5">
              <h3 className="mb-4">Nasza Misja</h3>
              <p className="lead mb-0">
                "Naszą misją jest tworzenie niezapomnianych podróży, które
                inspirują, łączą ludzi i otwierają nowe horyzonty. Wierzymy, że
                podróże zmieniają życie i chcemy być częścią Twojej podróżniczej
                historii."
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="text-center mb-4">Nasz Zespół</h2>
          <p className="text-center mb-5">
            Nasz zespół doświadczonych specjalistów jest gotowy pomóc Ci w
            zaplanowaniu wymarzonych wakacji.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="/fhero.png" width={200} height={200} />
            <Card.Body className="text-center">
              <Card.Title>Anna Kowalska</Card.Title>
              <Card.Text className="text-muted">
                Dyrektor Zarządzająca
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="/hero1.jpg" width={100} height={200} />
            <Card.Body className="text-center">
              <Card.Title>Jan Nowak</Card.Title>
              <Card.Text className="text-muted">Kierownik Sprzedaży</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="/fhero.png" width={100} height={200} />
            <Card.Body className="text-center">
              <Card.Title>Maria Wiśniewska</Card.Title>
              <Card.Text className="text-muted">
                Specjalista ds. Podróży
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src="/hero1.jpg" width={100} height={200} />
            <Card.Body className="text-center">
              <Card.Title>Piotr Zieliński</Card.Title>
              <Card.Text className="text-muted">Obsługa Klienta</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
