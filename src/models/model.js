import { pool } from './pool';

// class model whose constructor accepts a database table
class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  // select method to retrieve items from our database table
  async select(columns, clause) {
    let query = `SELECT ${columns} FROM ${this.table}`;
    if (clause) query += clause;
    return this.pool.query(query);
  }

  // this allows inserting of messages to database, returns
  // the id, name, and message
  async insertWithReturn(columns, values) {
    const query = `
      INSERT INTO ${this.table}(${columns})
      VALUES (${values})
      RETURNING id, ${columns}`;
    return this.pool.query(query);
  }
}

export default Model;
