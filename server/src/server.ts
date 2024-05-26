import express from "express"
import routerPessoa from "./routes/pessoa"
import {AppDataSource} from "./data-source"
import cors from "cors"
import routerUsuario from "./routes/usuario";
import routerLogin from "./routes/login";
import routerContato from "./routes/contato";

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!")
}).catch((err) => {
  console.error("Error during Data Source initialization:", err)
})

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

app.use("/", routerContato)
app.use("/", routerPessoa)
app.use("/", routerUsuario)
app.use("/", routerLogin)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
