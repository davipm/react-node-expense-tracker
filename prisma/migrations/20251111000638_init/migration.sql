-- CreateTable
CREATE TABLE "Transactions" (
    "id" BIGSERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "created_at" TIMESTAMPTZ(6),

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);
