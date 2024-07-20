import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IncomeService } from "./income.service";
import { IncomeControllerBase } from "./base/income.controller.base";

@swagger.ApiTags("incomes")
@common.Controller("incomes")
export class IncomeController extends IncomeControllerBase {
  constructor(protected readonly service: IncomeService) {
    super(service);
  }
}
