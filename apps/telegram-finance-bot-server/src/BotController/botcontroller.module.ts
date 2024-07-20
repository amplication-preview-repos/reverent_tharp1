import { Module } from "@nestjs/common";
import { BotControllerService } from "./botcontroller.service";
import { BotControllerController } from "./botcontroller.controller";
import { BotControllerResolver } from "./botcontroller.resolver";

@Module({
  controllers: [BotControllerController],
  providers: [BotControllerService, BotControllerResolver],
  exports: [BotControllerService],
})
export class BotControllerModule {}
