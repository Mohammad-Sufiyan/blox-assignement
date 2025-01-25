/*
  Warnings:

  - Added the required column `address` to the `SampleTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SampleTable" ADD COLUMN     "address" JSONB NOT NULL;
