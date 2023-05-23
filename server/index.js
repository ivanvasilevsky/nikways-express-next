import express from "express"
import fileUpload from "express-fileupload"
import cors from 'cors'

import 'dotenv/config.js'

import sequelize from "./db.js"
import routes from "./routes.js"


const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use(fileUpload({}))

app.use('/api', routes)


const appStart = async () => {
  await sequelize.authenticate()
  await sequelize.sync()
  app.listen(PORT, () => console.log(`Server start on ${PORT} port`))
}

appStart()