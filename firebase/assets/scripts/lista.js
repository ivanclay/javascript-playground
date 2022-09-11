let db = firebase.firestore();
let collection_lista = db.collection('lista');

function loadData(){
    collection_lista.get().then(snapshot => {
        snapshot.forEach(item => {
            console.log(item.data());
        });
    }).catch(error => {
        console.log(error);
    });
}

function writeData(){
    collection_lista.add({
        item: "iogurte",
        price: Math.random()
    }).then(doc => {
        console.log(doc);
    })
    .catch(error => {
        console.log(error);
    });
}

//writeData();
loadData();
