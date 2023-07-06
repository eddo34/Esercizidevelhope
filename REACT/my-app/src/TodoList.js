import React, { useState } from 'react';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  const clearItems = ()=>{
    setItems([]);
  }
  
  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Aggiungi</button>

      <ul>
        {items.map((item, index) => (
          <div>
            <li key={index}>{item}</li>
            <button onClick={handleRemoveItem}>Remove</button>
          </div>
        ))}
      </ul>
      <button onClick={clearItems}>Reset</button>
    </div>
  );
};

export default TodoList;