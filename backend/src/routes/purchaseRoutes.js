const express = require('express');
const { createPurchaseOrder, getAllPurchaseOrders, updatePurchaseOrder, deletePurchaseOrder } = require('../controllers/purchaseController');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new purchase order
router.post('/', verifyToken, isAdmin, createPurchaseOrder);

// Get all purchase orders
router.get('/', verifyToken, getAllPurchaseOrders);

// Update a purchase order
router.put('/:id', verifyToken, isAdmin, updatePurchaseOrder);

// Delete a purchase order
router.delete('/:id', verifyToken, isAdmin, deletePurchaseOrder);

module.exports = router;