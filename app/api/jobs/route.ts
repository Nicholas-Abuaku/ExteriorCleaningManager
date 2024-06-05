import { PrismaClient } from "@prisma/client";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET() {
  try {
    const jobs = await prisma.jobs.findMany({
      include: {
        assigned_to: {
          select: { employee_firstname: true, employee_lastname: true },
        },
        services: {
          select: {
            service: true,
          },
        },
      },
    });

    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const created = await prisma.jobs.create({
      data: json,
    });
    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    if (error instanceof PrismaClientValidationError) {
      return NextResponse.json(error.message, { status: 400 });
    } else if (error instanceof PrismaClientKnownRequestError) {
      return NextResponse.json({ Duplicate_Data: error.meta }, { status: 400 });
    } else {
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
    console.log(error);
  }
}

//delete route needed
