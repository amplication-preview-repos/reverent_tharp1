import { Module } from "@nestjs/common";
import { IncomeModuleBase } from "./base/income.module.base";
import { IncomeService } from "./income.service";
import { IncomeController } from "./income.controller";
import { IncomeResolver } from "./income.resolver";

@Module({
  imports: [IncomeModuleBase],
  controllers: [IncomeController],
  providers: [IncomeService, IncomeResolver],
  exports: [IncomeService],
})
export class IncomeModule {}
