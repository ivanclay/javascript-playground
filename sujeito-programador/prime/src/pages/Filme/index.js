import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../services/api";
import './filme.css';


function Filme(){

    const { id } = useParams();
    const navigate = useNavigate();
    const [filme,setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:'d9509f4eb393e9aeacda6e21cd5e2f95',
                    language:'pt-BR'
                }
            })
            .then((response)=>{
                console.log(response.data);
               setFilme(response.data);
               setLoading(false);
            })
            .catch(()=>{ 
                console.log('FILME NAO ENCONTRADO'); 
                navigate('/not-found', { replace: true })
                return;
            });
        }

        loadFilme();

        return () => { console.log('componente desmontado...')}
    },[id, navigate]);

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes....</h2>
            </div>
        )
    };

    return(
        <div className="filme-info">
                <h1><strong>{filme.title}</strong></h1>
                <img 
                    src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}  
                    alt={filme.title}
                />
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average.toFixed(1)}/10</strong>

                <div className="area-button">
                    <button>Salvar</button>
                    <button>
                        <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                    </button>
                </div>



            </div>

    );
}

export default Filme;