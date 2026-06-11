import { NextResponse } from "next/server";
import connectDB from "@/app/database/connectDB";
import User from "@/app/models/user.model";

// PATCH: Promote user to admin
export async function PATCH(request) {
  try {
    await connectDB();
    const { _id } = await request.json();

    if (!_id) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 },
      );
    }

    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { userRole: "admin" },
      { new: true, runValidators: true },
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error promoting user:", error);
    return NextResponse.json(
      { message: "Failed to promote user" },
      { status: 500 },
    );
  }
}
