
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home  from './components/Home';
import  Number  from './components/Number';
import Hello from './components/Hello';

function App() {

  return (
    <div class="container text-center">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/:num" element={<Number />}/>
            <Route path="/:word" element={<Hello />}/>
            <Route path="/:word/:text_color/:bg_color" element={<Hello />}/>
          </Routes>
        </BrowserRouter>
        </div>


  );
}

export default App;
