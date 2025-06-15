import React from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSave, FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const offerSchema = yup.object().shape({
  title: yup.string().required("Tytuł oferty jest wymagany"),
  destination: yup.string().required("Destynacja jest wymagana"),
  description: yup.string().required("Opis jest wymagany"),
  price: yup
    .number()
    .typeError("Cena musi być liczbą")
    .positive("Cena musi być większa niż 0")
    .required("Cena jest wymagana"),
  duration: yup.string().required("Czas trwania jest wymagany"),
  category: yup.string().required("Wybierz kategorię"),
});

type OfferFormData = {
  title: string;
  destination: string;
  description: string;
  price: number;
  duration: string;
  category: string;
};

export const AddOffer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OfferFormData>({
    resolver: yupResolver(offerSchema),
    mode: "onTouched",
  });

  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const onSubmit = (data: OfferFormData) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      console.log("Dodawanie oferty:", data);
      setSuccessMessage("Oferta została pomyślnie dodana!");
      reset();
    } catch (error) {
      console.error(error);
      setErrorMessage("Wystąpił błąd podczas dodawania oferty.");
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center fw-bold mb-4 text-primary">
                Dodaj Nową Ofertę
              </h2>

              {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
              )}
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="g-4">
                  <Col md={6}>
                    <h5 className="mb-3 text-secondary">Podstawowe dane</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Tytuł oferty</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("title")}
                        placeholder="Wprowadź tytuł oferty"
                        isInvalid={!!errors.title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.title?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Destynacja</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("destination")}
                        placeholder="Np. Santorini, Grecja"
                        isInvalid={!!errors.destination}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.destination?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Cena (PLN)</Form.Label>
                      <Form.Control
                        type="number"
                        {...register("price")}
                        placeholder="Wprowadź cenę"
                        isInvalid={!!errors.price}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.price?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Czas trwania</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("duration")}
                        placeholder="Np. 7 dni"
                        isInvalid={!!errors.duration}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.duration?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <h5 className="mb-3 text-secondary">Szczegóły oferty</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Opis oferty</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        {...register("description")}
                        placeholder="Szczegółowy opis oferty..."
                        isInvalid={!!errors.description}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.description?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Kategoria</Form.Label>
                      <Form.Select
                        {...register("category")}
                        isInvalid={!!errors.category}
                      >
                        <option value="">Wybierz kategorię</option>
                        <option value="europa">Europa</option>
                        <option value="azja">Azja</option>
                        <option value="afryka">Afryka</option>
                        <option value="ameryka">Ameryka</option>
                        <option value="oceania">Oceania</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.category?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <hr className="my-4" />
                <div className="d-flex justify-content-end gap-3">
                  <Link to="/admin/offers">
                    <Button variant="outline-secondary">
                      <FaArrowLeft className="me-2" /> Anuluj
                    </Button>
                  </Link>
                  <Button variant="success" type="submit">
                    <FaSave className="me-2" /> Zapisz ofertę
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
