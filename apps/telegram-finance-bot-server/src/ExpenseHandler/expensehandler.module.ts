import { Module } from "@nestjs/common";
import { ExpenseHandlerService } from "./expensehandler.service";
import { ExpenseHandlerController } from "./expensehandler.controller";
import { ExpenseHandlerResolver } from "./expensehandler.resolver";

@Module({
  controllers: [ExpenseHandlerController],
  providers: [ExpenseHandlerService, ExpenseHandlerResolver],
  exports: [ExpenseHandlerService],
})
export class ExpenseHandlerModule {}
