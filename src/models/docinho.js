import mongoose from "mongoose";

const docinhoSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    doce:{type: String, required: true},
    nome:{type: String},
}, {versionKey:false}
);

const docinho = mongoose.model("docinho", docinhoSchema);

export default docinho;