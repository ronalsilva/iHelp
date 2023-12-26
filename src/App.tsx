import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './views/home';
import Login from './views/login';

const Routers: React.FC = () => {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
    );
  };

export default Routers;