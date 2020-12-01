import { Pool } from 'pg';
import dotenv from 'dotenv';
// import the connectionString that connects us to our database
import { connectionString } from '../config';

// initialize dotenv
dotenv.config();

// establish a connection to database with Pool object
export const pool = new Pool({ connectionString });
