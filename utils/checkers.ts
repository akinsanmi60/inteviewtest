import { ITransaction } from "../types/transaction.type"
import { handleResponse } from "./handleResponse"
import { accountNameType, currencyFormat, typeFormat } from "./helper"
import { Response } from "express"

export const checkValidation = async (
  {
    accountName,
    currency,
    type,
  }: Pick<ITransaction, "accountName" | "currency" | "type">,
  res: Response
) => {
  if (!accountNameType.includes(accountName)) {
    return handleResponse({
      res,
      status: 400,
      message: "Wrong AccountName submitted",
    })
  }
  if (!currencyFormat.includes(currency)) {
    return handleResponse({
      res,
      status: 400,
      message: "Wrong currency submitted",
    })
  }
  if (!typeFormat.includes(type)) {
    return handleResponse({
      res,
      status: 400,
      message: "Wrong transaction type submitted",
    })
  }
}
