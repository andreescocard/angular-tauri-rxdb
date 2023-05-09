import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

const myDatabase = await createRxDatabase({
  name: 'heroesdb',
  storage: getRxStorageDexie()
});

export default myDatabase;




