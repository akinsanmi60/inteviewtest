import { Response } from "express"
import { ITransaction } from "./transaction.type"

export type IResType = {
  res: Response
  status: number
  message: string
  data?: Record<string, string | number | boolean| ITransaction | ITransaction[]>
}
