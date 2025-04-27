import { useState } from "react";
import { Button, Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const DestinationSearch = () => {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [destinations] = useState([
    { name: "Greece" },
    { name: "Egipt" },
    { name: "Marocco" },
    { name: "Italy" },
    { name: "Thailand" },
    { name: "USA" },
  ]);

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      destination,
      departureDate,
      returnDate,
      adults: adults.toString(),
      children: children.toString(),
    });
    navigate(`/offers?${params.toString()}`);
  };
  return (
    <Row className="justify-content-center gy-3 gx-3 align-items-start text-center w-100">
      <Col md={12} lg={12}>
        <Card
          className="p-4 shadow-lg mx-auto"
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "20px",
            width: "70%",
          }}
        >
          <Row className="gy-3 gx-3">
            <Col md={6} lg={6}>
              {/* Hero Heading */}
              <h2 className="fw-bold text-primary mb-2 display-5">
                🌴 Nulla et volutpat libero
              </h2>
              <p className="text-muted mb-4 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <Form onSubmit={handleSearch}>
                <Row className="gy-3 gx-3">
                  <Col xs={12} md={12}>
                    <FloatingLabel label="Wybierz destynację">
                      <Form.Select
                        onChange={(e) => setDestination(e.target.value)}
                        className="form-control-lg"
                        style={{ borderRadius: "15px" }}
                      >
                        <option value="">-- Wybierz --</option>
                        {destinations.map((dest, idx) => (
                          <option key={idx} value={dest.name}>
                            {dest.name}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                  <Col xs={6} md={6}>
                    <FloatingLabel label="Data wyjazdu">
                      <Form.Control
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="form-control-lg"
                        style={{ borderRadius: "15px" }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={6} md={6}>
                    <FloatingLabel label="Data powrotu">
                      <Form.Control
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="form-control-lg"
                        style={{ borderRadius: "15px" }}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col xs={6} md={3}>
                    <FloatingLabel label="Dorośli">
                      <Form.Control
                        type="number"
                        min="1"
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="form-control-lg"
                        style={{ borderRadius: "15px" }}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={6} md={3}>
                    <FloatingLabel label="Dzieci">
                      <Form.Control
                        type="number"
                        min="0"
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className="form-control-lg"
                        style={{ borderRadius: "15px" }}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col xs={12} md={12} className="mx-auto">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-100 mt-2"
                      style={{ borderRadius: "30px", height: "60px" }}
                    >
                      🔎 Szukaj wycieczki
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col
              md={6}
              className="d-flex flex-column justify-content-center align-items-center px-4"
            >
              <h4 className="fw-bold text-primary">📞 Potrzebujesz pomocy?</h4>
              <p className="fs-5 mb-2">
                Zadzwoń do nas: <strong>+48 123 456 789</strong>
              </p>
              <p className="fs-6 text-muted">
                Jesteśmy dostępni od <strong>Poniedziałku do Piątku</strong>
                ,<br />w godzinach <strong>9:00 - 17:00</strong>
              </p>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
