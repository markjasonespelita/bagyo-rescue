export { dexie, createDexieClient, type BagyoRescueDexie } from './client';
export {
  addReportHistory,
  getReportHistory,
  getReportHistoryWithOutboxState,
  linkPendingReportHistoriesToAccess,
  listReportHistoriesWithOutboxState,
  listReportHistoryOutboxForSync,
  updateReportHistoryOutboxState,
  type AddReportHistoryInput,
  type LinkPendingReportHistoriesToAccessInput,
  type ListReportHistoriesWithOutboxStateInput,
  type ListReportHistoryOutboxForSyncInput,
} from './report-histories';
export { dexieSchema } from './schema';
export type {
  ReportHistory,
  ReportHistoryOutbox,
  ReportHistoryOutboxAction,
  ReportHistoryOutboxStatus,
  ReportHistoryType,
  ReportHistoryWithOutboxState,
  ReportHistoryWaterLevel,
  ResidentAccessMethod,
} from './types';
