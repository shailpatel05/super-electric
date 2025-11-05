import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            {/* Sidebar Toggle Button for Mobile */}
            <Button variant="outline-light" onClick={toggleSidebar} className="d-md-none position-fixed" style={{ top: '10px', left: '10px', zIndex: 1050 }}>
                ☰
            </Button>

            {/* Sidebar */}
            <div className={`bg-dark text-white ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`} style={{ width: '250px', minHeight: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 1040 }}>
                <div className="p-3">
                    <h4>Super Electric</h4>
                    <Nav className="flex-column">
                        <Nav.Link as={Link} to="/dashboard" className="text-white">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/items" className="text-white">Items</Nav.Link>
                        <Nav.Link as={Link} to="/purchases" className="text-white">Purchases</Nav.Link>
                        <Nav.Link as={Link} to="/users" className="text-white">Users</Nav.Link>
                        <Nav.Link as={Link} to="/reports" className="text-white">Reports</Nav.Link>
                    </Nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
