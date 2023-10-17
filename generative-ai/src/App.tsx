import './App.css';
import { Layout } from './components/layout-chat/layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='/teste' element={<div>
          <p>TESTE</p>
        </div>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
