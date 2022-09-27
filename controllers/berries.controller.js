const firebase = require("../config/firebase.config");

function fetchAll(req,res){
    const db = firebase.getDatabase(firebase.firebaseApp)
    const referenceCount = firebase.ref(db);
    firebase.get(firebase.child(referenceCount, '/food/berries')).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({berries:data})
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(403).send({});
        }
    }).catch((error) => {
        console.error(error);
    });
}


function  fetchOne(req,res){
    const db = firebase.getDatabase(firebase.firebaseApp)
    const referenceCount = firebase.ref(db);
    firebase.get(firebase.child(referenceCount, '/food/berries')).then((snapshot) => {
        if (snapshot.exists()) {
            let data = snapshot.val();
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({berry:data[req.params.id]})
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(403).send({});
        }
    }).catch((error) => {
        console.error(error);
    });
}



module.exports= {fetchAll, fetchOne}