export const dexieSchema = {
  databaseName: 'bagyoRescue',
  version: 2,
  stores: {
    reports: 'id, createdAt, priority, status, location',
    rescuePings: 'id, createdAt, syncStatus, phoneNumber',
  },
} as const;
