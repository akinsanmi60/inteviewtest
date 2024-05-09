import { IResType } from "../types/res.type"

export const handleResponse = ({ res, status, message, data }: IResType) => {
  res.status(status).json({ message, data })
}
