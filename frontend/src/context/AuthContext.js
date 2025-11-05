import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, logoutUser } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (credentials) => {
        const userData = await loginUser(credentials);
        setUser(userData);
        navigate('/dashboard');
    };

    const logout = () => {
        logoutUser();
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};