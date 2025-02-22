import express from 'express'
import config from './config.js'
import productsRoutes from './routes/products.routes'
const app = express()

//setings
app.set('port', config.port)

//meddlewares

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(productsRoutes)
export default app