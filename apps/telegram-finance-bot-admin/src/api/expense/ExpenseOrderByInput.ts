import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  description?: SortOrder;
  date?: SortOrder;
  userId?: SortOrder;
};
