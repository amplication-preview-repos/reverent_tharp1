import { Module } from "@nestjs/common";
import { IncomeHandlerService } from "./incomehandler.service";
import { IncomeHandlerController } from "./incomehandler.controller";
import { IncomeHandlerResolver } from "./incomehandler.resolver";

@Module({
  controllers: [IncomeHandlerController],
  providers: [IncomeHandlerService, IncomeHandlerResolver],
  exports: [IncomeHandlerService],
})
export class IncomeHandlerModule {}
