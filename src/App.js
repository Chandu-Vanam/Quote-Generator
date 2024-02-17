import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  const [category,setCategory] = useState('learning');
  const getCategory = (name) =>{
    setCategory(name);
  }

  return (
    <div className="App">
      <Navbar onSelect = {getCategory} />
      <Card category={category}/>
    </div>
  );
}

export default App;