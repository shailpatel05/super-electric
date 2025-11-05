import React, { useEffect, useState } from 'react';
import { getItems, addItem, updateItem, deleteItem } from '../services/api';

const ItemManagement = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '', stock: 0 });
    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await getItems();
        setItems(data);
    };

    const handleAddItem = async () => {
        await addItem(newItem);
        setNewItem({ name: '', description: '', stock: 0 });
        fetchItems();
    };

    const handleEditItem = async () => {
        await updateItem(editItem.id, editItem);
        setEditItem(null);
        fetchItems();
    };

    const handleDeleteItem = async (id) => {
        await deleteItem(id);
        fetchItems();
    };

    return (
        <div>
            <h2>Item Management</h2>
            <div>
                <h3>Add New Item</h3>
                <input
                    type="text"
                    placeholder="Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Stock"
                    value={newItem.stock}
                    onChange={(e) => setNewItem({ ...newItem, stock: Number(e.target.value) })}
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            <div>
                <h3>Existing Items</h3>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.description} - Stock: {item.stock}
                            <button onClick={() => setEditItem(item)}>Edit</button>
                            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            {editItem && (
                <div>
                    <h3>Edit Item</h3>
                    <input
                        type="text"
                        value={editItem.name}
                        onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                    />
                    <input
                        type="text"
                        value={editItem.description}
                        onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                    />
                    <input
                        type="number"
                        value={editItem.stock}
                        onChange={(e) => setEditItem({ ...editItem, stock: Number(e.target.value) })}
                    />
                    <button onClick={handleEditItem}>Update Item</button>
                </div>
            )}
        </div>
    );
};

export default ItemManagement;