import { Container, Row } from "react-bootstrap";
import CourseCard from "../../components/courseCard/CourseCard";
import { useEffect } from "react";

function Courses() {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      duration: "6 Weeks",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
    },
    {
      id: 2,
      title: "Node.js Basics",
      duration: "8 Weeks",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600",
    },
    {
      id: 3,
      title: "JavaScript Advanced",
      duration: "5 Weeks",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    },
  ];

  useEffect(()=>{
    console.log('Cuorses page mounted')
    document.title = 'Courses'

    return ()=>{
        console.log("Unmounted")
    }
  }, [])

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