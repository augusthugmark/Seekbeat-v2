import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Search music groups..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Col>
          <Col xs={3}>
            <Button type="submit" variant="primary" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SearchBar;

