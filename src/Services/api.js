import axios from 'axios';

const BASE_URL = 'https://dev.tovtrip.com/usersvc/api/v1';
const API_KEY = '037cb34d-c5ee-4169-b2fd-bec049f77ecf';

export const loginWithEmail = async (email, password) => {
  try {
    console.log('Sending login request with email:', email);
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password
    }, {
      headers: {
        'accept': 'application/json',
        'apikey': API_KEY,
        'x-platform': 'android',
        'Content-Type': 'application/json'
      }
    });
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const loginWithPhone = async (phone, password, countryCode) => {
  try {
    console.log('Sending login request with phone:', phone);
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      phone,         
      password,
      countryCode    
    }, {
      headers: {
        'accept': 'application/json',
        'apikey': API_KEY,
        'x-platform': 'android',
        'Content-Type': 'application/json'
      }
    });
    console.log('Login response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const fetchUserProfile = async (token) => {
  try {
    console.log('Fetching user profile...');
    const response = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        'accept': 'application/json',
        'apikey': API_KEY,
        'Authorization': `Bearer ${token}`,
        'x-platform': 'android',
      },
    });
    console.log('API Response:', response.data);

    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (error) {
    console.error('Failed to fetch user profile:', error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};



