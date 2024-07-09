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
import { Summary } from "./Summary";
import { SummaryCountArgs } from "./SummaryCountArgs";
import { SummaryFindManyArgs } from "./SummaryFindManyArgs";
import { SummaryFindUniqueArgs } from "./SummaryFindUniqueArgs";
import { DeleteSummaryArgs } from "./DeleteSummaryArgs";
import { SummaryService } from "../summary.service";
@graphql.Resolver(() => Summary)
export class SummaryResolverBase {
  constructor(protected readonly service: SummaryService) {}

  async _summariesMeta(
    @graphql.Args() args: SummaryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Summary])
  async summaries(
    @graphql.Args() args: SummaryFindManyArgs
  ): Promise<Summary[]> {
    return this.service.summaries(args);
  }

  @graphql.Query(() => Summary, { nullable: true })
  async summary(
    @graphql.Args() args: SummaryFindUniqueArgs
  ): Promise<Summary | null> {
    const result = await this.service.summary(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Summary)
  async deleteSummary(
    @graphql.Args() args: DeleteSummaryArgs
  ): Promise<Summary | null> {
    try {
      return await this.service.deleteSummary(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}