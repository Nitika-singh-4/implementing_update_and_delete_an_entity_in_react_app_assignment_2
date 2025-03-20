import React, { useState, useEffect } from "react";
import Item from "./Item";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URI)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch items");
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete item");

      setItems(items.filter((item) => item.id !== id));
      alert("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete item.");
    }
  };

  const handleEdit = (item) => {
    alert(`Edit item: ${item.name}`);
    // You can implement an edit form here
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Item List</h2>
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        items.map((item) => <Item key={item.id} item={item} onDelete={handleDelete} onEdit={handleEdit} />)
      )}
    </div>
  );
};

export default ItemList;
