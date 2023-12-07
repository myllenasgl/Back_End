//import do modelo de empresa criado  na camada models 
import {cliente} from "../models/cliente.js"

/*
*/

class ClienteController {

  static async listarCliente(req, res){
    try{
      const listaCliente = await cliente.find({});
      res.status(200).json(listaCliente);
    }catch(erro){
      res.status(500).json({message: `Erro ao listar Cliente - ${erro.message}`});
    
    }
    } 
x

    static async listarClientePorId(req, res){
      try{
         
        const id =  req.params.id;
        const ClienteEncontrada = await cliente.findById({id});
        res.status(200).json(ClienteEncontrada);
      }catch(erro){
        res.status(500).json({message: `Erro ao lista Cliente - ${erro.message}`});
      
      }
      } 
    
    static async cadastrarCliente(req,res){
        try{
         
            const clienteNova = await cliente.create(req.body);
            res.status(201).send({message: 'Cliente cadastrada com sucesso!', Cliente: ClienteNova});
        }
        catch(erro){
            res.status(500).json({error:`${erro.message} -falha ao cadatrar Cliente`, });
        }
    }

      static async atualizarCliente(req, res){
        try{
         
          const id =  req.params.id;
          await cliente.findByIdAndUpdate(id, req.body);
          res.status(200).json({message: `Lista de clienteS atualizada com sucesso!`});
        }catch(erro){
          res.status(500).json({message: `Erro ao listar Clientes - ${erro.message}`});
        
        }
        } 

          // deletar vagas 
      static async excluirCliente(req, res){
        try{
          
          const id =  req.params.id;
          await cliente.findByIdAndDelete(id, req.body);
          res.status(200).json({message: `Cliente excluida com sucesso!`});
        }catch(erro){
          res.status(500).json({message: `Erro ao excluir Cliente - ${erro.message}`});
        
        }
        } 
}


export default ClienteController;