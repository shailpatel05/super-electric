const express = require('express');
const { createPurchase, getPurchases, updatePurchase, deletePurchase } = require('../controllers/purchaseController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new purchase order
router.post('/', verifyToken, isAdmin, createPurchase);

// Get all purchase orders
router.get('/', verifyToken, getPurchases);

// Update a purchase order
router.put('/:id', verifyToken, isAdmin, updatePurchase);

// Delete a purchase order
router.delete('/:id', verifyToken, isAdmin, deletePurchase);

module.exports = router;