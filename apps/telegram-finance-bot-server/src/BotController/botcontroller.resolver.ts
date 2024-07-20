import * as graphql from "@nestjs/graphql";
import { BotControllerService } from "./botcontroller.service";

export class BotControllerResolver {
  constructor(protected readonly service: BotControllerService) {}

  @graphql.Mutation(() => String)
  async ReceiveMessage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ReceiveMessage(args);
  }
}
