import React from "react";
import Login from './components/Login'
import Signup from './components/Signup';
import Account from './components/Account'
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/Authcontext";
function App() {
  return (
    <div>
    <h1 className='text-center text-3xl font-bold'>
      Firebase Auth & Context
    </h1>
    <AuthContextProvider>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={<Account />} />

    </Routes>
    </AuthContextProvider>
    
    </div>
  );
}

export default App;
