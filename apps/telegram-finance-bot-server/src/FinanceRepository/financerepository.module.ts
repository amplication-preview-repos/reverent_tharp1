import { Module } from "@nestjs/common";
import { FinanceRepositoryService } from "./financerepository.service";
import { FinanceRepositoryController } from "./financerepository.controller";
import { FinanceRepositoryResolver } from "./financerepository.resolver";

@Module({
  controllers: [FinanceRepositoryController],
  providers: [FinanceRepositoryService, FinanceRepositoryResolver],
  exports: [FinanceRepositoryService],
})
export class FinanceRepositoryModule {}
