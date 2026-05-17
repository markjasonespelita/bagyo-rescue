export type RescuePriority = 'critical' | 'high' | 'medium' | 'low';
export type RescueStatus = 'new' | 'triaged' | 'responding' | 'resolved';

export type RescueReport = {
  id: string;
  household: string;
  location: string;
  priority: RescuePriority;
  status: RescueStatus;
  people: number;
  notes: string;
  createdAt: number;
};

export type RescuePingSyncStatus = 'queued' | 'sending' | 'sent' | 'failed';

export type RescuePing = {
  id: string;
  phoneNumber: string;
  latitude: number;
  longitude: number;
  accuracyMeters: number | null;
  note: string;
  syncStatus: RescuePingSyncStatus;
  retryCount: number;
  lastSyncError: string | null;
  syncedAt: number | null;
  createdAt: number;
};
