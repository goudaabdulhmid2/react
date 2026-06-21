import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow p-4">
            <Card.Body>
              <h1 className="mb-4 text-center">
                About Us
              </h1>

              <p>
                Welcome to our online learning platform. Our goal is to help
                students improve their skills through high-quality courses.
              </p>

              <p>
                We offer courses in React, JavaScript, Node.js, and many other
                technologies.
              </p>

              <p>
                This project was built using React, React Router, and
                React Bootstrap.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;