import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET() {
  const services = await prisma.service.findMany();

  return NextResponse.json(services);
}

export async function POST(req: NextRequest) {
  const json = await req.json();

  const created = await prisma.service.create({
    data: json,
  });

  return NextResponse.json(created, { status: 201 });
}
