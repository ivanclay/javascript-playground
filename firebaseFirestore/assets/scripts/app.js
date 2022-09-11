

  let db = firebase.firestore();
  let collectionTurmaA = db.collection('turmaA');
//   //LER TODOS OS DADOS DE UMA COLECAO

//   db.collection("turmaA").get()
//                          .then((snapshot) => {
//                             snapshot.forEach((doc) => {
//                                 console.log(doc.data());
//                             });   
//                          });

//   collectionTurmaA.get()
//                          .then((snapshot) => {
//                             snapshot.forEach((doc) => {
//                                 console.log(doc.data());
//                             });   
//                          });

//   collectionTurmaA.onSnapshot((snapshot) => {
//     snapshot.forEach((doc) => {
//         console.log(doc.data());
//     });   
//  });
                         

// //LER DOCUMENTO PELO ID
// let docRef = db.collection('turmaA').doc('bPit7QzMSUoiKb3IUnsr');
// docRef.get()
// .then((doc) => {
//     console.log(doc.data());
// })

// let docRef = collectionTurmaA.doc('MARIANA');
// docRef.onSnapshot((doc) => {
//     console.log(doc.data());
// })

// //BUSCAR POR FILTRO
// db.collection('turmaA')
//   .where("nome", ">", "I")
//   .where("nome", "<", "Kelly")
//   .get()
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//         let aluno = doc.data();
//         console.log(aluno.nome, aluno.sobrenome);
//     });
//   })


// ADICIONAR UM DOCUMENTO A COLLECTION ID AUTO
// collectionTurmaA.add({
//     nome: "Marcos",
//     sobrenome: "Santos",
//     notas: {nota1: 9.6, nota2: 7.5}
// }).then(doc => {
//     console.log("Documento inserido com sucesso", doc.id);
// }).catch(err => {
//     console.log(err);
// });

// // ADICIONAR UM DOCUMENTO A COLLECTION ID PREDEFINIDO
// // ATUALIZAR/MODIFICAR TODO O DOCUMENTO A COLLECTION ID PREDEFINIDO
// collectionTurmaA.doc("MARIANA").set({
//     nome: "Mariana",
//     sobrenome: "Santos",
//     notas: {nota1: 10, nota2: 7.5}
// }).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// // ATUALIZAR/MODIFICAR PARCIALMENTE O DOCUMENTO A COLLECTION ID PREDEFINIDO
// collectionTurmaA.doc("MARIANA").set({
//     sobrenome: "Oliveira",
// }, {merge: true}).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// UPDATE O DOCUMENTO A COLLECTION ID PREDEFINIDO
// collectionTurmaA.doc("MARIANA").update({
//     sobrenome: "Oliveira Tito",
// }).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// collectionTurmaA.doc("MARIANA").update({
//     "notas.nota1": 9.5
// }).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// collectionTurmaA.doc("MARIANA").update({
//     cidades: firebase.firestore.FieldValue.arrayUnion("Brasilia")
// }).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// collectionTurmaA.doc("MARIANA").update({
//     cidades: firebase.firestore.FieldValue.arrayRemove("Brasilia")
// }).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// collectionTurmaA.doc("MARIANA").update({
//     faltas: firebase.firestore.FieldValue.increment(3)
// }).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// collectionTurmaA.doc("MARIANA").update({
//     faltas: firebase.firestore.FieldValue.increment(-3) //decrement
// }).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// // EXCLUIR CAMPOS
// collectionTurmaA.doc("MARIANA").update({
//     cidades: firebase.firestore.FieldValue.delete()
// }).then(doc => {
//     console.log("Documento inserido com sucesso");
// }).catch(err => {
//     console.log(err);
// });

// // EXCLUIR DOCUMENTO
// collectionTurmaA.doc("MARIANA").delete().then(doc => {
//     console.log("Documento excluído com sucesso");
// }).catch(err => {
//     console.log(err);
// });