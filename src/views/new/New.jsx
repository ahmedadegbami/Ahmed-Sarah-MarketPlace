import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
const NewBlogPost = (props) => {
  const [text, setText] = useState("");
  const handleChange = useCallback((value) => {
    setText(value);
  });
  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" size="lg" />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" size="lg" />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" size="lg" />
        </Form.Group>

        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Phones</option>
            <option>Shoes</option>
            <option>Drinks</option>
            <option>Accessories</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" size="lg" />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Control type="file" size="lg" />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
