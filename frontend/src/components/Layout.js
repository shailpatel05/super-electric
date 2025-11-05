import React from 'react';
import { Navbar } from 'react-bootstrap';
import Sidebar from './Sidebar';

const Layout = ({ children, title }) => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1" style={{ marginLeft: '250px' }}>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand>{title}</Navbar.Brand>
                </Navbar>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
