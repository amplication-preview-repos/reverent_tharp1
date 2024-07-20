import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncomeUpdateInput = {
  description?: string | null;
  amount?: number | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
};
