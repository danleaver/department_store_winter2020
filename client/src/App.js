import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Item from './components/Item';

function App() {
  const [ items, setItems ] = useState(null)

  useEffect(() => {
    axios.get(`/api/stores/1/items`)
      .then(res => {
        setItems(res.data)
      })
      .catch(console.log)
  }, [])


  
  
  return (
    <div className="App">
      {items && items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
