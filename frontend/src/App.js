// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Events from './pages/Events';
import Jobs from './pages/Jobs';
import CreateJob from './pages/CreateJob';
import EditJob from './pages/EditJob';
import Donations from './pages/Donations';
import Notifications from './pages/Notifications';
import VolunteerOpportunities from './pages/VolunteerOpportunities';
import Register from './pages/Register';
import Login from './pages/Login';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/events" component={Events} />
            <Route path="/jobs" exact component={Jobs} />
            <Route path="/jobs/create" component={CreateJob} />
            <Route path="/jobs/edit/:id" component={EditJob} />
            <Route path="/donations" component={Donations} />
            <Route path="/notifications/:id" component={Notifications} />
            <Route path="/volunteer" component={VolunteerOpportunities} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
