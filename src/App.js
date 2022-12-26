import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Button } from 'react-bootstrap';
import Entry from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { AddTicket } from './page/new-ticket/AddTicket.page';
import { TicketLists } from './page/ticket-list/TicketLists.page';
import { Ticket } from './page/ticket/Ticket.page';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Entry />}></Route>
          <Route path="/" element={<Navigate to="/" />}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/add-ticket" element={<PrivateRoute><AddTicket /></PrivateRoute>} />
          <Route path="/tickets" element={<PrivateRoute><TicketLists /></PrivateRoute>} />
          <Route path="/ticket/:tId" element={<PrivateRoute><Ticket /></PrivateRoute>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
