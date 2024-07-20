import { Module } from "@nestjs/common";
import { FinanceServiceService } from "./financeservice.service";
import { FinanceServiceController } from "./financeservice.controller";
import { FinanceServiceResolver } from "./financeservice.resolver";

@Module({
  controllers: [FinanceServiceController],
  providers: [FinanceServiceService, FinanceServiceResolver],
  exports: [FinanceServiceService],
})
export class FinanceServiceModule {}
