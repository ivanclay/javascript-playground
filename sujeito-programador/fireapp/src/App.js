import { db, auth } from './firebaseConnection';
import './app.css';
import { useEffect, useState } from 'react';
import { 
  doc, 
  // setDoc, 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc,
  onSnapshot
 } from 'firebase/firestore';

 import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
  } from 'firebase/auth';

function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function checkLogin(){
      onAuthStateChanged(auth, (user) => {
        if(user){
          setUser(true);
          setUserDetail({
            uid: user.uid,
            email: user.email
          });
        }else{
          setUser(false);
          setUserDetail({});
        }
      })
    }

    checkLogin();
  },[]);

  useEffect(() => {
    
    async function loadPosts(){
      const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor
          });
        });
  
        setPosts(listaPost);
      });
    }

    loadPosts();

  }, []);

  async function logoutUsuario(){
    await signOut(auth)
    .then(() => {
      alert('logout realizado');
      setUser(false);
      setUserDetail({});
    })
    .catch(()=>{

    });
  }

  async function logarUsuario(){
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value) => {
      alert('logado');

      setUserDetail({
        uid: value.user.uid,
        email: value.user.email
      });

      setUser(true);

      setEmail('');
      setSenha('');
    })
    .catch((error) => {
      console.error(error);
    });
  }

  async function novoUsuario(){
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      setEmail('');
      setSenha('');
    })
    .catch((error) => {
      console.error(error);
    });
  }

  async function excluirPost(idPost){
    const postRef = doc(db, 'posts', idPost);
    await deleteDoc(postRef)
    .then(() => {
      buscarPosts();
    })
    .catch(() => {});
  }

  async function editarPost(){
    const postRef = doc(db, 'posts', idPost);
    await updateDoc(postRef, {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      setAutor('');
      setIdPost('');
      setTitulo('');
      buscarPosts();
    })
    .catch(() => {});
  }

  async function buscarPost(){
    const postRef = doc(db, 'posts', '12345');
    await getDoc(postRef)
    .then((snapshot) => { 
      setAutor(snapshot.data().autor);
      setTitulo(snapshot.data().titulo);
    })
    .catch((error) => { console.log(error)});
  }

  async function buscarPosts(){
    const postsRef = collection(db, 'posts');
    await getDocs(postsRef)
    .then((snapshot) => { 
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        });
      });

      setPosts(lista);
    })
    .catch((error) => { console.log(error)});
  }

  async function handleAdd(){
    //AUTO_ID
    await addDoc(collection(db, 'posts'), {
      titulo: titulo,
      autor: autor
    })
    .then(() => { 
      setAutor('');
      setTitulo('');
    })
    .catch((error) => { console.log(error)});

    //-----------------------------------------//
    //SETANDO ID MANUALMENTE
    // await setDoc(doc(db, 'posts', '12345'), {
    //   titulo: titulo,
    //   autor: autor
    // })
    // .then(() => { })
    // .catch((error) => { console.log(error)});
    
  }

  return (
    <div className="App">
      <h1>REACT FIREBASE</h1>

      {
        user && (
          <div>
            <strong>Seja bem vindo</strong>
            <br/>
            <span>{ userDetail.uid }</span> <br/>
            <span>{ userDetail.email }</span><br/>
            <button onClick={logoutUsuario}>Logout</button>
          </div>
          
        )
      }

      <div className='container'>
        <h2>Usuários</h2>
      <label>E-mail:</label>
         <input 
            type='email'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            placeholder='email' />

        <label>Senha:</label>
         <input 
            type='password'
            value={senha}
            onChange={ (e) => setSenha(e.target.value) }
            placeholder='senha' />
   
   <button onClick={novoUsuario}>Cadastrar</button>
   <button onClick={logarUsuario}>Login</button>
   
      </div>
<br/><br/>
      <div className='container'>
      <h2>Posts</h2>
      <label>ID:</label>
         <input 
            type='text'
            value={idPost}
            onChange={ (e) => setIdPost(e.target.value) }
            placeholder='ID do post' />
        
        <label>Título:</label>
        <textarea
         type="text"
         value={titulo}
         onChange={ (e) => setTitulo(e.target.value) }
         placeholder='Digite o título' />

         <label>Autor:</label>
         <input 
            type='text'
            value={autor}
            onChange={ (e) => setAutor(e.target.value) }
            placeholder='Autor do post' />

         <button onClick={handleAdd}>Cadastrar</button>
         <button onClick={buscarPost}>Buscar Post</button>
         <button onClick={editarPost}>Atualizar Post</button>

         <ul>
          {
            posts.map((post) => {
              return(
                <li key={post.id}>
                  <span>{post.autor} - {post.titulo} <strong>({post.id})</strong></span>
                  <button onClick={ () => excluirPost(post.id) }>Excluir</button>
                </li>
              )
            })
          }
         </ul>
      </div>
    </div>
  );
}

export default App;
