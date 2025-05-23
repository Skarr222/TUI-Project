import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export const Terms = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h1 className="h3 mb-0">Regulamin</h1>
            </Card.Header>
            <Card.Body>
              <div className="legal-content">
                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      1. Postanowienia ogólne
                    </Card.Title>
                    <Card.Text>
                      Niniejszy regulamin określa zasady korzystania z serwisu
                      oraz świadczenia usług drogą elektroniczną.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      2. Definicje
                    </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Serwis - oznacza stronę internetową dostępną pod adresem
                        [adres]
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Użytkownik - oznacza osobę fizyczną korzystającą z
                        Serwisu
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Administrator - oznacza podmiot zarządzający Serwisem
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      3. Warunki korzystania z Serwisu
                    </Card.Title>
                    <Card.Text>
                      Korzystanie z Serwisu oznacza akceptację niniejszego
                      regulaminu w całości. Użytkownik zobowiązuje się do
                      korzystania z Serwisu w sposób zgodny z przepisami prawa.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      4. Rejestracja i konto użytkownika
                    </Card.Title>
                    <Card.Text>
                      Rejestracja w Serwisie jest dobrowolna. Użytkownik
                      zobowiązuje się do podawania prawdziwych danych.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      5. Ochrona danych osobowych
                    </Card.Title>
                    <Card.Text>
                      Administratorem danych osobowych jest [nazwa firmy].
                      Szczegółowe informacje dotyczące przetwarzania danych
                      osobowych znajdują się w Polityce Prywatności.
                    </Card.Text>
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
