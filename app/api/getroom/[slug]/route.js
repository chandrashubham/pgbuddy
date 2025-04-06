import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import Rooms from "@/app/models/Rooms";

export async function GET(req, { params }) {
  await connectDb();

  try {
    const { slug } = params;
    const room = await Rooms.findOne({ slug });

    if (!room) {
      return NextResponse.json(
        { success: false, message: "Room not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, room }, { status: 200 });
  } catch (error) {
    console.error("Error fetching room:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
