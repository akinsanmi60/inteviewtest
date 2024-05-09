import express from "express"
import dotenv from "dotenv"
import allRoutes from './routes/index'
import swaggerUi from 'swagger-ui-express'
import swaggerOutput from './swagger_output.json'


dotenv.config()
const port = process.env.PORT

const app = express()

app.use(express.json())


app.use(allRoutes)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerOutput))

app.get("/", (req, res) => {
  res.json('kf')
})

app.listen(port, () => {
  console.log(`server is running ${port}`)
})
 