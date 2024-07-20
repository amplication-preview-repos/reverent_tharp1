import { User } from "../user/User";

export type Income = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  amount: number | null;
  date: Date | null;
  user?: User | null;
};
