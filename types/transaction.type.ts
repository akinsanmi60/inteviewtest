export type ICurrency = "USD" | "NGN" | "EUR"
export type ITransactionType = "income" | "expenses"
export type IAccountName = "Savings Account" | "Credit Card" | "Checking Account"

export type ITransaction = {
  id: string
  date: string
  amount: number
  currency: ICurrency
  type: ITransactionType
  category: string
  accountName: IAccountName
}
