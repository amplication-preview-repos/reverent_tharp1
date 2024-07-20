import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { IncomeListRelationFilter } from "../income/IncomeListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  expenses?: ExpenseListRelationFilter;
  incomes?: IncomeListRelationFilter;
};
