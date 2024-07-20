import * as graphql from "@nestjs/graphql";
import { FinanceRepositoryService } from "./financerepository.service";

export class FinanceRepositoryResolver {
  constructor(protected readonly service: FinanceRepositoryService) {}
}
