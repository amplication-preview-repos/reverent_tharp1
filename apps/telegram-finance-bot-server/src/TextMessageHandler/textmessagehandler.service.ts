import { Injectable } from "@nestjs/common";

@Injectable()
export class TextMessageHandlerService {
  constructor() {}
  async HandleTextMessage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
