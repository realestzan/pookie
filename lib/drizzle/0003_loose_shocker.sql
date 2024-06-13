ALTER TABLE "book" DROP CONSTRAINT "book_createdBy_user_id_fk";
--> statement-breakpoint
ALTER TABLE "book" ALTER COLUMN "title" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "book" ALTER COLUMN "author" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "book" ALTER COLUMN "language" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "book" DROP COLUMN IF EXISTS "createdBy";