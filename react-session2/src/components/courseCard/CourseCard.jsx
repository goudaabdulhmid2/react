import { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <Col md={6} lg={4}>
      <Card className="h-100 shadow">
        <Card.Img
          variant="top"
          src={course.image}
          style={{
            height: "220px",
            objectFit: "cover",
          }}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title>{course.title}</Card.Title>

          <Card.Text className="text-muted">
            Duration: {course.duration}
          </Card.Text>

          <Button
            variant={isFavorite ? "danger" : "outline-danger"}
            className="mb-2"
            onClick={toggleFavorite}
          >
            {isFavorite
              ? "Added To Favorite ❤️"
              : "Add To Favorite"}
          </Button>

          <Button
            as={Link}
            to={`/courses/${course.id}`}
            variant="primary"
          >
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}