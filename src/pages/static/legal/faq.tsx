import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import "../../../styles/faq.css"; // Assuming you place styles in this CSS file

export const PrivacyFAQ = () => {
  const faqs = [
    {
      question: "Jakie dane osobowe są zbierane?",
      answer:
        "Zbierane są dane niezbędne do świadczenia usług drogą elektroniczną, obsługi konta użytkownika, realizacji zamówień oraz komunikacji z użytkownikami.",
    },
    {
      question: "Kto jest administratorem danych osobowych?",
      answer:
        "Administratorem danych osobowych jest [nazwa firmy] z siedzibą w [adres].",
    },
    {
      question: "W jakim celu przetwarzane są dane?",
      answer:
        "Dane są przetwarzane w celu świadczenia usług, realizacji umowy, spełnienia obowiązków prawnych oraz z powodu uzasadnionych interesów administratora.",
    },
    {
      question: "Na jakiej podstawie przetwarzane są dane?",
      answer:
        "Dane są przetwarzane na podstawie zgody użytkownika, potrzeby wykonania umowy, obowiązków prawnych oraz prawnie uzasadnionych interesów administratora.",
    },
    {
      question: "Jakie prawa przysługują użytkownikowi?",
      answer:
        "Użytkownik ma prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu.",
    },
  ];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card.Body className="p-4">
            <div className="text-center mb-4">
              <h1 className="text-primary">Najczęściej Zadawane Pytania</h1>
              <p className="lead text-muted mb-0">
                Oto odpowiedzi na najczęściej zadawane pytania dotyczące
                polityki prywatności.
              </p>
            </div>
            <Accordion
              defaultActiveKey="0"
              alwaysOpen
              className="custom-accordion"
            >
              {faqs.map((faq, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={index}
                  className="custom-accordion-item"
                >
                  <Accordion.Header className="custom-accordion-header">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="custom-accordion-body">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyFAQ;
