import { Routes, Route } from "react-router-dom";
import  Login  from './pages/login/Login'
import UserProvider from '../src/context/User/UserProvider'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
