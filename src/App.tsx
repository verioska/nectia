import React, { useState, useEffect} from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import  Login  from './pages/login/Login'
import UserProvider from '../src/context/User/UserProvider'
import  Home  from './pages/home/Home'
import ProtectedRoute from '../src/protected-route/ProtectedRoute'
import Menu from './components/menu/Menu';
import CharactersProvider from './context/Characters/CharactersProvider';
import CreateCharacter from './pages/createCharacter/CreateCharacter';

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  const [routesThatDontAllowMenu, ] = useState<any[]>(['/home','/createCharacter'])
  const location = useLocation();

  useEffect(() => {
    setMenuIsVisible(routesThatDontAllowMenu.find((route:any) => location.pathname === route) !== undefined)
  }, [location])


  return (
    <CharactersProvider>
      <UserProvider>
        <Routes>
          <Route  path="/" element={
            <ProtectedRoute routeType="public-only"><Login /></ProtectedRoute>
          }/>
          <Route path="/home" element={
            <ProtectedRoute routeType="protected"><Home /></ProtectedRoute>
          }/>
          <Route path="/createCharacter" element={
            <ProtectedRoute routeType="protected"><CreateCharacter /></ProtectedRoute>
          }/>
        </Routes>
        {menuIsVisible && <Menu/>}
      </UserProvider>
    </CharactersProvider>
  );
}

export default App;
