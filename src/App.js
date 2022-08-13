import React from 'react';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Logout} from './components/Logout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className='app-all-content'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
