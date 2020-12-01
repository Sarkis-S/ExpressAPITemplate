import {
  dropTables,
  createTables,
  insertIntoTables,
} from '../src/utils/queryFunctions';

// executes the before hook to create the database and insert some items into it. 
before(async () => {
  await createTables();
  await insertIntoTables();
});

// The test files then run.

// Once complete, mocha runs the after hook to clean out database.
// This ensures that each test is done with clean new records in our database each time.
after(async () => {
  await dropTables();
});
