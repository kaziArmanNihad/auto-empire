"use client";

import React, { useState } from "react";
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
import { useRouter } from "next/navigation";
import { useAddCarMutation } from "../../../redux/api/carsApi";
import useToast from "../../../../components/Shared/useCustomToast";

function AddCarForm() {
  const initialFormData = {
    image: "",
    carName: "",
    brand: "",
    modelName: "",
    price: "",
    releaseYear: "",
    stockAvailable: "",
  };

  // states
  const route = useRouter();
  const { showSuccess, showError } = useToast();
  const [formData, setFormData] = useState(initialFormData);

  // rtk query
  const [addCar] = useAddCarMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // sending data in the database
    addCar(formData)
      .unwrap()
      .then(() => {
        showSuccess("Car added successfully!");
        route.push("/dashboard/manageCars");
      })
      .catch((error) => {
        console.log("Error adding car:", error);
        showError("Failed to add car. Please try again.");
      })
      .finally(() => setFormData(initialFormData));
  };

  // handle cancel
  const handleCancel = () => {
    setFormData(initialFormData);
    route.push("/dashboard/manageCars");
  };

  return (
    <Card className="mx-auto my-5 w-11/12 max-w-4xl px-4">
      <CardHeader>
        <CardTitle className="text-center">Add New Car</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
            <div key={name} className={colSpan ? "md:col-span-2" : ""}>
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
        <CardFooter className="flex justify-end gap-5 px-4 py-2">
          <Button variant="destructive" type="button" onClick={handleCancel}>
            Back
          </Button>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default AddCarForm;
