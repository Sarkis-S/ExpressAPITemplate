import { createTables, insertIntoTables } from './queryFunctions';

// execute the functions to create table and seed messages to table
(async () => {
  await createTables();
  await insertIntoTables();
})();
