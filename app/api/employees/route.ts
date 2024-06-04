import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import employees from "@/app/dashboard/employees/page";
const prisma = new PrismaClient();
export async function GET(request: NextRequest) {
  const employees = await prisma.employee.findMany();
  return NextResponse.json(employees);
}

export async function POST(request: NextRequest) {
  const json = await request.json();
  const created = await prisma.employee.create({
    data: json,
  });

  return NextResponse.json(created);
}
