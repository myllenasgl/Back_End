import mongoose from "mongoose";

const quantidadeSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    doce:{type: String, required: true},
    quantidade:{type: String}
}, {versionKey:false}
);

const quantidade = mongoose.model("quantidade", quantidadeSchema);

export default quantidade;