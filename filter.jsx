import React, { useState } from 'react';

function App() {
  // Sample data
  const [items, setItems] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
    { id: 5, name: 'Pineapple' }
  ]);

  const [otherItems, setOtherItems] = useState([
    { id: 1, name: 'Car' },
    { id: 2, name: 'Bus' },
    { id: 3, name: 'Train' },
    { id: 4, name: 'Bicycle' },
    { id: 5, name: 'Boat' }
  ]);

  // State variable to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Event handler for input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the items array based on the search query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter the otherItems array based on the search query
  const filteredOtherItems = otherItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Search Filter Example</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <h2>Items</h2>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h2>Other Items</h2>
      <ul>
        {filteredOtherItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
