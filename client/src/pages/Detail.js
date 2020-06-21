import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

function Detail() {
  const [book, setBook] = useState({})
  const { id } = useParams();
  

  useEffect(() => {
    API.getBook(id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [ id ])

  return (
      <Container fluid>

      </Container>
    );
  }


export default Detail;
