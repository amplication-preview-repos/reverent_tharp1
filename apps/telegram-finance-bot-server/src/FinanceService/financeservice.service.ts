import { Injectable } from "@nestjs/common";

@Injectable()
export class FinanceServiceService {
  constructor() {}
  async ProcessFinanceData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
