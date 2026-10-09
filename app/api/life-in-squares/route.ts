import { NextResponse } from "next/server";
import { GALLERY } from "@/data/gallery";

export const revalidate = 3600;

export async function GET() {
  return NextResponse.json(GALLERY);
}
