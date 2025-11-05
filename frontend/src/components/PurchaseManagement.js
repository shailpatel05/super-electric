import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PurchaseManagement = () => {
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const response = await axios.get('/api/purchases');
                setPurchases(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPurchases();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/purchases/${id}`);
            setPurchases(purchases.filter(purchase => purchase.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Purchase Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Supplier</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(purchase => (
                        <tr key={purchase.id}>
                            <td>{purchase.id}</td>
                            <td>{purchase.item}</td>
                            <td>{purchase.quantity}</td>
                            <td>{purchase.supplier}</td>
                            <td>{new Date(purchase.date).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleDelete(purchase.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PurchaseManagement;