"use client";

import { useParams, useRouter } from "next/navigation";
import { useGetCarsQuery } from "../../redux/api/carsApi";
import useToast from "../../../components/Shared/useCustomToast";
import { useEffect, useMemo } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { useGetUsersQuery } from "../../redux/api/usersApi";
import { useSelector } from "react-redux";
import { useAddOrderMutation } from "../../redux/api/orderListApi";
import Loading from "@/app/loading";

function CarDetails() {
  const { id } = useParams();
  const { showError, showSuccess, showInfo } = useToast();
  const router = useRouter();

  const currentUser = useSelector((state) => state.user);

  const [addOrder] = useAddOrderMutation();
  const { data: userData, isLoading: usersLoading } = useGetUsersQuery();
  const {
    data: carsData,
    isLoading: carsLoading,
    isError,
    error,
  } = useGetCarsQuery();

  const usersArray = Array.isArray(userData) ? userData : userData?.users;
  const user = useMemo(() => {
    return usersArray?.find(
      (u) =>
        u.userEmail?.toLowerCase().trim() ===
        currentUser?.userEmail?.toLowerCase().trim(),
    );
  }, [usersArray, currentUser]);

  const carInfo = useMemo(() => {
    return carsData?.find((car) => car._id === id);
  }, [carsData, id]);

  useEffect(() => {
    if (isError) {
      console.error("Error While fetching Cars data:", error?.error);
      showError("Error while fetching car data.");
    }
  }, [isError, error, showError]);

  if (carsLoading || usersLoading) {
    return <Loading message="Loading User Data..." />;
  }

  if (!carInfo) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <svg
          className="h-12 w-12 text-white/20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          />
        </svg>
        <p className="text-sm text-white/50">Vehicle not found.</p>
        <Link href="/inventory">
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 text-white/60 hover:text-white"
          >
            ← Back to Inventory
          </Button>
        </Link>
      </div>
    );
  }

  const handleSubmit = async () => {
    if (!user) {
      showInfo("Please Sign-In, to place an order.");
      showError("Action not permitted!");
      router.push("/authintication");
      return;
    }

    if (user?.userRole === "admin") {
      showInfo("Action not permitted in Admin Pass.");
      return;
    }

    const orderData = {
      buyerName: user.userName,
      buyerEmail: user.userEmail,
      buyerId: user._id,
      brand: carInfo.brand,
      carName: carInfo.carName,
      modelName: carInfo.modelName,
      price: carInfo.price,
      image: carInfo.image,
      paymentStatus: "Unpaid",
      orderStatus: "Pending",
      transactionId: "112233",
    };

    try {
      await addOrder(orderData).unwrap();
      showSuccess("Order Taken Successfully");
      router.push("/inventory");
    } catch (error) {
      console.error("Order error:", error);
      showError("Something Went Wrong!, Try Again");
      router.push("/inventory");
    }
  };

  const details = [
    { label: "Brand", value: carInfo.brand },
    { label: "Car Name", value: carInfo.carName },
    { label: "Model", value: carInfo.modelName },
    { label: "Release Year", value: carInfo.releaseYear },
    { label: "Stock Available", value: carInfo.stockAvailable },
  ];

  return (
    <div className="mx-auto min-h-screen w-full max-w-6xl px-6 py-20">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-xs text-white/40">
        <Link
          href="/inventory"
          className="transition-colors hover:text-white/70"
        >
          Inventory
        </Link>
        <span>/</span>
        <span className="text-white/60">{carInfo.carName}</span>
      </nav>

      {/* Main Card */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="flex flex-col lg:flex-row">
          {/* Image Panel */}
          <div className="relative flex w-full items-center justify-center bg-white/5 p-5 lg:w-1/2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={carInfo.image}
                alt={`${carInfo.carName}`}
                fill
                className="rounded-xl object-cover"
                priority
              />
              {/* subtle gradient overlay at bottom of image */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Details Panel */}
          <div className="flex w-full flex-col justify-between gap-6 p-8 lg:w-1/2">
            {/* Title */}
            <div>
              <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-0.5 text-xs text-white/50">
                {carInfo.brand}
              </span>
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                {carInfo.carName}
              </h1>
              {carInfo.modelName && (
                <p className="mt-1 text-sm text-white/40">
                  {carInfo.modelName}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <p className="text-xs text-white/40">Price</p>
              <p className="mt-1 text-3xl font-bold text-white">
                {carInfo.price}{" "}
                <span className="text-base font-normal text-white/40">BDT</span>
              </p>
            </div>

            {/* Spec rows */}
            <div className="divide-y divide-white/[0.06]">
              {details.map(({ label, value }) =>
                value ? (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="text-xs text-white/40">{label}</span>
                    <span className="text-sm text-white/80">{value}</span>
                  </div>
                ) : null,
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <Link href="/inventory" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-white/15 bg-transparent text-sm text-white/60 hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  ← Back
                </Button>
              </Link>
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-white text-sm font-medium text-black hover:bg-white/90"
              >
                Add to Order List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
