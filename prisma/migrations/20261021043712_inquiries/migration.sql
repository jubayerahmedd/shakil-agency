-- Wrapped in one transaction: if any statement fails, none of them apply
-- and the live site keeps its old schema (see AGENTS.md).
BEGIN;

-- CreateTable
CREATE TABLE "inquiries" (
    "id" SERIAL NOT NULL,
    "kind" VARCHAR(10) NOT NULL DEFAULT 'contact',
    "name" VARCHAR(80) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "company" VARCHAR(120),
    "topic" VARCHAR(20) NOT NULL DEFAULT 'general',
    "size" VARCHAR(20),
    "message" VARCHAR(5000) NOT NULL,
    "status" VARCHAR(10) NOT NULL DEFAULT 'new',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inquiries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "inquiries_status_id_idx" ON "inquiries"("status", "id");

COMMIT;
