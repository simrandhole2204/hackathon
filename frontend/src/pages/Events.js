// src/pages/Events.js
import React, { useState, useEffect } from 'react';
import { fetchEvents } from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const response = await fetchEvents();
      setEvents(response.data);
    };
    loadEvents();
  }, []);

  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
            {/* Add RSVP functionality here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
