// src/pages/VolunteerOpportunities.js
import React, { useState, useEffect } from 'react';
import { fetchVolunteerOpportunities } from '../services/api';

const VolunteerOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const loadOpportunities = async () => {
      const response = await fetchVolunteerOpportunities();
      setOpportunities(response.data);
    };
    loadOpportunities();
  }, []);

  return (
    <div className="volunteer-opportunities">
      <h1>Volunteer Opportunities</h1>
      <ul>
        {opportunities.map(opportunity => (
          <li key={opportunity._id}>
            <h2>{opportunity.title}</h2>
            <p>{opportunity.description}</p>
            <p>Location: {opportunity.location}</p>
            <button>Sign Up</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerOpportunities;
