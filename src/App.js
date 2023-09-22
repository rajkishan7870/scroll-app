import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Description from "./components/description/Description"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/descp/:id' element = {<Description />} />
      </Routes>
    </div>
  );
}

export default App;
