import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <Container className="text-center py-5">
      <h1
        className="display-1 fw-bold text-danger"
      >
        404
      </h1>

      <h2 className="mb-3">
        Page Not Found
      </h2>

      <p className="text-muted mb-4">
        The page you are looking for does not exist.
      </p>

      <Button
        as={Link}
        to="/"
        variant="primary"
      >
        Back To Home
      </Button>
    </Container>
  );
}

export default NotFound;