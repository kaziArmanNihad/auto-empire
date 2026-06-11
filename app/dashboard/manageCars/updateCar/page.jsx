"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useGetCarQuery, useUpdateCarMutation } from "@/app/redux/api/carsApi";
import useToast from "@/components/Shared/useCustomToast";
import Loading from "@/app/loading";

function UpdateCar() {
  const searchParams = useSearchParams();
  const carId = searchParams.get("id");

  const router = useRouter();
  const { showSuccess, showError } = useToast();

  const [formData, setFormData] = useState({
    image: "",
    carName: "",
    brand: "",
    modelName: "",
    price: "",
    releaseYear: "",
    stockAvailable: "",
  });

  const { data: car, isLoading, isError } = useGetCarQuery(carId);
  const [updateCar] = useUpdateCarMutation();

  // Populate form when car is loaded
  useEffect(() => {
    if (car) {
      setFormData({
        image: car.image || "",
        carName: car.carName || "",
        brand: car.brand || "",
        modelName: car.modelName || "",
        price: car.price || "",
        releaseYear: car.releaseYear || "",
        stockAvailable: car.stockAvailable || "",
      });
    }
  }, [car]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateCar({ ...formData, id: carId })
      .unwrap()
      .then(() => {
        showSuccess("Car updated successfully!");
        router.push("/dashboard/manageCars");
      })
      .catch((error) => {
        console.log("Error updating car:", error);
        showError("Failed to update car. Please try again.");
      });
  };

  const handleCancel = () => {
    router.push("/dashboard/manageCars");
  };

  if (isLoading) return <Loading message="Loading Car Details..." />;
  if (isError || !car)
    return (
      <p className="mt-10 text-center text-red-500">Failed to load car.</p>
    );

  return (
    <Card className="mx-auto my-5 w-11/12 max-w-3xl px-4">
      <CardHeader>
        <CardTitle className="text-center">Update Car</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { label: "Car Name", name: "carName", type: "text" },
            { label: "Brand", name: "brand", type: "text" },
            { label: "Model Name", name: "modelName", type: "text" },
            { label: "Price ($)", name: "price", type: "number" },
            { label: "Release Year", name: "releaseYear", type: "number" },
            {
              label: "Stock Available",
              name: "stockAvailable",
              type: "number",
            },
            { label: "Image URL", name: "image", type: "text", colSpan: true },
          ].map(({ label, name, type, colSpan }) => (
            <div key={name} className={colSpan ? "sm:col-span-2" : ""}>
              <Label htmlFor={name}>{label}</Label>
              <Input
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-end gap-5">
          <Button variant="destructive" type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" type="submit">
            Update
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default UpdateCar;
