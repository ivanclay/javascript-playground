import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import './favoritos.css';


function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhalista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhalista) || []);
    },[]);

    function excluirFilme(id){
        let filtro = filmes.filter((item) => {
            return( item.id !== id )
        });

        setFilmes(filtro);
        localStorage.setItem('@primeflix', JSON.stringify(filtro));
        toast.success('Filme removido com sucesso!');
    }

  return(
    <div className='favoritos'>
        <h1>Favoritos</h1>
        { filmes.length === 0 && <span>Não há filmes cadastrados!</span> }
        <ul>
            {filmes.map((item) => {
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Favoritos;