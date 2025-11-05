const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to generate inventory report
router.get('/inventory', authMiddleware.verifyToken, reportController.generateInventoryReport);

// Route to generate sales report
router.get('/sales', authMiddleware.verifyToken, reportController.generateSalesReport);

// Route to generate purchase report
router.get('/purchases', authMiddleware.verifyToken, reportController.generatePurchaseReport);

// Route to generate user activity report
router.get('/user-activity', authMiddleware.verifyToken, reportController.generateUserActivityReport);

module.exports = router;