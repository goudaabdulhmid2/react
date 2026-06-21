import { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
    useEffect(()=>{
        document.title = 'Home'
    }, [])
    
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Our Courses Website</h1>

      <p className="lead mt-3">
        Explore our courses and start learning today.
      </p>

      <Button
        as={Link}
        to="/courses"
        variant="primary"
        size="lg"
        className="mt-3"
      >
        View Courses
      </Button>
    </Container>
  );
}

export default Home;