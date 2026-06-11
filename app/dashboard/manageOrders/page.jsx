"use client";

import { DataTable } from "@/components/data-table";
import { useGetOrdersQuery } from "../../redux/api/orderListApi";
import Loading from "@/app/loading";

function ManageOrderPage() {
  const columns = [
    {
      accessorKey: "buyerName",
      header: "Buyer Name",
    },
    {
      accessorKey: "buyerEmail",
      header: "Buyer Email",
    },
    {
      accessorKey: "carName",
      header: "Car Name",
    },
    {
      accessorKey: "brand",
      header: "Car Brand",
    },
    {
      accessorKey: "modelName",
      header: "Car Model",
    },

    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ getValue }) => {
        const value = getValue();
        return (
          <button
            className={`cursor-default rounded-xl px-6 py-1 text-sm font-medium capitalize ${value === "Paid" ? "bg-green-400 text-black" : "bg-yellow-400 text-black"}`}
          >
            {value}
          </button>
        );
      },
    },
    {
      accessorKey: "orderStatus",
      header: "Car Status",
      cell: ({ getValue }) => {
        const value = getValue();
        let styles = "bg-gray-400 text-black";
        if (value === "Processing") styles = "bg-blue-400 text-black";
        if (value === "Delivered") styles = "bg-green-400 text-black";
        if (value === "Cancelled") styles = "bg-red-500 text-black";

        return (
          <button
            className={`rounded-xl px-6 py-1 text-sm font-medium capitalize ${styles}`}
          >
            {value}
          </button>
        );
      },
    },
  ];

  const { data: orderData, isLoading, isError, error } = useGetOrdersQuery();

  if (isLoading) {
    return <Loading message="Loading Orders data..." />;
  }

  if (isError) {
    console.log("error message: ", error || error.message);
    return error?.message || "something went wrong!";
  }

  if (!orderData) {
    return <h1>There are No Order Data.</h1>;
  }

  return <DataTable columns={columns} data={orderData} />;
}

export default ManageOrderPage;
