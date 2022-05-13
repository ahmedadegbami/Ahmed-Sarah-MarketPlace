import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";
import { useEffect } from "react";

const BlogList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response = await fetch("http://localhost:3001/products");
    let data = await response.json();
    console.log(data);
    setProducts(data);
  };

  return (
    <Row>
      {products.map((product) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
          key={product.id}
        >
          <BlogItem products={product} />
        </Col>
      ))}
    </Row>
  );
};

//  const response = await fetch("http://localhost:3001/products");

//   const products = await response.json();

//   return (
//     <Row>
//       {products.map((product) => (
//         <Col
//           md={4}
//           style={{
//             marginBottom: 50,
//           }}
//           key={product.id}
//         >
//           <BlogItem key={product.title} {...product} />
//         </Col>
//       ))}
//     </Row>

export default BlogList;
