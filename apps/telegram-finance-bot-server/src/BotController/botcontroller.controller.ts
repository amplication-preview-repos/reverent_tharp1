import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BotControllerService } from "./botcontroller.service";

@swagger.ApiTags("botControllers")
@common.Controller("botControllers")
export class BotControllerController {
  constructor(protected readonly service: BotControllerService) {}

  @common.Post("receive-message")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReceiveMessage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ReceiveMessage(body);
      }
}
