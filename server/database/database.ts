import mongoose = require('mongoose');

export default function () {
    mongoose.connect('mongodb+srv://mern:mern@cluster0-z3oa3.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true,
        useCreateIndex: true
    })
        .then(() => {console.log("La connexion à la base de donnée Mongo à été établie !")})
        .catch((err) => {console.error("Erreur connexion Mongo ==> ", err)});
}