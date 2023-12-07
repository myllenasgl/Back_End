import express from 'express'; 
import clienteController from '../controllers/clienteController.js';



const routes = express.Router();

 
routes.get("/cliente", clienteController.listarCliente);
routes.get("/cliente/:id", clienteController.listarClientePorId);
routes.post("/cliente", clienteController.cadastrarCliente);
routes.put("/cliente/:id", clienteController.atualizarCliente);
routes.delete("/cliente/:id", clienteController.excluirCliente);

export default routes;