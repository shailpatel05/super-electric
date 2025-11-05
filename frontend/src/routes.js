import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import UserManagementPage from './pages/UserManagementPage';
import ItemManagementPage from './pages/ItemManagementPage';
import PurchaseManagementPage from './pages/PurchaseManagementPage';
import ReportPage from './pages/ReportPage';
import NotFoundPage from './pages/NotFoundPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/users" component={UserManagementPage} />
                <Route path="/items" component={ItemManagementPage} />
                <Route path="/purchases" component={PurchaseManagementPage} />
                <Route path="/reports" component={ReportPage} />
                <Route path="/" exact component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default Routes;