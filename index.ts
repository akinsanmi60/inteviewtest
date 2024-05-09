import express from "express"
import dotenv from "dotenv"
import allRoutes from './routes/index'
import swaggerUi from 'swagger-ui-express'
import swaggerOutput from './swagger_output.json'

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css"


dotenv.config()
const port = process.env.PORT

const app = express()

app.use(express.json())


app.use(allRoutes)

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerOutput, { customCss: CSS_URL }))

app.get("/", (req, res) => {
  res.json('kf')
})

app.listen(port, () => {
  console.log(`server is running ${port}`)
})
 