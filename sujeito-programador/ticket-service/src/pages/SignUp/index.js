import { useState } from 'react'; 
import { Link } from 'react-router-dom';

import './signin.css';
import logo from '../../assets/logo.png';

export default function SignUp(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    async function handleSubmit(e){
        e.preventDefault();

        if(nome !== '' && email !== '' && senha !== ''){

        }
    }

    return(
      <div className='container-center'>
        <div className='login'>
            <div className='logo'>
                <img src={logo} alt='logo'/>    
            </div>

            <form onSubmit={handleSubmit}>
                <h1>Cadastrar Nova Conta</h1>

                <input
                    type='text'
                    placeholder='digite o nome'
                    value={nome}
                    onChange={ (e) => setNome(e.target.value) }
                />

                <input
                    type='text'
                    placeholder='digite o email'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <input
                    type='password'
                    placeholder='*****'
                    value={senha}
                    onChange={ (e) => setSenha(e.target.value) }
                />
                
                <button type='submit'>Acessar</button>
            </form>

            <Link to='/'>Já possui uma conta? Faça login</Link>

        </div>  
      </div>
    )
  }