import React from "react";
import { Button, Card, Col, Form, Row, Tab, Tabs } from "react-bootstrap";

export const AddOffer = () => {
  return (
    <React.Fragment>
      <Card>
        <Form>
          <Row className="mb-4">
            <Col>
              <Tabs
                variant="tabs"
                style={{
                  accentColor: "red",
                  backgroundColor: "whitesmoke",
                  borderRadius: "8px",
                }}
              >
                <Tab
                  eventKey="dataP"
                  title="Informacje podstawowe"
                  className="mt-2"
                >
                  <Row>
                    <Col>
                      <Form.Group>
                        <Form.Control placeholder="Wpisz kod produktu..." />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Control placeholder="Wpisz numer katalogowy..." />
                      </Form.Group>
                    </Col>
                  </Row>
                </Tab>
                <Tab title="Cena" className="me-2" />
                <Tab title="Informacje dodatkowe" className="me-2" />
              </Tabs>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="dark" children="Dodaj" className="me-2" />
              <Button variant="dark" children="Anuluj" className="me-2" />
            </Col>
          </Row>
        </Form>
      </Card>
    </React.Fragment>
  );
};
