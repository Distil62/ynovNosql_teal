import { Schema, model } from "mongoose";

const quarter = model('quarters', new Schema({
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
        coordinates: [[Number]]
    }
}, {
    typeKey: "$type"
}));

quarter.createIndexes();

export default quarter;