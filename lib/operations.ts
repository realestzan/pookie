import db from "@/lib/drizzle";
import { InsertBook, InsertUser, SelectBook, SelectUser, book, todo, user } from "@/lib/schema";
import { asc, eq } from 'drizzle-orm';

export interface TodoData {
  id: number;
  text: string 
  done: boolean
}

export const addBook = async (bookData: InsertBook) => {
  await db.insert(book).values(bookData);
};

export const getBook = async () => {
  const data = await db.select().from(book).orderBy(asc(book.id));
  return data;
};

export const addTodo = async (todoData: TodoData) => {
  await db.insert(todo).values(todoData);
};

export async function createUser(data: InsertUser) {
  try {
    await db.insert(user).values(data).execute();
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

export async function getUserByEmail(email: string): Promise<SelectUser | null> {
  try {
    const result = await db.select().from(user).where(eq(user.email, email)).execute();
    if (result.length > 0) {
      return result[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    return null;
  }
}

export async function getBooksByUser(userId: number): Promise<SelectBook[]> {
  try {
    const books = await db.select().from(book).where(eq(book.createdBy, userId)).execute();
    return books;
  } catch (error) {
    console.error('Error fetching books by user:', error);
    throw error;
  }
}

export async function getUserById(id: number): Promise<SelectUser | null> {
  try {
    const result = await db.select().from(user).where(eq(user.id, id)).execute();
    if (result.length > 0) {
      return result[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return null;
  }
}