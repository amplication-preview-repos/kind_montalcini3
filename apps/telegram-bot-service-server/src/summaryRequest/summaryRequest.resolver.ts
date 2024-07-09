import * as graphql from "@nestjs/graphql";
import { SummaryRequestResolverBase } from "./base/summaryRequest.resolver.base";
import { SummaryRequest } from "./base/SummaryRequest";
import { SummaryRequestService } from "./summaryRequest.service";

@graphql.Resolver(() => SummaryRequest)
export class SummaryRequestResolver extends SummaryRequestResolverBase {
  constructor(protected readonly service: SummaryRequestService) {
    super(service);
  }
}
