
import postgres from 'postgres'

// see env variables in .env
//import {PGCONNECT} from '$env/static/private';

//import * as env from '$env/dynamic/private';

const PGCONNECT = process.env.PGCONNECT; // My variable name here was DATABASE_URL not PGCONNECT

const sql = postgres(PGCONNECT)

export default sql;
