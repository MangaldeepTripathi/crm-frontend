import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/PageBreadcrumb.comp'
import { shortText } from '../../utils/validation'

const initialFrmDt={
  subject:"",
  issueDate:"",
  detail:""
}
const initialFrmError={
  subject:false,
  issueDate:false,
  detail:false
}
export const AddTicket = () => {
 
  const[frmData, setFrmData]=useState(initialFrmDt);
  const[frmDataError, setFrmDataError]=useState(initialFrmError);
  useEffect(() => {},[frmData,initialFrmError]);
  const handleOnChange = (e) => {
    const{name, value}=e.target;
    //console.log(name, value);
    setFrmData({
      ...frmData,
      [name]:value,
    })
  }
 const handleOnSubmit= async (e)=>{
  e.preventDefault();
  setFrmDataError(initialFrmError);
  const isSubjectValid= await shortText(frmData.subject);
  setFrmDataError({...initialFrmError, subject:!isSubjectValid});
  console.log("form submit request received");
 }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddTicketForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} frmDt={frmData} frmDataError={frmDataError} />
            </Col>
        </Row>
    </Container>
  )
}
