import './App.css';
import MediaCard from './components/Inputcard/Inputcard';
import DrawerAppBar from './components/AppBar/AppBar';
import OutputCard from './components/Outputcard/Outputcard';
import Modelcard from './components/Modelcard/Modelcard';
import { useState } from 'react';

function App() {
  const [selectedValue, setSelectedValue] = useState(null); 
  const [displayData,setDisplayData]=useState(false);// Initially selected value
  return (
    <div>
      <DrawerAppBar />
      <div className='main-container'>
        <div className='left'>
          <div className='row1'>
            <MediaCard selectedValue={selectedValue} setSelectedValue={setSelectedValue}  displayData={displayData} setDisplayData={setDisplayData}/>
          </div>
          <div className='row2'>
            <OutputCard  selectedValue={selectedValue} displayData={displayData}/>
          </div>
        </div>
        <div className='right'>
          <Modelcard />
        </div>
      </div>
    </div>
  );
}

export default App;
