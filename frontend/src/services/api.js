import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// User authentication
export const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

export const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
};

// Item management
export const fetchItems = async () => {
    const response = await api.get('/items');
    return response.data;
};

export const addItem = async (itemData) => {
    const response = await api.post('/items', itemData);
    return response.data;
};

export const updateItem = async (itemId, itemData) => {
    const response = await api.put(`/items/${itemId}`, itemData);
    return response.data;
};

export const deleteItem = async (itemId) => {
    const response = await api.delete(`/items/${itemId}`);
    return response.data;
};

// Purchase management
export const fetchPurchases = async () => {
    const response = await api.get('/purchases');
    return response.data;
};

export const addPurchase = async (purchaseData) => {
    const response = await api.post('/purchases', purchaseData);
    return response.data;
};

// Reporting
export const fetchReports = async () => {
    const response = await api.get('/reports');
    return response.data;
};

// User management
export const fetchUsers = async () => {
    const response = await api.get('/users');
    return response.data;
};

export const addUser = async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
};

export const updateUser = async (userId, userData) => {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
};

export const deleteUser = async (userId) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
};

export default api;