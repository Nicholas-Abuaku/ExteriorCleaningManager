/*
  Warnings:

  - The `status` column on the `Jobs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[client_email]` on the table `Jobs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[client_mobile]` on the table `Jobs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[client_postcode,client_house_num]` on the table `Jobs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emp_id` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `services` on the `Jobs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COMPLETED', 'PENDING', 'CANCELLED');

-- CreateEnum
CREATE TYPE "Services" AS ENUM ('EXT_WINDOW', 'INT_WINDOW', 'GUT_CLEAN', 'GUT_REPAIR', 'FASCIAS', 'SOFFIT');

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emp_id" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "services",
ADD COLUMN     "services" "Services" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "employee_firstname" TEXT NOT NULL,
    "employee_lastname" TEXT NOT NULL,
    "employee_email" TEXT NOT NULL,
    "employee_mobile" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employee_email_key" ON "Employee"("employee_email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employee_mobile_key" ON "Employee"("employee_mobile");

-- CreateIndex
CREATE INDEX "Employee_employee_firstname_employee_lastname_employee_emai_idx" ON "Employee"("employee_firstname", "employee_lastname", "employee_email");

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_client_email_key" ON "Jobs"("client_email");

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_client_mobile_key" ON "Jobs"("client_mobile");

-- CreateIndex
CREATE INDEX "Jobs_emp_id_client_postcode_date_due_idx" ON "Jobs"("emp_id", "client_postcode", "date_due");

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_client_postcode_client_house_num_key" ON "Jobs"("client_postcode", "client_house_num");

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
