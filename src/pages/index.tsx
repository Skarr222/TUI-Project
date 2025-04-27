import { Container, Carousel } from "react-bootstrap";
import { DestinationSearch } from "../components/home/destinationSearch";
import backgroundImage from "/home-bg.jpg";

export function Home() {
  return (
    <div>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <DestinationSearch />
      </Container>
      {/* Carousel Section */}
      <Container fluid className="mt-5 mb-5">
        <h3 className="text-center mb-4 fw-bold text-dark">
          🌍 Popularne Destynacje
        </h3>
        <Carousel interval={3000} fade>
          {[
            {
              title: "Ateny, Grecja",
              image: "/popDest/panorama-aten.jpg",
              description: "Starożytne ruiny, słońce i błękitne morze.",
            },
            {
              title: "Bangkok, Tajlandia",
              image: "/popDest/panorama-bankok.jpg",
              description: "Egzotyczna kultura i wyśmienita kuchnia.",
            },
            {
              title: "Nowy Jork, USA",
              image: "/popDest/panorama-nowy_jork.jpg",
              description: "Miasto, które nigdy nie śpi.",
            },
          ].map((dest, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={dest.image}
                alt={dest.title}
                style={{
                  maxHeight: "500px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
              <Carousel.Caption>
                <h5 className="bg-dark bg-opacity-50 px-3 py-2 rounded">
                  {dest.title}
                </h5>
                <p className="bg-dark bg-opacity-50 px-3 py-2 rounded">
                  {dest.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
