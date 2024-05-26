import * as express from "express"
import {addPessoa, deletePessoa, getPessoa, getPessoas, updatePessoa} from "../controllers/pessoa"

const routerPessoa = express.Router()

routerPessoa.get("/pessoas", getPessoas)
routerPessoa.get("/pessoas/:id", getPessoa)
routerPessoa.put("/pessoas/:id", updatePessoa)
routerPessoa.post("/pessoas", addPessoa)
routerPessoa.delete("/pessoas/:id", deletePessoa)

export default routerPessoa