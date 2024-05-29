import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const employee = await prisma.employee.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json(employee);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const json = await req.json();

  const updated = await prisma.employee.update({
    where: {
      id: parseInt(id),
    },
    data: json,
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const deleted = await prisma.employee.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json(deleted);
}
