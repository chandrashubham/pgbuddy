import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import Rooms from "@/app/models/Rooms";

// Connect to MongoDB
await connectDb();

export async function GET() {
  try {
    const rooms = await Rooms.find(); // Fetch all rooms from MongoDB
    return NextResponse.json({ success: true, rooms }, { status: 200 });
  } catch (error) {
    console.error("Error fetching rooms:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
