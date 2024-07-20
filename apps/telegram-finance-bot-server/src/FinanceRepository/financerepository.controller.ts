import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FinanceRepositoryService } from "./financerepository.service";

@swagger.ApiTags("financeRepositories")
@common.Controller("financeRepositories")
export class FinanceRepositoryController {
  constructor(protected readonly service: FinanceRepositoryService) {}
}
