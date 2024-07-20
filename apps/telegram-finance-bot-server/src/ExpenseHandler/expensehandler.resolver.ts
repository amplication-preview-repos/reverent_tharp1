import * as graphql from "@nestjs/graphql";
import { ExpenseHandlerService } from "./expensehandler.service";

export class ExpenseHandlerResolver {
  constructor(protected readonly service: ExpenseHandlerService) {}

  @graphql.Mutation(() => String)
  async RecordExpense(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RecordExpense(args);
  }

  @graphql.Query(() => String)
  async RetrieveExpenses(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RetrieveExpenses(args);
  }
}
