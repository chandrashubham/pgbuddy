import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import Pg from "@/app/models/Pgs";

// Connect to MongoDB
await connectDb();

export async function GET() {
  try {
    const pgs = await Pg.find(); // Fetch all rooms from MongoDB
    return NextResponse.json({ success: true, pgs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching rooms:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
