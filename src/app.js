import express from "express";
import connectDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";

const conexao = await connectDataBase();

conexao.on("error", (erro)=>{
  console.log("Error of connection ", erro);
});

conexao.once("open", ()=>{
  console.log("Connection with the bank carried out as expected.")
});

const app = express();
app.use(express.json());

app.use(cors({origin: "*"}));
routes(app);

  export default app 

      

