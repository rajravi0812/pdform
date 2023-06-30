
import './App.css';
import Form from './components/Form';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Pdfgen from './components/Pdfgen';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path="/pdf" element={<Pdfgen/>}/>
            
          
        </Routes>
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
