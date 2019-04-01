import { Schema, model } from "mongoose";

const velov = model('velov', new Schema({
    type: String,
    properties: {
        number: Number,
        name: String,
        address: String,
        address2: String,
        commune: String,
        nmarrond: Number,
        bonus: String,
        pole: String,
        lat: Number,
        lng: Number,
        bike_stands: Number,
        status: String,
        available_bike_stands: Number,
        available_bikes: Number,
        availabilitycode: Number,
        availability: String,
        banking: Number,
        gid: Number,
        last_update: String,
        last_update_fme: String,
        code_insee: String,
        langue: String,
        etat: String,
        nature: String,
        titre: String,
        description: String,
    },
    geometry: {
        type: String,
        coordinates: [Number]
    }
}, {
    typeKey: '$type'
}).index({
    geometry: "2dsphere"
}));

velov.createIndexes().then((err: any) => {if (err) console.error("Erreur pendant la création des indexes de Velov ==>", err)});

export default velov;