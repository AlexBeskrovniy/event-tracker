ALTER TABLE "calendars" ADD COLUMN "slug" text NOT NULL;--> statement-breakpoint
ALTER TABLE "calendars" DROP COLUMN "shared";--> statement-breakpoint
CREATE UNIQUE INDEX "calendars_user_slug_idx" ON "calendars" ("user_id","slug");