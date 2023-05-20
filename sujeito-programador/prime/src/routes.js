import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Home from './pages/Home';
import Filme from './pages/Filme';
//COMPONENTS
import Header from './Components/Header';
import Erro from './pages/Erro';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/filme/:id' element={ <Filme/> }/>

            <Route path='*' element={ <Erro/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;