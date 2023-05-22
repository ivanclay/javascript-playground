import { useState, useEffect } from 'react'
import './admin.css'

import { auth, db } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'

import { 
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
  doc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'

export default function Admin(){
  const [tarefaInput, setTarefaInput] = useState('')
  const [user, setUser] = useState({})
  const [tarefas, setTarefas] = useState([])
  const [edit, setEdit] = useState({})

  useEffect(() => {
    async function loadTarefas(){
      const userDetail = localStorage.getItem("@detailUser")
      setUser(JSON.parse(userDetail))

      if(userDetail){
        const user = JSON.parse(userDetail);
        const tarefasRef = collection(db, 'tarefas');
        const q = query(tarefasRef, orderBy('created', 'desc'), where('userUid', "==", user.uid));
        const sub = onSnapshot(q, (snapshot) => {
          let lista = [];
          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              tarefa: doc.data().tarefa,
              userUid: doc.data().userUid
            });
          });

          setTarefas(lista);
        });
      }
    }

    loadTarefas();
  }, [])

  async function handleRegister(e){
    e.preventDefault();

    if(tarefaInput === ''){
      alert("Digite sua tarefa...")
      return;
    }

    if(edit?.id){
      handleUpdateTarefa();
      return;
    }

    await addDoc(collection(db, "tarefas"), {
      tarefa: tarefaInput,
      created: new Date(),
      userUid: user?.uid
    })
    .then(() => {
      console.log("TAREFA REGISTRADA")
      setTarefaInput('')
    })
    .catch((error) => {
      console.log("ERRO AO REGISTRAR " + error)
    })


  }

  async function handleUpdateTarefa(){
    const docRef = doc(db, 'tarefas', edit?.id);
    await updateDoc(docRef, {
      tarefa: tarefaInput
    })
    .then(() => {
      setTarefaInput('');
      setEdit({});
    })
    .catch(() => { 
      console.log('ERRO') 
      setTarefaInput('');
      setEdit({});
  });
    
  }

  async function handleLogout(){
    await signOut(auth);
  }

  async function deletarTarefa(id){
    const docRef = doc(db, 'tarefas', id);
    await deleteDoc(docRef)
          .then()
          .catch((error) => { console.log(error) });
  }

  async function editarTarefa(item){
    setTarefaInput(item.tarefa);
    setEdit(item);
  }

  return(
    <div className="admin-container">
      
      <h3>Adicionar tarefas</h3>
      <form className="form" onSubmit={handleRegister}>
        <textarea
          placeholder="Digite sua tarefa..."
          value={tarefaInput}
          onChange={(e) => setTarefaInput(e.target.value) }
        />

        {
                Object.keys(edit).length > 0 ? (
                  <button className="btn-register" type="submit">Atualizar tarefa</button>
                ) : (
                  <button className="btn-register" type="submit">Registrar tarefa</button>
                )  
        }
      </form>

      <h3>Minhas tarefas</h3>
      {
        tarefas.map((item) => (
          <article key={item.id} className="list">
          <p>{item.tarefa}</p>

          <div>
            <button onClick={() => editarTarefa(item)}>Editar</button>
            <button onClick={() => deletarTarefa(item.id)} className="btn-delete">Concluir</button>
          </div>
        </article>
        ))
      }


      <button className="btn-logout" onClick={handleLogout}>Sair</button>

    </div>
  )
}