import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { neon } from '@neondatabase/serverless';
import { Input } from "@/components/ui/aurora-input";
import { Button } from "@/components/ui/aurora-button";

async function getData() {
  const sql = neon(process.env.DATABASE_URL || '');
  const response = await sql`SELECT version()`;
  return response[0].version;
}

export default async function Settings() {

  async function create(formData: FormData) {
    "use server";
    
    const sql = neon(process.env.DATABASE_URL || '');
    // await sql`DROP TABLE IF EXISTS books`
    await sql`CREATE TABLE IF NOT EXISTS books (
      title TEXT,
      author TEXT,
      description TEXT,
      editors TEXT,
      language TEXT,
      pages INTEGER,
      isbn TEXT,
      coverImage TEXT,
      reviewer TEXT,
      review TEXT
    )`;
    
    const title = formData.get("title");
    const author = formData.get("author");
    const description = formData.get("description");
    const editors = formData.get("editors");
    const language = formData.get("language");
    const pages = formData.get("pages");
    const isbn = formData.get("isbn");
    const coverImage = formData.get("coverImage");
    const reviewer = formData.get("reviewer");
    const review = formData.get("review");

    await sql`INSERT INTO books (
      title, author, description, editors, language, pages, isbn, coverImage, reviewer, review
    ) VALUES (
      ${title}, ${author}, ${description}, ${editors}, ${language}, ${pages}, ${isbn}, ${coverImage}, ${reviewer}, ${review}
    )`;
  }

  const data = await getData();
  return (
    <div className="flex pl-28 min-h-screen w-full flex-col py-4 bg-transparent">
      <Sidebar />
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 w-full"> 
        {data}

        <form action={create}>
          <Input type="text" placeholder="Title" name="title" />
          <Input type="text" placeholder="Author" name="author" />
          <Input type="text" placeholder="Description" name="description" />
          <Input type="text" placeholder="Editors" name="editors" />
          <Input type="text" placeholder="Language" name="language" />
          <Input type="number" placeholder="Pages" name="pages" />
          <Input type="text" placeholder="ISBN" name="isbn" />
          <Input type="text" placeholder="Cover Image URL" name="coverImage" />
          <Input type="text" placeholder="Reviewer" name="reviewer" />
          <Input type="text" placeholder="Review" name="review" />
          <Button type="submit">Submit</Button>
        </form>
      </main>
    </div>
  )
}
