import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5005/api/auth/';

const register = async (userData) => {
    const response = await axios.post(`${API_URL}register`, userData);
    return response.data;
};

const login = async (credentials) => {
    const response = await axios.post(`${API_URL}login`, credentials);
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logout,
    getCurrentUser,
};
