import { Pool, type PoolClient, type QueryResult } from "pg";
import { config } from "@/config";

export default class Database {
  pool: Pool;
  client: PoolClient | null = null;

  constructor() {
    this.pool = new Pool({
      host: config.pg.host,
      port: config.pg.port,
      user: config.pg.user,
      password: config.pg.password,
      database: config.pg.database,
      max: 2,
      connectionTimeoutMillis: 3 * 60 * 1000,
      keepAlive: true,
    });
  }

  async connect() {
    this.client = await this.pool.connect();
  }

  close() {
    if (!this.client) {
      return;
    }

    this.client.release();
    this.client = null;
  }

  async query(str: string, values?: any[]): Promise<QueryResult> {
    if (!this.client) {
      throw new Error("Client is not connected");
    }

    return this.client.query(str, values);
  }
}
