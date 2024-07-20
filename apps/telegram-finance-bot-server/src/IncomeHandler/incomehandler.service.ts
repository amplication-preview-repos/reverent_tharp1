import { Injectable } from "@nestjs/common";

@Injectable()
export class IncomeHandlerService {
  constructor() {}
  async RecordIncome(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RetrieveIncomes(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
