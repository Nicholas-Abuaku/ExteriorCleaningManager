/*
  Warnings:

  - You are about to drop the column `services` on the `Jobs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Jobs" DROP COLUMN "services";

-- DropEnum
DROP TYPE "Services";

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobServices" (
    "jobId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "JobServices_pkey" PRIMARY KEY ("jobId","serviceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Service_name_key" ON "Service"("name");

-- AddForeignKey
ALTER TABLE "JobServices" ADD CONSTRAINT "JobServices_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobServices" ADD CONSTRAINT "JobServices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
