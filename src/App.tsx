import { Routes, Route } from "react-router-dom";
import  Login  from './pages/login/Login'
import UserProvider from '../src/context/User/UserProvider'
import  Home  from './pages/home/Home'
import ProtectedRoute from '../src/protected-route/ProtectedRoute'

function App() {

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
    </UserProvider>
  );
}

export default App;
