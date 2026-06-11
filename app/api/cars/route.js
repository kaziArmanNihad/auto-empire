import { NextResponse } from "next/server";
import Car from "@/app/models/car.model";
import connectDB from "@/app/database/connectDB";

// GET: Fetch all users
export async function GET() {
  try {
    await connectDB();

    // querying the all cars
    const cars = await Car.find({});

    // sending a successfull response
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    // sending an errorI response
    console.error("Error fetching cars data:", error);
    return NextResponse.json(
      { message: "Failed to fetch cars" },
      { status: 500 },
    );
  }
}

// POST: Create a new user
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const {
      brand,
      carName,
      modelName,
      price,
      releaseYear,
      stockAvailable,
      image,
    } = body;

    // car property validation
    if (
      !brand ||
      !carName ||
      !modelName ||
      !price ||
      !releaseYear ||
      !stockAvailable ||
      !image
    ) {
      return NextResponse.json(
        { message: "Missing required car data fields" },
        { status: 400 },
      );
    }

    const newCar = await Car.create({
      brand,
      carName,
      modelName,
      price,
      releaseYear,
      stockAvailable,
      image,
    });

    // sending a successfull response
    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    // sending an error response
    console.error("Error creating a car data:", error);
    return NextResponse.json(
      { message: "Failed to create car" },
      { status: 500 },
    );
  }
}

// PATCH: Update a user by ID
export async function PATCH(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { message: "Car ID is required in request body" },
        { status: 400 },
      );
    }

    const updatedCar = await Car.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedCar) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    return NextResponse.json(updatedCar, { status: 200 });
  } catch (error) {
    console.error("Error updating car:", error);
    return NextResponse.json(
      { message: "Failed to update the car", error: error.message },
      { status: 500 },
    );
  }
}

// DELETE: Delete a user by ID
export async function DELETE(request) {
  try {
    await connectDB();
    const id = await request.json();

    // id validation
    if (!id) {
      return NextResponse.json(
        { message: "Car ID not found in the data" },
        { status: 400 },
      );
    }

    const deletedCar = await Car.findByIdAndDelete(id);

    // car validation
    if (!deletedCar) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    // sending a successfull response
    return NextResponse.json(
      { message: "Car deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    // sending an error response
    console.error("Error deleting car:", error);
    return NextResponse.json(
      { message: "Failed to delete car" },
      { status: 500 },
    );
  }
}
