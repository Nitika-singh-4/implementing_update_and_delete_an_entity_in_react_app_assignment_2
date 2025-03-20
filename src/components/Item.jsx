import React from "react";

const Item = ({ item, onDelete, onEdit }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
      <p>{item.name}</p>
      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={() => onDelete(item.id)} style={{ background: "red", color: "white" }}>
        Delete
      </button>
    </div>
  );
};

export default Item;
