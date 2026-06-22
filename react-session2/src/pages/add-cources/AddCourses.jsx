import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Container,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";

function AddCourse() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log(data);
      

      setSuccess("Course added successfully!");

      reset();
    } catch (error) {
      setSuccess("");
      console.log(error);
    }
  }

  return (
    <Container className="py-5">
      <Card className="shadow p-4">
        <Card.Body>
          <h2 className="text-center mb-4">
            Add New Course
          </h2>

          {success && (
            <Alert variant="success">
              {success}
            </Alert>
          )}

          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter course title"
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 3,
                    message:
                      "Title must be at least 3 characters",
                  },
                })}
              />

              <p className="text-danger mt-1">
                {errors.title?.message}
              </p>
            </Form.Group>

            {/* Duration */}
            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>

              <Form.Control
                type="text"
                placeholder="8 Weeks"
                {...register("duration", {
                  required: "Duration is required",
                })}
              />

              <p className="text-danger mt-1">
                {errors.duration?.message}
              </p>
            </Form.Group>

            {/* Instructor */}
            <Form.Group className="mb-3">
              <Form.Label>Instructor</Form.Label>

              <Form.Control
                type="text"
                placeholder="Instructor name"
                {...register("instructor", {
                  required: "Instructor is required",
                  minLength: {
                    value: 3,
                    message:
                      "Instructor must be at least 3 characters",
                  },
                })}
              />

              <p className="text-danger mt-1">
                {errors.instructor?.message}
              </p>
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>

              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Course description"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message:
                      "Description must be at least 10 characters",
                  },
                })}
              />

              <p className="text-danger mt-1">
                {errors.description?.message}
              </p>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="w-100"
            >
              Add Course
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddCourse;