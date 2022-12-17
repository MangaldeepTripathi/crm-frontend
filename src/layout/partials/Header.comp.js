import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import logo from '../../assests/img/logo.png'

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant='dark' expand='md'>
      <Navbar.Brand ><img src={logo} alt="logo" width="50px"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Dashboard</Nav.Link>
          <Nav.Link href="#">Tickets</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}
