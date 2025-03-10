import avatar from '../../assets/avatar.png';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/auth';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

import './sidebar.css';

export default function Sidebar(){

    const { user } = useContext(AuthContext);

    console.log(user);

    return(
        <div className="sidebar">
          <div>
            <img src={user !== null && user.avatarUrl !== null ? user.avatarUrl : avatar} alt="Foto do usuario" />
          </div>
    
          <Link to="/dashboard">
            <FiHome color="#FFF" size={24} />
            Chamados
          </Link>
    
          <Link to="/customers">
            <FiUser color="#FFF" size={24} />
            Clientes
          </Link>
    
          <Link to="/profile">
            <FiSettings color="#FFF" size={24} />
            Perfil
          </Link>
        </div>
      )
}