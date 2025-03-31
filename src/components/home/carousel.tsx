import { Carousel } from "react-bootstrap";

export const HomeCarousel = () => {
  return (
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
  );
};
