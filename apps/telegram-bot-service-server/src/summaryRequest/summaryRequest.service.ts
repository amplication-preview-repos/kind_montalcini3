import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SummaryRequestServiceBase } from "./base/summaryRequest.service.base";

@Injectable()
export class SummaryRequestService extends SummaryRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
