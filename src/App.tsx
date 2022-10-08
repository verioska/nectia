import React, { useState, useEffect} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import  Login  from './pages/login/Login'
import UserProvider from '../src/context/User/UserProvider'
import  Home  from './pages/home/Home'
import ProtectedRoute from '../src/protected-route/ProtectedRoute'
import Menu from './components/menu/Menu';

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  const [routesThatDontAllowMenu, ] = useState<any[]>(['/home'])
  const location = useLocation();

  useEffect(() => {
    setMenuIsVisible(routesThatDontAllowMenu.find((route:any) => location.pathname === route) !== undefined)
  }, [])


  return (
    <UserProvider>
      <Routes>
        <Route  path="/" element={
          <ProtectedRoute routeType="public-only"><Login /></ProtectedRoute>
        }/>
        <Route path="/home" element={
          <ProtectedRoute routeType="protected"><Home /></ProtectedRoute>
        }/>
      </Routes>
      {menuIsVisible && <Menu/>}
    </UserProvider>
  );
}

export default App;
