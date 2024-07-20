import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseCreateInput = {
  amount?: number | null;
  description?: string | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
};
