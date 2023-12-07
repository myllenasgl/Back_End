import docinho from "../models/docinho.js";


class DocinhosController{

   static async listaDocinhos(req, res){
    try{
        const  listaDocinhos= await docinho.find({});
        res.status(200).json(listaDocinhos);
    }
    catch(erro){
      res.status(500).json({message:`Erro ao listar docinhos- ${erro.message}`})
    }
   }
 
   static async listaDocinhosPorId(req, res){
    try{
        
        const id = req.params.id;
       
        const docinhosEncontrado = await docinho.findById(id);
        res.status(200).json(docinhosEncontrado);
    }catch(erro){
        res.status(500).json({message:`erro ao listar pedido - ${erro.message}`});
    }
   }

   static async atualizardocinhos(req, res){
    try{
     
      const id = req.params.id
      await docinho.findByIdAndUpdate(id, req.body)
      res.status(200).json({message:`Pedido atualizado com sucesso!`})

    }catch(erro){
      res.status(500).json({message:`erro ao atualizar pedido ${erro.message}`})
    }
   }


   
   static async cadastrardocinhos(req, res){

   
   try{
      
       const docinhosNovo = await docinho.create(req.body);
       
       res.status(201).send({message:'Pedido cadastrado com sucesso!', docinhos: docinhosNovo});
   }
   catch(erro){
    
     res.status(500).json({error:`${erro.message}-falha ao cadastrar pedido`});
   }
 }
 static async excluirdocinhos(req, res) {
  try {
  
    const id = req.params.id;
  
    await docinho.findByIdAndDelete(id);
    res.status(200).json({ message: `Pedido excluído com sucesso!` });
  } catch (erro) {
    res.status(500).json({ message: `Erro ao excluir pedido - ${erro.message}` });
  }
}


}

export default DocinhosController;