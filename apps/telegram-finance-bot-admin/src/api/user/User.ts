import { JsonValue } from "type-fest";
import { Expense } from "../expense/Expense";
import { Income } from "../income/Income";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  expenses?: Array<Expense>;
  incomes?: Array<Income>;
};
