import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reservas from './pages/Reservas';


export default function RoutesApp(){
  return(
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/reservas" component={Reservas} />
    </Routes>
  );
}