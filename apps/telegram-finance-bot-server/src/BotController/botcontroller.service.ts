import { Injectable } from "@nestjs/common";

@Injectable()
export class BotControllerService {
  constructor() {}
  async ReceiveMessage(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
