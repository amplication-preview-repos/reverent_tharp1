import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncomeWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
