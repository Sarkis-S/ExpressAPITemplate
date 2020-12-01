// deletes and recreates messsages table
export const createMessageTable = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )`;

// inserts two rows into messages table
export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('sarkis', 'first message'),
      ('sos', 'second message')`;

// drops/deletes messages table
export const dropMessagesTable = 'DROP TABLE messages';
