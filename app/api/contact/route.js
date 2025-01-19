import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import UserMessage from "@/app/models/UserMessage";

export async function POST(req) {
  await connectDb(); // Ensure database connection

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const newMessage = new UserMessage({ name, email, message });
    await newMessage.save();

    return NextResponse.json(
      { success: true, message: "Message saved successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving message:", error.message);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
