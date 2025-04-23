import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export const Privacy = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white">
              <h1 className="h3 mb-0">Polityka Prywatności</h1>
            </Card.Header>
            <Card.Body>
              <div className="legal-content">
                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      1. Informacje ogólne
                    </Card.Title>
                    <Card.Text>
                      Niniejsza polityka prywatności określa zasady
                      przetwarzania i ochrony danych osobowych przekazanych
                      przez Użytkowników w związku z korzystaniem przez nich z
                      serwisu.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      2. Administrator danych osobowych
                    </Card.Title>
                    <Card.Text>
                      Administratorem danych osobowych zawartych w serwisie jest
                      [nazwa firmy] z siedzibą w [adres].
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      3. Cel i zakres zbierania danych
                    </Card.Title>
                    <Card.Text>Dane osobowe są zbierane w celu:</Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Świadczenia usług drogą elektroniczną
                      </ListGroup.Item>
                      <ListGroup.Item>Obsługi konta użytkownika</ListGroup.Item>
                      <ListGroup.Item>Realizacji zamówień</ListGroup.Item>
                      <ListGroup.Item>
                        Komunikacji z użytkownikami
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      4. Podstawa przetwarzania danych
                    </Card.Title>
                    <Card.Text>
                      Przetwarzanie danych osobowych odbywa się na podstawie:
                    </Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Zgody wyrażonej przez użytkownika
                      </ListGroup.Item>
                      <ListGroup.Item>Potrzeby wykonania umowy</ListGroup.Item>
                      <ListGroup.Item>
                        Obowiązków prawnych ciążących na administratorze
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Prawnie uzasadnionych interesów realizowanych przez
                        administratora
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>

                <Card className="mb-4 border-0">
                  <Card.Body>
                    <Card.Title as="h2" className="h4">
                      5. Prawa użytkownika
                    </Card.Title>
                    <Card.Text>Użytkownik ma prawo do:</Card.Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Dostępu do swoich danych</ListGroup.Item>
                      <ListGroup.Item>Sprostowania danych</ListGroup.Item>
                      <ListGroup.Item>Usunięcia danych</ListGroup.Item>
                      <ListGroup.Item>
                        Ograniczenia przetwarzania
                      </ListGroup.Item>
                      <ListGroup.Item>Przenoszenia danych</ListGroup.Item>
                      <ListGroup.Item>Wniesienia sprzeciwu</ListGroup.Item>
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
