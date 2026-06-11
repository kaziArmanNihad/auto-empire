import { NextResponse } from "next/server";
import connectDB from "@/app/database/connectDB";
import User from "@/app/models/user.model";

// GET: Fetch all users
export async function GET() {
  try {
    await connectDB();

    const users = await User.find({});

    // sending a successfull response
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 },
    );
  }
}

// POST: Create a new user
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const { userName, userEmail, userPhoto, userRole, userIsVerified } = body;

    // Validate required fields
    if (!userName || !userEmail || !userPhoto) {
      return NextResponse.json(
        { message: "Missing required user fields" },
        { status: 400 },
      );
    }

    // setting the email in small caps
    userEmail.trim().toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ userEmail });

    if (existingUser) {
      return NextResponse.json(existingUser, { status: 200 });
    }

    // Creating user
    const newUser = await User.create({
      userName,
      userEmail,
      userPhoto,
      userIsVerified,
      userRole,
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 },
    );
  }
}

// PATCH: Update a user by email
export async function PATCH(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { userEmail, ...updates } = body;

    if (!userEmail) {
      return NextResponse.json(
        { message: "User email is required" },
        { status: 400 },
      );
    }

    const updatedUser = await User.findOneAndUpdate(
      { userEmail: userEmail.trim().toLowerCase() },
      updates,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Failed to update user" },
      { status: 500 },
    );
  }
}

// DELETE: Delete a user by ID
export async function DELETE(request) {
  try {
    await connectDB();

    let id = null;
    try {
      const body = await request.json();
      id = body?.id;
    } catch (err) {
      // If There is no id found then it will be null
      id = null;
    }

    if (id) {
      // Delete single user by ID
      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 },
        );
      }

      return NextResponse.json(
        { message: "User deleted successfully" },
        { status: 200 },
      );
    } else {
      // Delete all users
      const result = await User.deleteMany({});
      return NextResponse.json(
        { message: "All users deleted", count: result.deletedCount },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("Error deleting user(s):", error);
    return NextResponse.json(
      { message: "Failed to delete user(s)" },
      { status: 500 },
    );
  }
}
