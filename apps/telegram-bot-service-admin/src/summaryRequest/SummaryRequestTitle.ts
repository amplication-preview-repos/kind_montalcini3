import { SummaryRequest as TSummaryRequest } from "../api/summaryRequest/SummaryRequest";

export const SUMMARYREQUEST_TITLE_FIELD = "id";

export const SummaryRequestTitle = (record: TSummaryRequest): string => {
  return record.id?.toString() || String(record.id);
};
