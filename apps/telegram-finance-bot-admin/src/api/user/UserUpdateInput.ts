import { InputJsonValue } from "../../types";
import { ExpenseUpdateManyWithoutUsersInput } from "./ExpenseUpdateManyWithoutUsersInput";
import { IncomeUpdateManyWithoutUsersInput } from "./IncomeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  expenses?: ExpenseUpdateManyWithoutUsersInput;
  incomes?: IncomeUpdateManyWithoutUsersInput;
};
