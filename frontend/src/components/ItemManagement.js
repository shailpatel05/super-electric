import React, { useEffect, useState } from 'react';
import { fetchItems, addItem, updateItem, deleteItem } from '../services/api';

const ItemManagement = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        price: 0,
        stock: 0,
        category: '',
        sku: ''
    });
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        loadItems();
    }, []);

    useEffect(() => {
        filterAndSortItems();
    }, [items, searchTerm, sortBy, sortOrder]); // eslint-disable-line react-hooks/exhaustive-deps

    const loadItems = async () => {
        try {
            const data = await fetchItems();
            setItems(data);
        } catch (error) {
            console.error('Error loading items:', error);
        }
    };

    const filterAndSortItems = () => {
        let filtered = items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.sku.toLowerCase().includes(searchTerm.toLowerCase())
        );

        filtered.sort((a, b) => {
            let aValue = a[sortBy];
            let bValue = b[sortBy];

            if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue.toLowerCase();
            }

            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        setFilteredItems(filtered);
    };

    const handleAddItem = async () => {
        try {
            await addItem(newItem);
            setNewItem({
                name: '',
                description: '',
                price: 0,
                stock: 0,
                category: '',
                sku: ''
            });
            setShowAddForm(false);
            loadItems();
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    const handleEditItem = async () => {
        try {
            await updateItem(editItem._id, editItem);
            setEditItem(null);
            setShowEditForm(false);
            loadItems();
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleDeleteItem = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                await deleteItem(id);
                loadItems();
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Item Management</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowAddForm(!showAddForm)}
                >
                    {showAddForm ? 'Cancel' : 'Add New Item'}
                </button>
            </div>

            {/* Filters and Search */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <select
                        className="form-control"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="name">Sort by Name</option>
                        <option value="price">Sort by Price</option>
                        <option value="stock">Sort by Stock</option>
                        <option value="category">Sort by Category</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select
                        className="form-control"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>

            {/* Add Item Form */}
            {showAddForm && (
                <div className="card mb-4">
                    <div className="card-header">
                        <h5>Add New Item</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newItem.name}
                                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>SKU</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newItem.sku}
                                        onChange={(e) => setNewItem({ ...newItem, sku: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={newItem.price}
                                        onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
                                        step="0.01"
                                        min="0"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Stock</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={newItem.stock}
                                        onChange={(e) => setNewItem({ ...newItem, stock: Number(e.target.value) })}
                                        min="0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={newItem.category}
                                        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                value={newItem.description}
                                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                rows="3"
                            />
                        </div>
                        <button className="btn btn-success" onClick={handleAddItem}>Add Item</button>
                    </div>
                </div>
            )}

            {/* Edit Item Form */}
            {showEditForm && editItem && (
                <div className="card mb-4">
                    <div className="card-header">
                        <h5>Edit Item</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editItem.name}
                                        onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>SKU</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editItem.sku}
                                        onChange={(e) => setEditItem({ ...editItem, sku: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={editItem.price}
                                        onChange={(e) => setEditItem({ ...editItem, price: Number(e.target.value) })}
                                        step="0.01"
                                        min="0"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Stock</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={editItem.stock}
                                        onChange={(e) => setEditItem({ ...editItem, stock: Number(e.target.value) })}
                                        min="0"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editItem.category}
                                        onChange={(e) => setEditItem({ ...editItem, category: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                value={editItem.description}
                                onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                                rows="3"
                            />
                        </div>
                        <button className="btn btn-success mr-2" onClick={handleEditItem}>Update Item</button>
                        <button className="btn btn-secondary" onClick={() => { setShowEditForm(false); setEditItem(null); }}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Items Table */}
            <div className="card">
                <div className="card-header">
                    <h5>Items ({filteredItems.length})</h5>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>SKU</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.sku}</td>
                                        <td>${item.price?.toFixed(2)}</td>
                                        <td>{item.stock}</td>
                                        <td>{item.category}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-warning mr-2"
                                                onClick={() => { setEditItem(item); setShowEditForm(true); }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() => handleDeleteItem(item._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {filteredItems.length === 0 && (
                        <div className="text-center py-4">
                            <p>No items found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemManagement;