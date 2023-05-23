import { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

import './signin.css';
import logo from '../../assets/logo.png';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleSignIn(e){
        e.preventDefault();

        if(email !== '' & senha !== ''){
            signIn(email, senha);
        }
    }

    return(
      <div className='container-center'>
        <div className='login'>
            <div className='logo'>
                <img src={logo} alt='logo'/>    
            </div>

            <form onSubmit={handleSignIn}>
                <h1>Entrar</h1>
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
                
                <button type='submit'>
                    { loadingAuth ? 'Carregando....' : 'Acessar'}
                    </button>
            </form>

            <Link to='/register'>Criar uma conta</Link>

        </div>  
      </div>
    )
  }