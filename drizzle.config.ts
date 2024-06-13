import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// console.log('Database URL:', process.env.DATABASE_URL);
export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./lib/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
