const Purchase = require('../models/Purchase');

// Create a new purchase order
exports.createPurchaseOrder = async (req, res) => {
    try {
        const purchaseData = req.body;
        const newPurchase = new Purchase(purchaseData);
        await newPurchase.save();
        res.status(201).json({ message: 'Purchase order created successfully', purchase: newPurchase });
    } catch (error) {
        res.status(500).json({ message: 'Error creating purchase order', error: error.message });
    }
};

// Get all purchase orders
exports.getAllPurchaseOrders = async (req, res) => {
    try {
        const purchases = await Purchase.find();
        res.status(200).json(purchases);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchase orders', error: error.message });
    }
};

// Get a single purchase order by ID
exports.getPurchaseOrderById = async (req, res) => {
    try {
        const purchase = await Purchase.findById(req.params.id);
        if (!purchase) {
            return res.status(404).json({ message: 'Purchase order not found' });
        }
        res.status(200).json(purchase);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching purchase order', error: error.message });
    }
};

// Update a purchase order
exports.updatePurchaseOrder = async (req, res) => {
    try {
        const updatedPurchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPurchase) {
            return res.status(404).json({ message: 'Purchase order not found' });
        }
        res.status(200).json({ message: 'Purchase order updated successfully', purchase: updatedPurchase });
    } catch (error) {
        res.status(500).json({ message: 'Error updating purchase order', error: error.message });
    }
};

// Delete a purchase order
exports.deletePurchaseOrder = async (req, res) => {
    try {
        const deletedPurchase = await Purchase.findByIdAndDelete(req.params.id);
        if (!deletedPurchase) {
            return res.status(404).json({ message: 'Purchase order not found' });
        }
        res.status(200).json({ message: 'Purchase order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting purchase order', error: error.message });
    }
};