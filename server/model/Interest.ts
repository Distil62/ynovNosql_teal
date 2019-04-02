import { model, Schema } from "mongoose";

const interest = model('pointCle', new Schema({
    type: String,
    properties: {
        id: String,
        id_sitra1: String,
        type: String,
        type_detail: String,
        nom: String,
        adresse: String,
        codepostal: String,
        commune: String,
        telephone: String,
        fax: String,
        telephonefax: String,
        email: String,
        siteweb: String,
        facebook: String,
        classement: String,
        ouverture: String,
        tarifsenclair: String,
        tarifsmin: String,
        tarifsmax: String,
        producteur: String,
        gid: String,
        date_creation: String,
        last_update: String,
        last_update_fme: String,
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

export default interest;
