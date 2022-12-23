import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDataError,frmDt }) => {
  console.log(frmDt);
  return (
    <div className=" bg-info mt-3 add-new-ticket bg-light">
      <h1 className='text-info text-center'>Add New Ticket</h1>
      <div className='mt-4 p-5 bg-primary text-white rounded'>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Subject
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                name="subject"
                // minLength="3"
                value={frmDt.subject}
                maxLength="100"
                onChange={handleOnChange}
                placeholder="Subject"
              />
              <Form.Text className="text-danger">
              {frmDataError.subject && "Subject is required!"}
            </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Date
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                value={frmDt.issueDate}
                onChange={handleOnChange}
                
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control
              as="textarea"
              name="detail"
              value={frmDt.detail}
              rows="5"
              onChange={handleOnChange}
              
            />
          </Form.Group>

          <Button type="submit" variant="info" block>
            Open Ticket
          </Button>
        </Form>
      </div>
    </div>
  )
}

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired
};