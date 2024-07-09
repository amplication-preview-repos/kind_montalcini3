import { SummaryRequestWhereInput } from "./SummaryRequestWhereInput";
import { SummaryRequestOrderByInput } from "./SummaryRequestOrderByInput";

export type SummaryRequestFindManyArgs = {
  where?: SummaryRequestWhereInput;
  orderBy?: Array<SummaryRequestOrderByInput>;
  skip?: number;
  take?: number;
};
