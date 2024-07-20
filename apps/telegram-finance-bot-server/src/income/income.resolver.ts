import * as graphql from "@nestjs/graphql";
import { IncomeResolverBase } from "./base/income.resolver.base";
import { Income } from "./base/Income";
import { IncomeService } from "./income.service";

@graphql.Resolver(() => Income)
export class IncomeResolver extends IncomeResolverBase {
  constructor(protected readonly service: IncomeService) {
    super(service);
  }
}
