// src/services/api.js
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';



export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const fetchJob = (jobId) => axios.get(`${API_URL}/jobs/${jobId}`);
export const updateJob = (jobId, jobData) => axios.put(`${API_URL}/jobs/${jobId}`, jobData);
export const fetchJobs = () => axios.get(`${API_URL}/jobs`);
export const createJob = (jobData) => axios.post(`${API_URL}/jobs`, jobData);
export const fetchDonations = () => axios.get(`${API_URL}/donations`);
export const makeDonation = (donationData) => axios.post(`${API_URL}/donations`, donationData);
export const fetchNotifications = (userId) => axios.get(`${API_URL}/notifications/${userId}`);
export const fetchVolunteerOpportunities = () => axios.get(`${API_URL}/volunteer`);
export const fetchEvents = async () => {
    const response = await fetch('/api/events');
    return response.json();
  };
  export const fetchUser = async (userId) => {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
  };
  export const updateUser = async (userId, updatedData) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    return response.json();
  };
  
  