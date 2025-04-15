import { NextResponse } from 'next/server';
import connectDb from '@/lib/mongodb';
import Rooms from '@/app/models/Rooms';

export async function GET(req) {
  await connectDb();

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search")?.toLowerCase();

  let query = {};

  if (search) {
    const regex = new RegExp(search, 'i'); // case-insensitive

    query = {
      $or: [
        { title: regex },
        { location: regex },
        { address: regex },
        { description: regex },
        { type: regex },
        { sharingType: regex },
        { 'owner.name': regex }
      ],
    };
  }

  try {
    const pgs = await Rooms.find(query);
    return NextResponse.json({ success: true, pgs });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
