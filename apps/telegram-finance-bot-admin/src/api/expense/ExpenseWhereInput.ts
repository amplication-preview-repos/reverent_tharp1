import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
