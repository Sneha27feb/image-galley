import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Serach';



function App() {
  const [word, setWord] = useState('')
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  }
  
  console.log(word);
  return (
    <div className="App">
      <Header title="Image Gallery"></Header>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}></Search>
    </div>
  );
}

export default App;
