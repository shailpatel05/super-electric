const Report = require('../models/Report');

// Generate a report based on inventory data
exports.generateInventoryReport = async (req, res) => {
    try {
        const reports = await Report.find({ type: 'inventory' });
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error generating inventory report', error });
    }
};

// Generate a report based on sales data
exports.generateSalesReport = async (req, res) => {
    try {
        const reports = await Report.find({ type: 'sales' });
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error generating sales report', error });
    }
};

// Generate a report based on purchase data
exports.generatePurchaseReport = async (req, res) => {
    try {
        const reports = await Report.find({ type: 'purchase' });
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error generating purchase report', error });
    }
};

// Generate a report based on user activity data
exports.generateUserActivityReport = async (req, res) => {
    try {
        const reports = await Report.find({ type: 'user-activity' });
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error generating user activity report', error });
    }
};
