
import logo from './logo.svg';
import './App.css';
import TopBar from './components/topbar/TopBar'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings'
import Write from './pages/write/Write'
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import Header from './components/header/Header';
import Post from './components/post/Post';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route, Router, NavLink } from 'react-router-dom';
 function App() {
 
  return (<>
    

    <BrowserRouter>
    <TopBar></TopBar>
    
        <Routes>
        
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} exact/>
          <Route path='/register' element={<Register />} exact/>
          <Route path='/write' element={<Write />} exact/>
          <Route path='/settings' element={<Settings />} exact/>
          <Route path='/post/:postId' element={<Single />} exact/>
          
        </Routes>
      </BrowserRouter>
    
      </>
  );
}

export default App;
