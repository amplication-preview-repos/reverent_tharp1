import { User } from "../user/User";

export type Expense = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  description: string | null;
  date: Date | null;
  user?: User | null;
};
