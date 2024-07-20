import { InputJsonValue } from "../../types";
import { ExpenseCreateNestedManyWithoutUsersInput } from "./ExpenseCreateNestedManyWithoutUsersInput";
import { IncomeCreateNestedManyWithoutUsersInput } from "./IncomeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  expenses?: ExpenseCreateNestedManyWithoutUsersInput;
  incomes?: IncomeCreateNestedManyWithoutUsersInput;
};
