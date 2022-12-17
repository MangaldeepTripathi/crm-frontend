import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
export const LoginForm = ({ handleOnChange,handleOnSubmit, formSwitcher, email, pass }) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1>Client Login</h1>
            <hr/>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name='email' onChange={handleOnChange} value={email} placeholder='Enter Email' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' onChange={handleOnChange} value={pass} placeholder='Enter Password' />
                </Form.Group>
                <Button type='submit'>Login</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#' onClick={()=>formSwitcher("reset")}>Forgot Password</a>
            </Col>
        </Row>
    </Container>
  )
}
    LoginForm.propTypes  = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired,
    };