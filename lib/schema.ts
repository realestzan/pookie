import { integer, text, boolean, pgTable, serial, timestamp, json } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});

export const book = pgTable("book", {
  id: serial("id").primaryKey(),
  createdAt: timestamp('createdAt').defaultNow(),
  createdBy: integer("createdBy").references(() => user.id),

  title: text("title"),
  author: text("author"),
  description: text("description"),


  language: text("language"),
  cover_image: text("cover_image"),
  pages: integer("pages"),
});

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  name: text('name'),
  image: text('image'),
  email: text('email').unique(),
  createdAt: timestamp('createdAt').defaultNow()
});

export type InsertBook = typeof book.$inferInsert
export type SelectBook = typeof book.$inferSelect

export type InsertUser = typeof user.$inferInsert
export type SelectUser = typeof user.$inferSelect