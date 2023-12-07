import express from "express";
import docinhosController from "../controllers/docinhosController";


const routes = express.Router();

routes.get("/docinho", docinhosController.listaDocinhos);
routes.get("/docinho/:id", docinhosController.listaDocinhosPorId);
routes.post("/docinho", docinhosController.cadastrardocinhos);
routes.put("/docinho/:id", docinhosController.atualizardocinhos);
routes.delete('/docinho/:id', docinhosController.excluirdocinhos);

export default routes;

