import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';
import Layout from '../components/Layout';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const DashboardPage = () => {

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }]
    };

    const pieData = {
        labels: ['Electronics', 'Clothing', 'Books', 'Home'],
        datasets: [{
            data: [300, 50, 100, 80],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
    };

    return (
        <Layout title="Dashboard">
            <Container fluid>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Total Items</Card.Title>
                                    <Card.Text className="h3">150</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Total Purchases</Card.Title>
                                    <Card.Text className="h3">45</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Total Sales</Card.Title>
                                    <Card.Text className="h3">$12,500</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col md={6}>
                            <Card>
                                <Card.Header>Sales Overview</Card.Header>
                                <Card.Body>
                                    <Bar data={barData} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Header>Revenue Trend</Card.Header>
                                <Card.Body>
                                    <Line data={lineData} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Header>Category Distribution</Card.Header>
                                <Card.Body>
                                    <Pie data={pieData} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Header>Recent Activity</Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled">
                                        <li>New item added: Laptop</li>
                                        <li>Purchase made: 5 units</li>
                                        <li>User registered: John Doe</li>
                                        <li>Report generated: Monthly Sales</li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        </Layout>
    );
};

export default DashboardPage;
