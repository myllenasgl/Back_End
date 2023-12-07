import express from "express";
import docinho from "./docinhosRoutes.js"
import cliente from ".clienteRoutes.js";



const routes=(app)=>{
    app.route("/").get((req, res)=>res.status(200).send("Inicio da Felicidade"));

    app.use(express.json(), docinhoroutes, clienteroutes);
};

export default routes;