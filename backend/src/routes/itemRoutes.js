const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ensure authMiddleware.verifyToken is defined
if (typeof authMiddleware.verifyToken !== 'function') {
    throw new Error('authMiddleware.verifyToken is not a function');
}

// Ensure all itemController methods are defined
['getAllItems', 'getItemById', 'createItem', 'updateItem', 'deleteItem'].forEach(method => {
    if (typeof itemController[method] !== 'function') {
        throw new Error(`itemController.${method} is not a function`);
    }
});

// Route to get all items
router.get('/items', authMiddleware.verifyToken, itemController.getAllItems);

// Route to get a single item by ID
router.get('/items/:id', authMiddleware.verifyToken, itemController.getItemById);

// Route to create a new item
router.post('/items', authMiddleware.verifyToken, itemController.createItem);

// Route to update an existing item
router.put('/items/:id', authMiddleware.verifyToken, itemController.updateItem);

// Route to delete an item
router.delete('/items/:id', authMiddleware.verifyToken, itemController.deleteItem);

module.exports = router;