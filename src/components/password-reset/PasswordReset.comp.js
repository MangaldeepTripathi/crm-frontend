import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
export const ResetPassword = ({ handleOnChange,handleOnResetSubmit,formSwitcher, email }) => {
  return (
    <Container>
        <Row>
            <Col>
            <h1>Reset password</h1>
            <hr/>
            <Form onSubmit={handleOnResetSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name='email' onChange={handleOnChange} value={email} placeholder='Enter Email' />
                </Form.Group>
                
                <Button type='submit'>Reset Password</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col>
            <a href='#' onClick={()=>formSwitcher("login")}>Login Now</a>
            </Col>
        </Row>
    </Container>
  )
}
    ResetPassword.propTypes  = {
    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    formSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    };