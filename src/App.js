import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMovies from './components/AddMovies';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<AddMovies/>} />
          {/* <Route path='/viewall' element = {} />
          <Route path='/search' element = {} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
