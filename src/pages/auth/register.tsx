import React from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Nieprawidłowy adres email")
    .required("Email jest wymagany"),
  password: yup
    .string()
    .required("Hasło jest wymagane")
    .min(8, "Hasło musi mieć co najmniej 8 znaków")
    .matches(/[A-Z]/, "Hasło musi zawierać wielką literę")
    .matches(/\d/, "Hasło musi zawierać cyfrę")
    .matches(
      /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/,
      "Hasło musi zawierać znak specjalny"
    ),
  confirmPassword: yup
    .string()
    .required("Potwierdzenie hasła jest wymagane")
    .oneOf([yup.ref("password")], "Hasła nie są takie same"),
  termsAccepted: yup.boolean().oneOf([true], "Musisz zaakceptować regulamin"),
});

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const [alert, setAlert] = React.useState<{
    type: "danger" | "success";
    message: string;
  } | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      console.log("Rejestracja:", data);
      setAlert({
        type: "success",
        message: "Rejestracja zakończona sukcesem!",
      });
      reset();
    } catch (err) {
      console.error(err);
      setAlert({ type: "danger", message: "Błąd podczas rejestracji." });
    }
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #f0f2f5, #e0e0e0)",
        minHeight: "100vh",
        display: "flex",
        paddingTop: "10%",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6} sm={12}>
            <Card
              style={{
                padding: "30px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                borderRadius: "12px",
                backgroundColor: "#fff",
              }}
            >
              <h3 className="text-center mb-4" style={{ color: "#007bff" }}>
                Zarejestruj się
              </h3>

              {alert && (
                <Alert
                  variant={alert.type}
                  onClose={() => setAlert(null)}
                  dismissible
                >
                  {alert.message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Wpisz swój adres email"
                    className={`p-2 ${errors.email ? "is-invalid" : ""}`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Hasło"
                    className={`p-2 ${errors.password ? "is-invalid" : ""}`}
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </Form.Group>

                <details className="mb-3">
                  <summary className="text-muted">
                    Zasady dotyczące hasła
                  </summary>
                  <ul className="small mt-2 ms-3">
                    <li>Min. 8 znaków</li>
                    <li>Przynajmniej 1 duża litera</li>
                    <li>Przynajmniej 1 cyfra</li>
                    <li>Przynajmniej 1 znak specjalny</li>
                  </ul>
                </details>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                  <Form.Label>Potwierdź hasło</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Potwierdź hasło"
                    className={`p-2 ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </Form.Group>

                <Form.Group className="mb-4" controlId="formTerms">
                  <Form.Check
                    type="checkbox"
                    label="Akceptuję regulamin"
                    {...register("termsAccepted")}
                    isInvalid={!!errors.termsAccepted}
                  />
                  {errors.termsAccepted && (
                    <div className="text-danger small">
                      {errors.termsAccepted.message}
                    </div>
                  )}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2"
                  style={{ borderRadius: "6px", fontWeight: "bold" }}
                >
                  Zarejestruj
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
