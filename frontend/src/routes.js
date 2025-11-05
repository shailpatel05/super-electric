import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import UserManagementPage from './pages/UserManagementPage';
import NotFoundPage from './pages/NotFoundPage';
import ItemManagement from './components/ItemManagement';
import PurchaseManagement from './components/PurchaseManagement';
import ReportModule from './components/ReportModule';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/users" component={UserManagementPage} />
                <Route path="/items" component={ItemManagement} />
                <Route path="/purchases" component={PurchaseManagement} />
                <Route path="/reports" component={ReportModule} />
                <Route path="/" exact component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default Routes;