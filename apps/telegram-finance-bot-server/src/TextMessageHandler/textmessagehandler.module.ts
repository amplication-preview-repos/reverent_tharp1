import { Module } from "@nestjs/common";
import { TextMessageHandlerService } from "./textmessagehandler.service";
import { TextMessageHandlerController } from "./textmessagehandler.controller";
import { TextMessageHandlerResolver } from "./textmessagehandler.resolver";

@Module({
  controllers: [TextMessageHandlerController],
  providers: [TextMessageHandlerService, TextMessageHandlerResolver],
  exports: [TextMessageHandlerService],
})
export class TextMessageHandlerModule {}
