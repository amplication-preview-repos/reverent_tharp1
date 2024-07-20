import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ExpenseHandlerService } from "./expensehandler.service";

@swagger.ApiTags("expenseHandlers")
@common.Controller("expenseHandlers")
export class ExpenseHandlerController {
  constructor(protected readonly service: ExpenseHandlerService) {}

  @common.Post("record-expense")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RecordExpense(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RecordExpense(body);
      }

  @common.Get("retrieve-expenses")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveExpenses(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RetrieveExpenses(body);
      }
}
