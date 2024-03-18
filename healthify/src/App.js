import './App.css';
import MediaCard from './components/Inputcard';
import DrawerAppBar from './components/AppBar';
import OutputCard from './components/Outputcard';
import Modelcard from './components/Modelcard';

function App() {
  return (
    <div>
      <DrawerAppBar />
      <div className='main-container'>
        <div className='left'>
          <div className='row1'>
            <MediaCard />
          </div>
          <div className='row2'>
            <OutputCard />
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
