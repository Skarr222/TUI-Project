import {
  Button,
  Card,
  Carousel,
  Container,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", // Zmiana height na minHeight
        overflow: "hidden",
      }}
    >
      {/* Background Carousel */}
      <Carousel
        controls={false}
        indicators={false}
        interval={7000}
        fade
        className="position-absolute w-100 h-100"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/1.jpg"
            alt="Slide 1"
            style={{ objectFit: "cover", height: "100vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/2.jpg"
            alt="Slide 2"
            style={{ objectFit: "cover", height: "100vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../public/3.jpg"
            alt="Slide 3"
            style={{ objectFit: "cover", height: "100vh" }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Foreground Content */}
      <Container
        fluid
        className="position-absolute h-100 d-flex justify-content-center align-items-center"
        style={{ zIndex: 2 }}
      >
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card
              style={{
                padding: "20px",
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(5px)",
              }}
            >
              <Card.Body>
                <Image
                  alt="logo-lorem-ipsum"
                  src={"../public/logo.png"}
                  style={{
                    width: "100%", // Dostosowanie szerokości obrazu
                    maxWidth: "350px", // Maksymalna szerokość obrazu
                    height: "auto",
                    objectFit: "contain",
                  }}
                  className="img-fluid mx-auto d-block" // Centrowanie obrazu
                />
                <p className="text-start pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam placerat nulla ut tortor bibendum, a molestie sem
                  gravida. Pellentesque posuere sollicitudin eros eu vehicula.
                  Phasellus a neque in est condimentum volutpat. Vivamus
                  facilisis nisi egestas, condimentum felis vitae, elementum
                  dui.
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="outline-dark"
                    className="p-2 mt-4"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ margin: 0, marginRight: "8px" }}>
                      Zobacz ofertę
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
