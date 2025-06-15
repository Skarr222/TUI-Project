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
import { FaSave, FaArrowLeft, FaUserPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type WorkerFormData = {
  firstName: string;
  lastName: string;
  email: string;
  role: "admin" | "employee";
  password: string;
};

const workerSchema = yup.object().shape({
  firstName: yup.string().required("Imię jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  email: yup
    .string()
    .required("E-mail jest wymagany")
    .email("Wprowadź prawidłowy adres e-mail"),
  role: yup
    .string()
    .oneOf(["admin", "employee"])
    .required("Rola jest wymagana"),
  password: yup
    .string()
    .required("Hasło jest wymagane")
    .min(6, "Hasło musi mieć co najmniej 6 znaków"),
});

export const AddWorker = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WorkerFormData>({
    resolver: yupResolver(workerSchema),
    mode: "onTouched",
  });

  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const onSubmit = (data: WorkerFormData) => {
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      console.log("Dodawanie pracownika:", data);
      setSuccessMessage("Pracownik został pomyślnie dodany!");
      reset();
    } catch (error) {
      console.error("Błąd podczas dodawania pracownika:", error);
      setErrorMessage("Wystąpił błąd podczas dodawania pracownika.");
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h2 className="text-center fw-bold mb-4 text-primary">
                <FaUserPlus className="me-2" /> Dodaj Nowego Pracownika
              </h2>

              {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
              )}
              {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="g-4">
                  <Col md={6}>
                    <h5 className="mb-3 text-secondary">Dane osobowe</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Imię</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("firstName")}
                        placeholder="Wprowadź imię"
                        isInvalid={!!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Nazwisko</Form.Label>
                      <Form.Control
                        type="text"
                        {...register("lastName")}
                        placeholder="Wprowadź nazwisko"
                        isInvalid={!!errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.lastName?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        type="email"
                        {...register("email")}
                        placeholder="Wprowadź adres e-mail"
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <h5 className="mb-3 text-secondary">Dane dostępowe</h5>

                    <Form.Group className="mb-3">
                      <Form.Label>Hasło</Form.Label>
                      <Form.Control
                        type="password"
                        {...register("password")}
                        placeholder="Wprowadź hasło"
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Rola</Form.Label>
                      <Form.Select
                        {...register("role")}
                        isInvalid={!!errors.role}
                      >
                        <option value="employee">Pracownik</option>
                        <option value="admin">Administrator</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.role?.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <hr className="my-4" />
                <div className="d-flex justify-content-end gap-3">
                  <Link to="/admin/workers">
                    <Button variant="outline-secondary">
                      <FaArrowLeft className="me-2" /> Anuluj
                    </Button>
                  </Link>
                  <Button variant="success" type="submit">
                    <FaSave className="me-2" /> Zapisz pracownika
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

export default AddWorker;
