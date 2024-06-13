ALTER TABLE "book" ALTER COLUMN "description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "book" ALTER COLUMN "cover_image" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "book" ALTER COLUMN "pages" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "book" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "book" ADD COLUMN "createdBy" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "book" ADD CONSTRAINT "book_createdBy_user_id_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "book" DROP COLUMN IF EXISTS "isbn";--> statement-breakpoint
ALTER TABLE "book" DROP COLUMN IF EXISTS "reviewer";--> statement-breakpoint
ALTER TABLE "book" DROP COLUMN IF EXISTS "review";