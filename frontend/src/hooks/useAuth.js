import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser, logoutUser } from '../services/authService';

const useAuth = () => {
    const { setUser, setIsAuthenticated } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const login = async (credentials) => {
        try {
            const user = await loginUser(credentials);
            setUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login failed:', error);
            setIsAuthenticated(false);
        }
    };

    const logout = async () => {
        await logoutUser();
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const checkAuth = async () => {
            // Logic to check if user is already authenticated
            // This could involve checking a token or making an API call
            setLoading(false);
        };

        checkAuth();
    }, []);

    return { login, logout, loading };
};

export default useAuth;