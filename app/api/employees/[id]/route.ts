import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
const prisma = new PrismaClient();
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const employee = await prisma.employee.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!employee) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(employee, { status: 200 });
  } catch (err: any) {
    if (err.code === "P2025") {
      return NextResponse.json(
        { error: "Employee not found" },
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

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const json = await req.json();
    const updated = await prisma.employee.update({
      where: {
        id: parseInt(id),
      },
      data: json,
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (err: any) {
    if (err.code === "P2025") {
      return NextResponse.json(
        { error: "Employee not found" },
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const deleted = await prisma.employee.delete({
      where: {
        id: parseInt(id),
      },
    });
    return NextResponse.json(
      { message: "Successfully Deleted" },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Employee not found" },
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
