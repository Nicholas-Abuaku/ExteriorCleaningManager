import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import employees from "@/app/dashboard/employees/page";
const prisma = new PrismaClient();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const employeeJobs = await prisma.jobs.findMany({
    where: {
      emp_id: parseInt(id),
    },
    include: {
      services: {},
    },
  });

  return NextResponse.json(employeeJobs);
}
