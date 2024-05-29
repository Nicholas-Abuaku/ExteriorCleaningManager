import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const job = await prisma.jobs.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (job != null) {
      return NextResponse.json(job);
    } else {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const json = await req.json();
  try {
    const updated = await prisma.jobs.update({
      where: {
        id: parseInt(id),
      },
      data: json,
    });
    if (updated != null) {
      return NextResponse.json(updated);
    } else {
      return NextResponse.json({ message: "Job ID not found" });
    }
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const deleted = await prisma.jobs.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json(deleted);
  } catch (err) {
    return NextResponse.json(err);
  }
}
