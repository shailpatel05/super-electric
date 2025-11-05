const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to get all items
router.get('/', authMiddleware.verifyToken, itemController.getAllItems);

// Route to get a single item by ID
router.get('/:id', authMiddleware.verifyToken, itemController.getItemById);

// Route to create a new item
router.post('/', authMiddleware.verifyToken, itemController.createItem);

// Route to update an existing item
router.put('/:id', authMiddleware.verifyToken, itemController.updateItem);

// Route to delete an item
router.delete('/:id', authMiddleware.verifyToken, itemController.deleteItem);

module.exports = router;