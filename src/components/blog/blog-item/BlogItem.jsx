import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogAuthor from "../blog-author/BlogAuthor";
import "./styles.css";
const BlogItem = ({ products }) => {
  // const { title, cover, author, _id } = props;
  return (
    <Card className="blog-card">
      <Card.Img variant="top" src={products.imageUrl} className="blog-cover" />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
      </Card.Body>
      <Card.Footer>${products.price}</Card.Footer>
    </Card>
  );
};

export default BlogItem;
