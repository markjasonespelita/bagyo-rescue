import Dexie, { type EntityTable } from 'dexie';
import { dexieSchema } from './schema';
import type { RescuePing, RescueReport } from './types';

export type BagyoRescueDexie = Dexie & {
  reports: EntityTable<RescueReport, 'id'>;
  rescuePings: EntityTable<RescuePing, 'id'>;
};

export function createDexieClient() {
  const dexie = new Dexie(dexieSchema.databaseName) as BagyoRescueDexie;

  dexie.version(dexieSchema.version).stores(dexieSchema.stores);

  return dexie;
}

export const dexie = createDexieClient();
