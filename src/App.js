import { Route, Routes } from 'react-router-dom';
import './App.css';
import PFHome from './pages/PFHome'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects'
import Login from './pages/Login';
import Footer from './components/Footer';
import Auth from './components/Auth';


function App() {
  return (
   <>
<Routes>
  <Route path='/' element={<PFHome/>}/>
  <Route path='/login' element={<Auth/>}/>
  <Route path='/register' element={<Auth register />}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/projects' element={<Projects/>}/>
</Routes>
<Footer/>

   </>
  );
}

export default App;
