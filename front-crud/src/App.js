import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './Pages/AddEdit';
import Home from "./Pages/Home";
import View from './Pages/View';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center'/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/addContact' element={<AddEdit/>} />
          <Route path='/update/:id' element={<AddEdit/>} />
          <Route path='/view/:id' element={<View/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
