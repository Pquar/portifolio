import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/postgres-js'

config({ path: '.env' })

export let db = process.env.DATABASE_URL
  ? drizzle(process.env.DATABASE_URL)
  : (null as unknown as ReturnType<typeof drizzle>)
