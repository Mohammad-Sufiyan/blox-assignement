/*
  Warnings:

  - You are about to drop the `SampleTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SampleTable";

-- CreateTable
CREATE TABLE "sampletable" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "address" JSONB NOT NULL,

    CONSTRAINT "sampletable_pkey" PRIMARY KEY ("id")
);
