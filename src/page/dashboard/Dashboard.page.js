import React from 'react'
import {  Button, Col, Container, Row } from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assests/data/dummy-tickets.json'
import { PageBreadcrumb } from '../../components/breadcrumb/PageBreadcrumb.comp'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Dashboard"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
            <Link to="/add-ticket">
            <Button variant='info' style={{fontSize:"2rem", padding:"10px 30px"}}>Add New Ticket</Button>
            </Link>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-2'>
            <div>Total Ticket: 50</div>
            <div>Pending Ticket: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='text-center m2-2'>
            Recently added ticket
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col className='recent-ticket'>
            <TicketTable tickets={tickets} />
            </Col>
        </Row>
    </Container>
  )
}
