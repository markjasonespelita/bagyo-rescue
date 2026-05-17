export { dexie, createDexieClient, type BagyoRescueDexie } from './client';
export {
  addReportHistory,
  deleteReportHistory,
  getReportHistory,
  getReportHistoryWithOutboxState,
  linkPendingReportHistoriesToAccess,
  listReportHistoriesWithOutboxState,
  listReportHistoryOutboxForSync,
  updateReportHistory,
  updateReportHistoryOutboxState,
  type AddReportHistoryInput,
  type DeleteReportHistoryInput,
  type LinkPendingReportHistoriesToAccessInput,
  type ListReportHistoriesWithOutboxStateInput,
  type ListReportHistoryOutboxForSyncInput,
  type UpdateReportHistoryInput,
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
