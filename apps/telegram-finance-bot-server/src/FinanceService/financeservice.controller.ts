import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FinanceServiceService } from "./financeservice.service";

@swagger.ApiTags("financeServices")
@common.Controller("financeServices")
export class FinanceServiceController {
  constructor(protected readonly service: FinanceServiceService) {}

  @common.Post("process-finance-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessFinanceData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessFinanceData(body);
      }
}
