import { Module } from "@nestjs/common";
import { SummaryRequestModuleBase } from "./base/summaryRequest.module.base";
import { SummaryRequestService } from "./summaryRequest.service";
import { SummaryRequestController } from "./summaryRequest.controller";
import { SummaryRequestResolver } from "./summaryRequest.resolver";

@Module({
  imports: [SummaryRequestModuleBase],
  controllers: [SummaryRequestController],
  providers: [SummaryRequestService, SummaryRequestResolver],
  exports: [SummaryRequestService],
})
export class SummaryRequestModule {}
