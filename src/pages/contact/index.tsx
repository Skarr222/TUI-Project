import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate with an API or backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #f0f2f5, #e0e0e0)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} sm={12}>
            <Card
              style={{
                padding: "30px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                borderRadius: "12px",
                backgroundColor: "#fff",
              }}
            >
              <h3
                className="text-center mb-4"
                style={{ fontWeight: "bold", color: "#007bff" }}
              >
                Skontaktuj się z nami
              </h3>

              {submitted ? (
                <div className="alert alert-success text-center">
                  Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Imię i nazwisko</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Wpisz swoje imię i nazwisko"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="p-2"
                      style={{ borderRadius: "6px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Adres e-mail</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Wpisz swój e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="p-2"
                      style={{ borderRadius: "6px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Temat</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Temat wiadomości"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="p-2"
                      style={{ borderRadius: "6px" }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Wiadomość</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      placeholder="Napisz swoją wiadomość..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="p-2"
                      style={{ borderRadius: "6px" }}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2"
                    style={{ borderRadius: "6px", fontWeight: "bold" }}
                  >
                    Wyślij wiadomość
                  </Button>
                </Form>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
