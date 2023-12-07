import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String},
    telefone:{type: String},
}, {versionKey:false}
);

const cliente = mongoose.model("cliente", clienteSchema);

export default cliente;