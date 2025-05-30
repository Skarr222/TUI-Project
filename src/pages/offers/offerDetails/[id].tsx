import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Badge,
  Button,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";

const offers = [
  {
    id: 1,
    title: "Magiczna Grecja",
    destination: "Santorini, Grecja",
    description:
      "Odkryj piękno białych domów i błękitnych kopuł na malowniczym Santorini. Zanurz się w greckiej kulturze, ciesz się wyśmienitą kuchnią i podziwiaj niezapomniane zachody słońca.",
    price: 3999,
    duration: "7 dni",
    image: "/offers/greece.jpeg",
    category: "europa",
    itinerary: [
      "Dzień 1: Przylot do Santorini i zakwaterowanie w hotelu z widokiem na kalderę. Czas wolny na aklimatyzację i wieczorny spacer po Fira.",
      "Dzień 2-3: Zwiedzanie urokliwego miasteczka Oia, słynącego z pocztówkowych widoków. Degustacja lokalnych win w jednej z winnic, relaks na unikalnej plaży Red Beach.",
      "Dzień 4: Rejs katamaranem wokół wyspy, podziwianie wulkanicznych krajobrazów i pływanie w krystalicznie czystych wodach. Kolacja na pokładzie z widokiem na zachód słońca.",
      "Dzień 5-6: Czas wolny na indywidualne eksplorowanie wyspy. Możliwość skorzystania z masaży, lekcji gotowania lub lokalnych wycieczek fakultatywnych (np. na Nea Kameni i Palea Kameni).",
      "Dzień 7: Ostatnie chwile na zakupy pamiątek lub kawę z widokiem. Transfer na lotnisko i powrót do Polski.",
    ],
    additionalInfo:
      "Nasza oferta 'Magiczna Grecja' to idealny wybór dla tych, którzy pragną połączyć relaks z odkrywaniem nowych miejsc. Zapewniamy komfortowe zakwaterowanie, starannie zaplanowany program oraz czas na spontaniczne przygody. Santorini to wyspa, która zachwyca na każdym kroku, a my zadbamy o to, by Twoja podróż była niezapomniana. Pakiet zawiera ubezpieczenie podróżne, które gwarantuje spokój ducha przez cały czas trwania wycieczki.",
    costBreakdown: [
      { item: "Przelot w obie strony (lot czarterowy)", price: 1200 },
      { item: "Zakwaterowanie w hotelu 4★ ze śniadaniami", price: 1800 },
      { item: "Wycieczki lokalne (Oia, Red Beach, rejs)", price: 600 },
      {
        item: "Transport na miejscu (transfery lotniskowe, autokar)",
        price: 200,
      },
      { item: "Ubezpieczenie podróżne (KL, NNW, bagaż)", price: 199 },
    ],
    highlights: [
      "Malownicze zachody słońca w Oia",
      "Krystalicznie czyste wody Morza Egejskiego",
      "Wyśmienita grecka kuchnia i wino",
      "Urokliwe białe miasteczka",
      "Rejs katamaranem wokół wyspy",
    ],
  },
  // Możesz dodać więcej ofert tutaj
];

export const OfferDetails = () => {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((offer) => offer.id === Number(id));

  if (!offer) {
    return (
      <Container className="py-5 text-center">
        <h2>Oferta nie została znaleziona</h2>
        <p>Przepraszamy, ale oferta o podanym identyfikatorze nie istnieje.</p>
        <Button href="/offers" variant="primary" className="mt-3">
          Powrót do listy ofert
        </Button>
      </Container>
    );
  }

  const totalCost = offer.costBreakdown.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={12}>
          <Card className="shadow-lg border-0">
            <Card.Img
              variant="top"
              src={offer.image}
              alt={offer.title}
              style={{ height: "450px", objectFit: "cover" }}
            />
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <Card.Title as="h1" className="mb-2 display-5">
                    {offer.title}
                  </Card.Title>
                  <h2 className="text-muted mb-3 h4">
                    {offer.destination}
                    <Badge bg="info" className="ms-3 align-baseline">
                      {offer.duration}
                    </Badge>
                  </h2>
                </div>
                <div className="text-end">
                  <h3 className="mb-0 text-primary display-4 fw-bold">
                    {offer.price} PLN
                  </h3>
                  <p className="text-muted">za osobę</p>
                </div>
              </div>
              <Card.Text className="lead mt-3 mb-4">
                {offer.description}
              </Card.Text>
              <div className="d-grid gap-2">
                <Button href="/kontakt" variant="success" size="lg">
                  Zamów wycieczkę
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={8}>
          <Card className="shadow-sm border-0 mb-4">
            <Card.Body>
              <h3 className="mb-4 text-primary text-center">Plan wycieczki</h3>
              <ListGroup variant="flush">
                {offer.itinerary.map((day, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="border-0 px-0 text-start"
                  >
                    <strong>Dzień {idx + 1}:</strong> {day}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="mb-3 text-primary text-center">
                Dodatkowe informacje
              </h3>
              <p className="text-start">{offer.additionalInfo}</p>

              {offer.highlights && offer.highlights.length > 0 && (
                <>
                  <h4 className="mt-4 mb-3 text-primary text-center">
                    Najważniejsze atrakcje
                  </h4>
                  <ul className="text-start">
                    {offer.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h3 className="mb-3 text-primary">Co jest wliczone w cenę?</h3>
              <ListGroup variant="flush">
                {offer.costBreakdown.map((item, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex justify-content-between align-items-center text-start"
                  >
                    <span>{item.item}</span>
                    <Badge bg="secondary" className="fs-6">
                      {item.price} PLN
                    </Badge>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item className="fw-bold d-flex justify-content-between align-items-center bg-light mt-2">
                  <span>Całkowity koszt:</span>
                  <span className="text-primary fs-5">{totalCost} PLN</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
