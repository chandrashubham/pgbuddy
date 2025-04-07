// app/api/book-now/route.js (or similar depending on your route structure)
import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import BookPG from "@/app/models/BookPG";

export async function POST(req) {
  await connectDb(); // Connect to MongoDB

  try {
    const { fullName, email, moveInDate, preferredPG } = await req.json();

    // Basic validation
    if (!fullName || !email || !moveInDate || !preferredPG) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const newBooking = new BookPG({
      fullName,
      email,
      moveInDate,
      preferredPG,
    });

    await newBooking.save();

    return NextResponse.json(
      { success: true, message: "PG Booking Submitted Successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error booking PG:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
