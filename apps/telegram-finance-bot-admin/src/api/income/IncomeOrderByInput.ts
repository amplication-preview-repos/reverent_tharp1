import { SortOrder } from "../../util/SortOrder";

export type IncomeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  amount?: SortOrder;
  date?: SortOrder;
  userId?: SortOrder;
};
