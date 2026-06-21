import { useParams } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { useEffect } from "react";

function CoursesDetails() {
  const { id } = useParams();

  useEffect(() => {
    document.title = `Course ${id}`;
  }, [id]);

  return (
    <Container className="py-5">
      <Card className="text-center shadow p-4">
        <Card.Body>
          <Card.Title>Course Details</Card.Title>

          <h2 className="mt-3">
            Course ID: {id}
          </h2>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CoursesDetails;