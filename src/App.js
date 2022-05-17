import React from 'react';
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
<Router>
    <div className='app__all__content'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </div>
</Router>
  );
}

export default App;
