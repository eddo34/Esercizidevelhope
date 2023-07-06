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
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={clearItems}>Reset</button>
    </div>
  );
};

export default TodoList;