import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Collections from './components/Collections';
import Details from './components/Details';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Collections />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </div>
);

export default App;
