import { Router } from "express"
import { editTransaction, getAllTransaction, postTransaction } from "./controller"

const router = Router()

router.get("/get-all-transaction", async (req, res) => {
  /* 
      #swagger.tag = ['Transaction']
      #swagger.responses[200] = {
          schema: {
          message: "Transaction is successfully fetched",
          data: {
          success: true,
          transaction: [{}]
          }
          }
      }
      
      */
  await getAllTransaction(req, res)
})

router.post("/create-transaction", async (req, res) => {
  /* 
    #swagger.tag = ['Transaction']
    #swagger.summary = 'Create Transaction'
    #swagger.description = 'Create Transaction'
    #swagger.methods = ['POST']
    #swagger.parameters['Request Body'] = {
        in: 'body',
        description: 'Transaction object',
        required: true,
        schema: {
        $ref: '#/definitions/PostTransactionModel'
        }
    }
    #swagger.responses[201] = {
        schema: {
        message: "Transaction is successfully created",
        }
    }
    
    */
  await postTransaction(req, res)
})

router.put("/modify-transaction/:id", async (req, res) => {
  /* 
    #swagger.tag = ['Transaction']
    #swagger.summary = 'Create Transaction'
    #swagger.description = 'Create Transaction'
    #swagger.methods = ['PUT']
    #swagger.parameters['id'] = {
        in: 'path',
        description: 'Transaction id',
        required: true,
    }
    #swagger.parameters['Request Body'] = {
        in: 'body',
        description: 'Transaction object',
        required: true,
        schema: {
        $ref: '#/definitions/PostTransactionModel'
        }
    }
    #swagger.responses[201] = {
        schema: {
        message: "Transaction is successfully created",
        }
    }
    
    */
  await editTransaction(req, res)
})

export default router
