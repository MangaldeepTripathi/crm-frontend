import React from 'react'
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
export const SearchForm = ({handleOnChange, str}) => {
    console.log(str);
  return (
    <div>
    <Form>
      <Form.Group as={Row}>
        <Form.Label column sm="3">
          Search:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            name="searchStr"
            onChange={handleOnChange}
            placeholder="Search ..."
            value={str}
          />
        </Col>
      </Form.Group>
    </Form>
  </div>
  )
}
SearchForm.prototype={
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}
