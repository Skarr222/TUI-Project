import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Imię i nazwisko jest wymagane"),
  email: yup
    .string()
    .email("Wprowadź poprawny adres e-mail")
    .required("E-mail jest wymagany"),
  subject: yup.string().required("Temat jest wymagany"),
  message: yup
    .string()
    .required("Wiadomość jest wymagana")
    .min(10, "Wiadomość musi zawierać co najmniej 10 znaków"),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
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
          <Col md={10} sm={12}>
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

              <Row>
                <Col md={6}>
                  <h4 className="mb-3" style={{ color: "#007bff" }}>
                    Nasze dane kontaktowe
                  </h4>
                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    123/456 Hebanowa, 01-111 Warszawa
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    +48 123 456 789
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    kontakt@twojafirma.pl
                  </p>

                  <div
                    className="map-container mb-4"
                    style={{
                      height: "300px",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6067756285223!2d22.280313415904576!3d52.16616047972081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f30d0a51c911b%3A0x7d2870e28f3237e1!2sSiedlce!5e0!3m2!1sen!2spl!4v1678900000000!5m2!1sen!2spl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps Location"
                    ></iframe>
                  </div>
                </Col>

                <Col md={6}>
                  {submitted ? (
                    <div className="alert alert-success text-center">
                      Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit(onSubmit)}>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Imię i nazwisko</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("name")}
                          placeholder="Wpisz swoje imię i nazwisko"
                          className="p-2"
                          isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name?.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Adres e-mail</Form.Label>
                        <Form.Control
                          type="email"
                          {...register("email")}
                          placeholder="Wpisz swój e-mail"
                          className="p-2"
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email?.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formSubject">
                        <Form.Label>Temat</Form.Label>
                        <Form.Control
                          type="text"
                          {...register("subject")}
                          placeholder="Temat wiadomości"
                          className="p-2"
                          isInvalid={!!errors.subject}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.subject?.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Wiadomość</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          {...register("message")}
                          placeholder="Napisz swoją wiadomość..."
                          className="p-2"
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message?.message}
                        </Form.Control.Feedback>
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
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
