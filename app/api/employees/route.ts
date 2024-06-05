import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
const prisma = new PrismaClient();
export async function GET(request: NextRequest) {
  // const employees = await prisma.employee.findMany();
  // return NextResponse.json(employees);

  try {
    const allEmployees = await prisma.employee.findMany();
    return NextResponse.json(allEmployees);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error Fetching Employees" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const created = await prisma.employee.create({
      data: json,
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    if (error instanceof PrismaClientValidationError) {
      return NextResponse.json(error.message, { status: 400 });
    }
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
