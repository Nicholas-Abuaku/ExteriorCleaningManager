import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import employees from "@/app/dashboard/employees/page";
const prisma = new PrismaClient();
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // const id = params.id;
  // const employeeJobs = await prisma.jobs.findMany({
  //   where: {
  //     emp_id: parseInt(id),
  //   },
  //   include: {
  //     services: {
  //       select: { service: true },
  //     },
  //   },
  // });

  // return NextResponse.json(employeeJobs);

  try {
    const id = params.id;
    const employeeJobs = await prisma.jobs.findMany({
      where: {
        emp_id: parseInt(id),
      },
      include: {
        services: {
          select: { service: true },
        },
      },
    });

    return NextResponse.json(employeeJobs, { status: 200 });
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "employee not found" },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}
