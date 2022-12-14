import React from 'react';
import { Table } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export const TicketTable = ({tickets}) => {
    console.log("tickets",tickets);
    //if(!tickets.length)
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {
                tickets.length && tickets.map(row=>(
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td><Link to={`/ticket/${row.id}`}>{row.subject}</Link></td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
                    </tr>
                ))
            }
            
        </tbody>
    </Table>
  )
}
TicketTable.propTypes={
    tickets:PropTypes.array.isRequired,
}