/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SummaryService } from "../summary.service";
import { SummaryCreateInput } from "./SummaryCreateInput";
import { Summary } from "./Summary";
import { SummaryFindManyArgs } from "./SummaryFindManyArgs";
import { SummaryWhereUniqueInput } from "./SummaryWhereUniqueInput";
import { SummaryUpdateInput } from "./SummaryUpdateInput";

export class SummaryControllerBase {
  constructor(protected readonly service: SummaryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Summary })
  async createSummary(
    @common.Body() data: SummaryCreateInput
  ): Promise<Summary> {
    return await this.service.createSummary({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Summary] })
  @ApiNestedQuery(SummaryFindManyArgs)
  async summaries(@common.Req() request: Request): Promise<Summary[]> {
    const args = plainToClass(SummaryFindManyArgs, request.query);
    return this.service.summaries({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Summary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async summary(
    @common.Param() params: SummaryWhereUniqueInput
  ): Promise<Summary | null> {
    const result = await this.service.summary({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Summary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSummary(
    @common.Param() params: SummaryWhereUniqueInput,
    @common.Body() data: SummaryUpdateInput
  ): Promise<Summary | null> {
    try {
      return await this.service.updateSummary({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Summary })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSummary(
    @common.Param() params: SummaryWhereUniqueInput
  ): Promise<Summary | null> {
    try {
      return await this.service.deleteSummary({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}