import { useContext, useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';

import { FiDownload, FiSettings, FiUpload } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';
import {AuthContext} from '../../contexts/auth';

import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../../services/firebaseConnection';
import { toast } from 'react-toastify';

import './profile.css';

export default function Profile(){

  const { user, storageUser, setUser, logout } = useContext(AuthContext);

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [nome, setNome] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);
  const [avatarImage, setAvatarImage] = useState(null);



  function handleFile(e){
    if(e.target.files[0]){
      const image = e.target.files[0];

      if(image.type === 'image/jpeg' || image.type === 'image/png'){
        setAvatarImage(image);
        setAvatarUrl(URL.createObjectURL(image));
      }else{
        alert('Envie uma imagem PNG ou JPEG');
        setAvatarImage(null);
        return;
      }
    }
  }

  async function handleUpload(){
    const currentUid = user.uid;

    const uploadRef = ref(storage, `images/${currentUid}/${avatarImage.name}`);
    const uploadTask = uploadBytes(uploadRef, avatarImage)
                        .then( (snapshot) => {
                              getDownloadURL(snapshot.ref)
                              .then( async (downLoadUrl) => {
                                let urlFoto = downLoadUrl;

                                const docRef = doc(db, 'users', user.uid);
                                await updateDoc(docRef, {
                                  avatarUrl: urlFoto,
                                  nome: nome
                                })
                                .then( () => {
                                  let data = {
                                    ...user,
                                    nome: nome,
                                    avatarUrl: urlFoto
                                  }
                          
                                  setUser(data);
                                  storageUser(data);
                                  toast.success('Dados atualizados com sucesso!');
                                })
                                .catch( () => {
                                  toast.error('Ocorreu um erro!');
                                });
                              });
                        })
                        .catch( () => {

                        });
  }

  async function hadleSubmit(e){
    e.preventDefault();
    
    if(avatarImage === null && nome !== ''){
      const docRef = doc(db, 'users', user.uid);
      await updateDoc(docRef, {
        nome: nome
      })
      .then( () => {
        let data = {
          ...user,
          nome: nome
        }

        setUser(data);
        storageUser(data);
        toast.success('Dados atualizados com sucesso!');
      })
      .catch( () => {
        toast.error('Ocorreu um erro!');
      });
    }else if(nome !== '' && avatarImage !== null){
      handleUpload();
    }
  }

  return(
    <div>
      <Header/>

      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={25} />
        </Title>

       <div className="container">

        <form className="form-profile" onSubmit={hadleSubmit}>
          <label className="label-avatar">
            <span>
              <FiUpload 
                color="#FFF" 
                size={25} 
              />
            </span>

            <input 
              type="file" 
              accept="image/*"
              onClick={ handleFile }
              /> 
              <br/>
            
            {avatarUrl === null ? (
              <img src={avatar} alt="Foto de perfil" width={250} height={250} />
            ) : (
              <img src={avatarUrl} alt="Foto de perfil" width={250} height={250} />
            )}

          </label>

          <label>Nome</label>
          <input 
            type="text" 
            value={nome}
            onChange={ (e) => setNome(e.target.value) }
            placeholder="Digite seu nome"
          />

          <label>Email</label>
          <input 
            type="text" 
            value={email}
            placeholder="Digite seu email" 
            disabled={true} 
          />
          
          <button type="submit">Salvar</button>
        </form>

       </div>

       <div className="container">
         <button 
            onClick={ () => logout() }
            className="logout-btn"
         >Sair</button>
       </div>

      </div>

    </div>
  )
}