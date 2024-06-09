import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});

export const book = pgTable("book", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  description: text("description").notNull(),
  language: text("language").notNull(),
  isbn: text("isbn").notNull(),
  cover_image: text("cover_image").notNull(),
  reviewer: text("reviewer").notNull(),
  review: text("review").notNull(),
  pages: integer("pages").notNull(),
});