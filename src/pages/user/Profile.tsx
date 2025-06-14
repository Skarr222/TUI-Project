import { Card, Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Formik } from "formik";
import * as Yup from "yup";
import { UserProfile } from "../../models/User";

export const Profile = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const user: UserProfile = {
    ...auth.user,
    firstName: "Oskar",
    lastName: "Nowak",
    address: "ul. Przykładowa 123, 00-001 Warszawa",
    phone: "+48123456789",
    email: auth.user?.email ?? "",
    name: "Oskar Nowak",
  } as UserProfile;

  if (!user) {
    return (
      <Container className="mt-5">
        <h1 className="text-center mb-4">Twój Profil</h1>
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="mb-4">Informacje o użytkowniku</h2>
            <p>Brak danych użytkownika.</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Imię jest wymagane"),
    lastName: Yup.string().required("Nazwisko jest wymagane"),
    email: Yup.string()
      .email("Niepoprawny email")
      .required("Email jest wymagany"),
    phone: Yup.string().matches(/^\+?\d{9,15}$/, "Niepoprawny numer telefonu"),
    address: Yup.string().required("Adres jest wymagany"),
  });

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4 ">Twój Profil</h1>
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2 className="mb-4">Edytuj dane użytkownika</h2>
          <Formik
            initialValues={{
              firstName: user.firstName || "",
              lastName: user.lastName || "",
              email: user.email || "",
              phone: user.phone || "",
              address: user.address || "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log("Zaktualizowane dane:", values);

              // TODO: dispatch to Redux or send API request here
              // dispatch(updateUserProfile(values));

              setSubmitting(false);
            }}
            style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName && touched.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Nazwisko</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName && touched.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email && touched.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Telefon</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone && touched.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Adres</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    isInvalid={!!errors.address && touched.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid mt-4">
                  <Button type="submit" disabled={isSubmitting}>
                    Zapisz zmiany
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
};
