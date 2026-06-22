import { Outlet, NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

function CoursesLayout() {
  return (
    <Container className="py-5">
    
      <div className="bg-primary text-white p-5 rounded shadow mb-4">
        <h1>Courses Center</h1>
        <p className="mb-0">
          Explore our courses and manage your learning journey.
        </p>
      </div>

      
      <Nav
        variant="pills"
        className="justify-content-center mb-4 gap-3"
      >
        <Nav.Link as={NavLink} to="/courses" end>
          All Courses
        </Nav.Link>

        <Nav.Link as={NavLink} to="/courses/add">
          Add Course
        </Nav.Link>
      </Nav>

     
      <div className="bg-light rounded p-4 shadow-sm">
        <Outlet />
      </div>
    </Container>
  );
}

export default CoursesLayout;