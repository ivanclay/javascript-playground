import { useState } from 'react'; 
import { Link } from 'react-router-dom';

import './signin.css';
import logo from '../../assets/logo.png';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
      <div className='container-center'>
        <div className='login'>
            <div className='logo'>
                <img src={logo} alt='logo'/>    
            </div>

            <form>
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
                    onChange={ (e) => setEmail(e.target.value) }
                />
                
                <button type='submit'>Acessar</button>
            </form>

            <Link to='/register'>Criar uma conta</Link>

        </div>  
      </div>
    )
  }