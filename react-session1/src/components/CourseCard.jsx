import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import reactImage from '../assets/react.svg'



function CourseCard() {

    const courses = {
        title:"ReactJs",
        descrption:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        image:reactImage,
        duration:'12 Week',
        isAvilbale:true
    }
  
  return (
    <Card >
      <Card.Img variant="top" src={courses.image} />
      <Card.Body>
        <span className={`badge me-1 ${courses.isAvilbale ? "bg-success" : "bg-danger"}`}>{courses.isAvilbale ? "Is Avilabel" : "Not Avilable"}</span>
        <span className='badge bg-warning'>{courses.duration}</span>
        <Card.Title>{courses.title}</Card.Title>
        <Card.Text>
          {courses.descrption}
        </Card.Text>
        <Button variant="primary">Start Course</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;