import * as graphql from "@nestjs/graphql";
import { FinanceServiceService } from "./financeservice.service";

export class FinanceServiceResolver {
  constructor(protected readonly service: FinanceServiceService) {}

  @graphql.Mutation(() => String)
  async ProcessFinanceData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessFinanceData(args);
  }
}
