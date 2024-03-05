import './App.css';
import HomePage from './components/HomePage/HomePage';
import Copper from './components/Copper/Copper';
import { Route,Routes } from 'react-router-dom';
import Aluminum from './components/Aluminum/Aluminum';
import Strips from './components/Strips/Strips';
import Contact from './components/Contact/Contact';
function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/copper' element={<Copper/>}/>
        <Route path='/aluminum' element={<Aluminum/>} />
        <Route path='/strips' element={<Strips/>}/>
      </Routes>
  );
}

export default App;
