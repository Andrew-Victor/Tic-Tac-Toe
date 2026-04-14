import { useState } from "react";
export default function Player({ symbol, isActive, onSave }) {
  let [editMode, setEditMode] = useState(true);
  let [name, setName] = useState("player name");
  const ask = (
    <input
      type="text"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
  const handleEdit = () => {
    setEditMode((editing) => !editing); // vip line its the best pracitcec and recomenation of react team
    if (editMode) onSave(symbol, name);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{editMode ? ask : name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{editMode ? "Save" : "Edit"}</button>
    </li>
  );
}
