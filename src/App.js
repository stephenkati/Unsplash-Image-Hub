import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Images from './components/Images';
import Likes from './components/Likes';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </div>
  );
}

export default App;
