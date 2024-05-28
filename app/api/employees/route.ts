import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(request: NextRequest) {
  const employees = await prisma.employee.findMany();
  return NextResponse.json({ data: employees });
}

export async function POST(request: NextRequest) {
  const json = await request.json();

  const created = await prisma.employee.create({
    data: json,
  });

  return new NextResponse(JSON.stringify(created), { status: 201 });
}
