import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Collections from './components/Collections';
import Photos from './components/Photos';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Collections />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
