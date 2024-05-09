import { currencyFormat, typeFormat } from "./../../utils/helper"
import { Request, Response } from "express"
import transactionList from "../../transaction.json"
import {
  modifyTransaction,
  readTransaction,
} from "../../utils/transactionQuery"
import { handleResponse } from "../../utils/handleResponse"
import {
  IAccountName,
  ICurrency,
  ITransaction,
  ITransactionType,
} from "../../types/transaction.type"
import { generatedId } from "../../utils/generatedId"
import { accountNameType } from "../../utils/helper"
import { checkValidation } from "../../utils/checkers"

export const getAllTransaction = async (req: Request, res: Response) => {
  const transactionList = readTransaction()

  return handleResponse({
    res,
    status: 200,
    message: "All transactions fetched successfully",
    data: {
      status: true,
      transactionList: transactionList,
    },
  })
}

export const postTransaction = async (req: Request, res: Response) => {
  const { category, currency, type, accountName, amount } =
    req.body as Partial<ITransaction>

  if (!category || !currency || !type || !accountName || !amount) {
    return handleResponse({
      res,
      status: 400,
      message: "All fields are required",
    })
  }

 await checkValidation({accountName, currency, type}, res)

  let transactionList = readTransaction()
  const newId = generatedId(transactionList)

  const newTransaction: ITransaction = {
    id: newId,
    accountName: accountName,
    category: category,
    amount: amount,
    currency: currency,
    date: new Date().toISOString(),
    type: type,
  }

  transactionList.push(newTransaction)

  // it saves the new transactiknList in the json file
  modifyTransaction(transactionList)

  return handleResponse({
    res,
    status: 200,
    message: "Transaction added successfully",
    data: {
      newTransaction: newTransaction,
    },
  })
}

export const editTransaction = async (req: Request, res: Response) => {
  const { id } = req.params
  const { category, currency, type, accountName, amount } =
    req.body as Partial<ITransaction>

     if (!category || !currency || !type || !accountName || !amount) {
       return handleResponse({
         res,
         status: 400,
         message: "All fields are required",
       })
  }
  
 await checkValidation({ accountName, currency, type }, res)


  let transactionList = readTransaction()

  const checkIndex = transactionList.findIndex((trans) => trans.id === id)

  if (checkIndex === -1) {
    return handleResponse({
      res,
      status: 400,
      message: "Transaction not found",
      data: {
        success: false,
      },
    })
  }

  transactionList[checkIndex] = {
    id,
    accountName: accountName as IAccountName,
    category: category as string,
    amount: amount as number,
    currency: currency as ICurrency,
    date: new Date().toISOString(),
    type: type as ITransactionType,
  }

  // it saves the new transactiknList in the json file
  modifyTransaction(transactionList)

  return handleResponse({
    res,
    status: 200,
    message: "Transaction changed successfully",
    data: {
      success: true,
    },
  })
}
