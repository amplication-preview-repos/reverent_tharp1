import { Module } from "@nestjs/common";
import { IncomeModule } from "./income/income.module";
import { ExpenseModule } from "./expense/expense.module";
import { UserModule } from "./user/user.module";
import { BotControllerModule } from "./BotController/botcontroller.module";
import { ExpenseHandlerModule } from "./ExpenseHandler/expensehandler.module";
import { FinanceRepositoryModule } from "./FinanceRepository/financerepository.module";
import { FinanceServiceModule } from "./FinanceService/financeservice.module";
import { IncomeHandlerModule } from "./IncomeHandler/incomehandler.module";
import { TextMessageHandlerModule } from "./TextMessageHandler/textmessagehandler.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    IncomeModule,
    ExpenseModule,
    UserModule,
    BotControllerModule,
    ExpenseHandlerModule,
    FinanceRepositoryModule,
    FinanceServiceModule,
    IncomeHandlerModule,
    TextMessageHandlerModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
