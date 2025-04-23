import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Image,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import { HomeCarousel } from "../components/home/carousel";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/offers?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div>
      <HomeCarousel />
      <Container
        fluid
        className="position-absolute h-100 d-flex justify-content-center align-items-center"
        style={{ zIndex: 2 }}
      >
        <Row className="justify-content-center text-center w-100">
          <Col md={10} lg={8}>
            <Image
              alt="logo-lorem-ipsum"
              src={"../logo.png"}
              style={{
                width: "100%",
                maxWidth: "350px",
                height: "auto",
                objectFit: "contain",
              }}
              className="img-fluid mx-auto d-block"
            />

            <Card
              className="p-4 shadow-lg mx-auto"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
              }}
            >
              <Form onSubmit={handleSearch}>
                <Row className="align-items-center gx-3">
                  <Col md={10} className="mb-3 mb-md-0">
                    <Form.Control
                      type="search"
                      placeholder="Wpisz destynację..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="form-control-lg"
                      style={{ borderRadius: "30px", height: "60px" }}
                    />
                  </Col>
                  <Col md={2}>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-100"
                      style={{ borderRadius: "30px", height: "60px" }}
                    >
                      Szukaj
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
