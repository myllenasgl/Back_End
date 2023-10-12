import express from "express";
import connectDataBase from "./config/dbConnect.js";
import docinho from "./models/docinho.js";

const conexao = await connectDataBase();

conexao.on("error", (erro)=>{
  console.log("Error of connection ", erro);
});

conexao.once("open", ()=>{
  console.log("Connection with the bank carried out as expected.")
});

const app = express();
app.use(express.json())
/*const docinho = [
    {id: 1, "doce": "Brigadeiro"},
    {id: 2, "doce": "Bem-casado"},
    {id: 3, "doce": "Beijinho"},
	  {id: 4, "doce": "Ninho com Nutella"},
	  {id: 5, "doce": "Surpresa de Uva"},
	  {id: 6, "doce": "Paçoquinha"},
	
  ]
*/
  app.get('/', (req, res) => {
    res.status(200).send('The start of felicity ');
  }) 
  
  app.get('/docinho', async(req, res)=> {
    const listadocinho = await docinho.find({});
      res.status(200).json(listadocinho);
  })

 /* app.post('/docinho', (req, res) => {
    docinho.push(req.body);
    res.status(201).send('Pedido realizado com Sucesso!')
  })

  app.put('/docinho/:id', (req, res) => {
    let index = buscaDocinho(req.params.id);
    docinho[index].doce = req.body.doce;
    res.json(docinho);
  })
  
  app.get('/docinho/:id', (req, res)=>{
    const index = buscaDocinho(req.params.id);
    res.status(201).json(docinho[index]);

  })

  app.delete('/docinho/:id',(req, res)=>{
    const index = buscaDocinho(req.params.id);
    if (index !== -1) {
      docinho.splice(index, 1); // Remove 1 elemento a partir da posição index
      res.status(204).send(); // 204 significa "No Content" (sucesso, mas sem conteúdo)
    } else {
      res.status(404).send('Pedido não encontrado'); // Retorna um erro se o ID não for encontrado
    }
  })
  

  function buscaDocinho(id) {
    return docinho.findIndex(docinho => docinho.id == id)
  }*/
  export default app 

      

