/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SummaryRequestWhereInput } from "./SummaryRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SummaryRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SummaryRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => SummaryRequestWhereInput)
  @IsOptional()
  @Field(() => SummaryRequestWhereInput, {
    nullable: true,
  })
  every?: SummaryRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => SummaryRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => SummaryRequestWhereInput)
  @IsOptional()
  @Field(() => SummaryRequestWhereInput, {
    nullable: true,
  })
  some?: SummaryRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => SummaryRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => SummaryRequestWhereInput)
  @IsOptional()
  @Field(() => SummaryRequestWhereInput, {
    nullable: true,
  })
  none?: SummaryRequestWhereInput;
}
export { SummaryRequestListRelationFilter as SummaryRequestListRelationFilter };