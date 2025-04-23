import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export const DataProtection = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h1 className="h3 mb-0">Ochrona Danych Osobowych</h1>
            </Card.Header>
            <Card.Body>
              <div className="legal-content">
                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      1. Wprowadzenie
                    </Card.Title>
                    <Card.Text>
                      Ochrona danych osobowych jest dla nas priorytetem.
                      Niniejszy dokument zawiera informacje o tym, w jaki sposób
                      chronimy dane osobowe użytkowników naszego serwisu.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      2. Podstawy prawne
                    </Card.Title>
                    <Card.Text>
                      Przetwarzanie danych osobowych odbywa się zgodnie z:
                    </Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Rozporządzeniem Parlamentu Europejskiego i Rady (UE)
                        2016/679 z dnia 27 kwietnia 2016 r. (RODO)
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Ustawą z dnia 10 maja 2018 r. o ochronie danych
                        osobowych
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      3. Zabezpieczenia techniczne
                    </Card.Title>
                    <Card.Text>
                      Stosujemy następujące zabezpieczenia techniczne:
                    </Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Szyfrowanie danych w spoczynku i podczas transmisji
                      </ListGroup.Item>
                      <ListGroup.Item>Regularne kopie zapasowe</ListGroup.Item>
                      <ListGroup.Item>Systemy wykrywania włamań</ListGroup.Item>
                      <ListGroup.Item>Kontrola dostępu</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      4. Przechowywanie danych
                    </Card.Title>
                    <Card.Text>
                      Dane osobowe przechowywane są przez okres niezbędny do
                      realizacji celów, dla których zostały zebrane, lub do
                      momentu wycofania zgody.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      5. Kontakt
                    </Card.Title>
                    <Card.Text>
                      W sprawach związanych z ochroną danych osobowych można
                      kontaktować się z nami:
                    </Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Email: [email]</ListGroup.Item>
                      <ListGroup.Item>Telefon: [numer]</ListGroup.Item>
                      <ListGroup.Item>Adres: [adres]</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
