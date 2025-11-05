const Item = require('../models/Item');
const Purchase = require('../models/Purchase');
const User = require('../models/User');

// Get dashboard data
exports.getDashboardData = async (req, res) => {
    try {
        const totalItems = await Item.countDocuments();
        const totalPurchases = await Purchase.countDocuments();
        const totalSales = await Purchase.aggregate([
            { $group: { _id: null, total: { $sum: '$totalAmount' } } }
        ]);
        const totalSalesValue = totalSales.length > 0 ? totalSales[0].total : 0;

        // Recent activity (simplified example)
        const recentActivity = [
            'Item added: Laptop',
            'Purchase made: $500',
            'User registered: John Doe'
        ];

        res.status(200).json({
            totalItems,
            totalPurchases,
            totalSales: totalSalesValue,
            recentActivity
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching dashboard data', error });
    }
};
