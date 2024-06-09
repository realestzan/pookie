import db from "@/lib/drizzle";
import { book, todo } from "@/lib/schema";
import { asc } from 'drizzle-orm';


interface BookData {
  id: number;
  title: string;
  author: string;
  description: string;
  language: string;
  isbn: string;
  cover_image: string;
  reviewer: string;
  review: string;
  pages: number;
}

export interface TodoData {
  id: number;
  text: string 
  done: boolean
}

export const addBook = async (bookData: BookData) => {
  await db.insert(book).values(bookData);
};

export const getBook = async () => {
  const data = await db.select().from(book).orderBy(asc(book.id));
  return data;
};

export const addTodo = async (todoData: TodoData) => {
  await db.insert(todo).values(todoData);
};