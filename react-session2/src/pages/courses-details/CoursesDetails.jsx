import { useParams } from "react-router-dom";
import { Container, Card, Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios"


function CoursesDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");



  async function getPost(){
    try{
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setCourse(res.data);
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }


  useEffect(() => {
    document.title = `Course ${id}`;
    getPost()

  }, [id]);

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
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="mb-4">
            {course.title}
          </Card.Title>

          <Card.Text>
            {course.body}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CoursesDetails;