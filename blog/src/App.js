import React, {useState} from 'react';
import Title from './comps/Title';
import Insights from './comps/Insights'
import './index.css';

function App() {

  const [showInsights, setShowInsights] = useState(null);  
  return (
    <div className="App">
      <Title setShowInsights = {setShowInsights}/>
      {showInsights && <Insights setShowInsights = {setShowInsights}/>}
    </div>
  );
}

export default App;
