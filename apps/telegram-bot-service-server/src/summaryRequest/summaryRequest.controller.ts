import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SummaryRequestService } from "./summaryRequest.service";
import { SummaryRequestControllerBase } from "./base/summaryRequest.controller.base";

@swagger.ApiTags("summaryRequests")
@common.Controller("summaryRequests")
export class SummaryRequestController extends SummaryRequestControllerBase {
  constructor(protected readonly service: SummaryRequestService) {
    super(service);
  }
}
