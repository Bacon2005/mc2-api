import { NextResponse } from "next/server";
import { ROWS } from "../../rows";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  //params is a promise. Read it without await and id is undefined.
  const { id } = await params;
  const row = ROWS.find((r) => r.id === id);
  //An unknown id is not an empty answer. It is a missing one, and the phone must tell them apart.
  return row ? NextResponse.json(row) : new NextResponse("", { status: 404 });
}
