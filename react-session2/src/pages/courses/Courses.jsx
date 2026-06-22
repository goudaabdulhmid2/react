import { Container, Row, Spinner, Alert } from "react-bootstrap";
import CourseCard from "../../components/courseCard/CourseCard";
import { useEffect, useState } from "react";
import axios from "axios"

function Courses() {
 

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



async function getPosts() {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    setCourses(res.data.slice(0, 10));
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  console.log("Courses page mounted");
  document.title = "Courses";

  getPosts();

  return () => {
    console.log("Unmounted");
  };
  }, []);

  if(loading){
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">
        Our Courses
      </h1>

      <Row className="g-4">
        {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
        ))}
      </Row>
    </Container>
  );
}

export default Courses;