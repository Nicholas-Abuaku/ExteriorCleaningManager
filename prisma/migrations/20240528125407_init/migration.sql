-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "client_firstname" TEXT NOT NULL,
    "client_surname" TEXT NOT NULL,
    "client_email" TEXT NOT NULL,
    "client_postcode" TEXT NOT NULL,
    "client_house_num" TEXT NOT NULL,
    "client_mobile" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "date_due" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);
