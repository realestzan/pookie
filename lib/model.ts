// models.js
import { defineModel, types } from 'drizzle-orm';


const Book = defineModel({
  tableName: 'books',
  schema: {
    title: types.text().notNull(),
    author: types.text().notNull(),
    description: types.text(),
    editors: types.text(),
    language: types.text(),
    pages: types.integer(),
    isbn: types.text(),
    coverImage: types.text(),
    reviewer: types.text(),
    review: types.text(),
  },
});

module.exports = {
  Book,
};
