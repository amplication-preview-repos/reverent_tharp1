import * as graphql from "@nestjs/graphql";
import { TextMessageHandlerService } from "./textmessagehandler.service";

export class TextMessageHandlerResolver {
  constructor(protected readonly service: TextMessageHandlerService) {}

  @graphql.Mutation(() => String)
  async HandleTextMessage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.HandleTextMessage(args);
  }
}
