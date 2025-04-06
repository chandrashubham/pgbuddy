import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import RegisterPG from "@/app/models/RegisterPG";

export async function POST(req) {
  await connectDb(); // Connect to MongoDB

  try {
    const {
      ownerName,
      contactNumber,
      email,
      location,
      pgDescription,
      images,
      videos,
    } = await req.json();

    // Basic validation
    if (
      !ownerName ||
      !contactNumber ||
      !email ||
      !location ||
      !pgDescription
    ) {
      return NextResponse.json(
        { success: false, error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    const newPG = new RegisterPG({
      ownerName,
      contactNumber,
      email,
      location,
      pgDescription,
      images: images || [],
      videos: videos || [],
    });

    await newPG.save();

    return NextResponse.json(
      { success: true, message: "PG Room Registered Successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering PG:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
