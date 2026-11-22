CREATE TYPE "priority" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TABLE "calendars" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"shared" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"title" text NOT NULL,
	"date" date NOT NULL,
	"completed" boolean DEFAULT false NOT NULL,
	"description" text,
	"priority" "priority" DEFAULT 'medium'::"priority" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"calendar_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE INDEX "calendars_user_idx" ON "calendars" ("user_id");--> statement-breakpoint
CREATE INDEX "events_calendar_date_idx" ON "events" ("calendar_id","date");--> statement-breakpoint
ALTER TABLE "calendars" ADD CONSTRAINT "calendars_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "neon_auth"."user"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_calendar_id_calendars_id_fkey" FOREIGN KEY ("calendar_id") REFERENCES "calendars"("id") ON DELETE CASCADE;
