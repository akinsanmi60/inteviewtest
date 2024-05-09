import * as fs from "fs"
import { ITransaction } from "../types/transaction.type"

export const readTransaction =  () => {
  const transactions = fs.readFileSync("./public/transaction.json", "utf-8")
  return JSON.parse(transactions) as ITransaction[]
}

export const modifyTransaction = (updatedTransaction: ITransaction[]) => {
  fs.writeFileSync(
    "./public/transaction.json",
    JSON.stringify(updatedTransaction, null, 2)
  )
}
