import { db } from './firebaseConnection';
import './app.css';
import { useEffect, useState } from 'react';
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('');
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    buscarPosts();
  }, []);

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

      <div className='container'>
        
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
