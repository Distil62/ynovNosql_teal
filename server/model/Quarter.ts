import { model, Schema } from "mongoose";

const quarter = model('quartier', new Schema({
    type: String,
    features: {
        nom: String,
        theme: String,
        soustheme: String,
        identifiant: String,
        idexterne: String,
        siret: String,
        datecreation: String,
        gid: String,
    },
    geometry: {
        type: String,
        coordinates: [[String]]
    }
}, {
    typeKey: "$type",
    collection: 'quartier'
}));

quarter.createIndexes();

export default quarter;