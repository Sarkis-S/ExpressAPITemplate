import { pool } from '../models/pool';
import {
  insertMessages,
  dropMessagesTable,
  createMessageTable,
} from './queries';

// These functions executes an array of queries and waits for each one to complete inside the loop. // Don’t do this in production code.
// The reason for using an array is that the number of such queries will grow as the number of tables in our database grows.
export const executeQueryArray = async arr => new Promise(resolve => {
  const stop = arr.length;

  arr.forEach(async (q, index) => {
    await pool.query(q);

    // we resolve the promise once we have executed the last query in the list. 
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropMessagesTable ]);
export const createTables = () => executeQueryArray([ createMessageTable ]);
export const insertIntoTables = () => executeQueryArray([ insertMessages ]);
