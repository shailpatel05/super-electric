import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../services/api';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const response = await fetchUsers();
        setUsers(response);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDelete = async (userId) => {
        await deleteUser(userId);
        loadUsers();
    };

    return (
        <div>
            <h1>User Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;