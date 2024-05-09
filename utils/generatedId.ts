import { ITransaction } from "../types/transaction.type"

export const generatedId = (transaction: ITransaction[]) => {
  const lastTransaction = transaction[transaction.length - 1]

  const lastId = parseInt(lastTransaction.id.slice(2))

  const newId = "tx" + (lastId + 1)

  return newId
}
