import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book(props) {
  const {
    title,
    subtitle,
    authors,
    link,
    description,
    image,
    googleId
  } = props;
  return (
    <ListItem>
      <Row>
        <Col size="lg-12">
          <h3>{title}</h3><h4>{subtitle}</h4>
          <p>{authors}</p>
          <small>{googleId}</small>
        </Col>
      </Row>
      <Row>
        <Col size="lg-3">
          <img src={image} alt={title}/>
        </Col>
        <Col size="lg-8">
          <p>{description}</p>
        </Col>
        <Col size="lg-1">
          <Row>
            <Col size="sm-12">
              <button>Save</button>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary">View</button></a>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
