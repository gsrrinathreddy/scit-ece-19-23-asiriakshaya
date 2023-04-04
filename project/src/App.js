import './App.css';
import Navbar from './components/Navbar';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Contactme from './Pages/Contactme'; 
import Project from './Pages/Project';
import Certificate from './Pages/Certificate';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='Skills' element={<Skills/>}/>
  <Route path='Hobbies' element={<Hobbies/>}/>
  <Route path='Experience' element={<Experience/>}/>
  <Route path='Qualification' element={<Qualification/>}/>
  <Route path='Aboutus' element={<Aboutus/>}/>
  <Route path='Contactme' element={<Contactme/>}/>
  <Route path='Project' element={<Project/>}/>
  <Route path='Certificate' element={<Certificate/>}/>



</Routes>
</BrowserRouter>
     </div>
  );
}
export default App;
