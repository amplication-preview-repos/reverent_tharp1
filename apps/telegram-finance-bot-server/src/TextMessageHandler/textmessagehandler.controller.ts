import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TextMessageHandlerService } from "./textmessagehandler.service";

@swagger.ApiTags("textMessageHandlers")
@common.Controller("textMessageHandlers")
export class TextMessageHandlerController {
  constructor(protected readonly service: TextMessageHandlerService) {}

  @common.Post("handle-text-message")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleTextMessage(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.HandleTextMessage(body);
      }
}
