// src/pages/Notifications.js
import React, { useState, useEffect } from 'react';
import { fetchNotifications } from '../services/api';

const Notifications = ({ match }) => {
  const [notifications, setNotifications] = useState([]);
  const userId = match.params.id;

  useEffect(() => {
    const loadNotifications = async () => {
      const response = await fetchNotifications(userId);
      setNotifications(response.data);
    };
    loadNotifications();
  }, [userId]);

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <ul>
        {notifications.map(notification => (
          <li key={notification._id}>
            <p>{notification.message}</p>
            <p>Date: {new Date(notification.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
