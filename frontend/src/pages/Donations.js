// src/pages/Donations.js
import React, { useState, useEffect } from 'react';
import { fetchDonations, makeDonation } from '../services/api';

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const loadDonations = async () => {
      const response = await fetchDonations();
      setDonations(response.data);
    };
    loadDonations();
  }, []);

  const handleDonation = async (e) => {
    e.preventDefault();
    await makeDonation({ amount });
    // Show success message or update donations list
  };

  return (
    <div className="donations">
      <h1>Donations</h1>
      <form onSubmit={handleDonation}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <button type="submit">Donate</button>
      </form>
      <h2>Donation History</h2>
      <ul>
        {donations.map(donation => (
          <li key={donation._id}>
            <p>Amount: ${donation.amount}</p>
            <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Donations;
