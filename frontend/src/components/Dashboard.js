import React from 'react';
import { useEffect, useState } from 'react';
import { fetchDashboardData } from '../services/api';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchDashboardData();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="metrics">
                <div className="metric">
                    <h2>Total Items</h2>
                    <p>{data.totalItems}</p>
                </div>
                <div className="metric">
                    <h2>Total Purchases</h2>
                    <p>{data.totalPurchases}</p>
                </div>
                <div className="metric">
                    <h2>Total Sales</h2>
                    <p>{data.totalSales}</p>
                </div>
            </div>
            <div className="analytics">
                <h2>Recent Activity</h2>
                <ul>
                    {data.recentActivity.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;