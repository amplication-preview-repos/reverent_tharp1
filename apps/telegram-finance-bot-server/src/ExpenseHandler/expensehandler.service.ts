import { Injectable } from "@nestjs/common";

@Injectable()
export class ExpenseHandlerService {
  constructor() {}
  async RecordExpense(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RetrieveExpenses(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
