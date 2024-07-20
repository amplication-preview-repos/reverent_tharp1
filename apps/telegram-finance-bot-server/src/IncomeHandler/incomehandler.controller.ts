import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { IncomeHandlerService } from "./incomehandler.service";

@swagger.ApiTags("incomeHandlers")
@common.Controller("incomeHandlers")
export class IncomeHandlerController {
  constructor(protected readonly service: IncomeHandlerService) {}

  @common.Post("record-income")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RecordIncome(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RecordIncome(body);
      }

  @common.Get("retrieve-incomes")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveIncomes(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RetrieveIncomes(body);
      }
}
