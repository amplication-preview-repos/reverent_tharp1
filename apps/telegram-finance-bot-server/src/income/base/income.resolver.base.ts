/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Income } from "./Income";
import { IncomeCountArgs } from "./IncomeCountArgs";
import { IncomeFindManyArgs } from "./IncomeFindManyArgs";
import { IncomeFindUniqueArgs } from "./IncomeFindUniqueArgs";
import { CreateIncomeArgs } from "./CreateIncomeArgs";
import { UpdateIncomeArgs } from "./UpdateIncomeArgs";
import { DeleteIncomeArgs } from "./DeleteIncomeArgs";
import { User } from "../../user/base/User";
import { IncomeService } from "../income.service";
@graphql.Resolver(() => Income)
export class IncomeResolverBase {
  constructor(protected readonly service: IncomeService) {}

  async _incomesMeta(
    @graphql.Args() args: IncomeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Income])
  async incomes(@graphql.Args() args: IncomeFindManyArgs): Promise<Income[]> {
    return this.service.incomes(args);
  }

  @graphql.Query(() => Income, { nullable: true })
  async income(
    @graphql.Args() args: IncomeFindUniqueArgs
  ): Promise<Income | null> {
    const result = await this.service.income(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Income)
  async createIncome(@graphql.Args() args: CreateIncomeArgs): Promise<Income> {
    return await this.service.createIncome({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Income)
  async updateIncome(
    @graphql.Args() args: UpdateIncomeArgs
  ): Promise<Income | null> {
    try {
      return await this.service.updateIncome({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Income)
  async deleteIncome(
    @graphql.Args() args: DeleteIncomeArgs
  ): Promise<Income | null> {
    try {
      return await this.service.deleteIncome(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Income): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
