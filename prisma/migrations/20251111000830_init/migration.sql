/*
  Warnings:

  - You are about to drop the `Transactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Transactions";

-- CreateTable
CREATE TABLE "Transaction" (
    "id" BIGSERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "created_at" TIMESTAMPTZ(6),

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
