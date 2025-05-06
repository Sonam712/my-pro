import React, { useState, useEffect } from 'react';

function About() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Add or Update item
  const handleAddOrUpdate = () => {
    if (inputValue.trim() === '') return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = inputValue.trim();
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, inputValue.trim()]);
    }
    setInputValue('');
  };

  // Delete single item
  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
    // if deleting edited item, cancel edit mode
    if (editIndex === index) {
      setEditIndex(null);
      setInputValue('');
    }
  };

  // Edit item
  const handleEdit = (index) => {
    setInputValue(items[index]);
    setEditIndex(index);
  };

  // Clear all
  const handleClearAll = () => {
    setItems([]);
    setInputValue('');
    setEditIndex(null);
    localStorage.removeItem('items');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Item List App</h2>

      <div className="mb-4">
        <input
          type="text"
          className="border px-3 py-2 mr-2 w-2/3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleAddOrUpdate}
          className="bg-primary text-white px-3 py-2 rounded mr-2"
        >
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
        <button
          onClick={handleClearAll}
          className="bg-danger text-white px-3 py-2 rounded"
        >
          Clear All
        </button>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded list">
            <span>{item}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-warning px-2 py-1 rounded border-0"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-danger text-white px-2 py-1 rounded border-0"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;