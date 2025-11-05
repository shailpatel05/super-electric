import React, { useEffect, useState } from 'react';
import { fetchReports } from '../services/api';

const ReportModule = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReports = async () => {
            try {
                const data = await fetchReports();
                setReports(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getReports();
    }, []);

    if (loading) {
        return <div>Loading reports...</div>;
    }

    if (error) {
        return <div>Error fetching reports: {error}</div>;
    }

    return (
        <div>
            <h2>Reports</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.name}</td>
                            <td>{new Date(report.date).toLocaleDateString()}</td>
                            <td>{report.details}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportModule;