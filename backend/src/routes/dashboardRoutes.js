const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to get dashboard data
router.get('/', authMiddleware.verifyToken, dashboardController.getDashboardData);

module.exports = router;
