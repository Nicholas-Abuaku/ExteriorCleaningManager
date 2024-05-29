import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET() {
  const jobs = await prisma.jobs.findMany({
    include: {
      assigned_to: {
        select: { employee_firstname: true, employee_lastname: true },
      },
    },
  });

  return NextResponse.json(jobs);
}

export async function POST(req: NextRequest) {
  const json = await req.json();

  const created = await prisma.jobs.create({
    data: json,
  });

  return NextResponse.json(created, { status: 201 });
}
