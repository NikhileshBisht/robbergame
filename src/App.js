import './App.css';
import Tiles from './component/Tiles';
import Score from './component/Score';
import Title from './component/Title';  
import Made from './component/Made';
import { useState } from 'react';
 
function App() {
  const [reset, setReset] = useState(false);
 
  
  return (
    <div className="App">
      <Title/>
      <Tiles   setReset={setReset} />
      <Score reset={reset} />
      <Made/>
    </div>
  );
}

export default App;
