import { Router } from "express"
import { baseUrlTransaction } from "../utils/paths"
import transactionRoutes from "../modules/transactions/routes"

const router = Router()

router.use('/transaction', transactionRoutes)

export default router
