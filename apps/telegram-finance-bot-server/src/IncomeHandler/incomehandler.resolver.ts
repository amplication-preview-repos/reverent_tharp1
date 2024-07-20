import * as graphql from "@nestjs/graphql";
import { IncomeHandlerService } from "./incomehandler.service";

export class IncomeHandlerResolver {
  constructor(protected readonly service: IncomeHandlerService) {}

  @graphql.Mutation(() => String)
  async RecordIncome(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RecordIncome(args);
  }

  @graphql.Query(() => String)
  async RetrieveIncomes(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RetrieveIncomes(args);
  }
}
