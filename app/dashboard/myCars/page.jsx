"use client";

import { DataTable } from "@/components/data-table";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loading from "@/app/loading";
import Image from "next/image";
import { useGetOrdersQuery } from "../../redux/api/orderListApi";
import PaymentCell from "../../../components/cells/paymentCell/page";
import OrderCell from "../../../components/cells/orderCell/page";

function MyCarsPage() {
  const columns = [
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ getValue }) => (
        <Image
          src={getValue()}
          alt="Car"
          width={80}
          height={60}
          className="rounded object-cover"
        />
      ),
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
      accessorKey: "price",
      header: "Car Price",
      cell: ({ getValue }) => `${Number(getValue()).toLocaleString()} BTD`,
    },
    {
      accessorKey: "paymentStatus",
      header: "Payment Status",
      cell: ({ getValue, row }) => {
        return <PaymentCell getValue={getValue} orderData={row.original} />;
      },
    },
    {
      accessorKey: "orderStatus",
      header: "Order Status",
      cell: ({ getValue }) => {
        return <OrderCell getValue={getValue} />;
      },
    },
  ];

  const { user, isLoading, isError, error } = useCurrentUser();
  const {
    data: orderData,
    isLoading: ordersLoading,
    isError: ordersIsError,
    error: ordersError,
  } = useGetOrdersQuery();

  if (isLoading || ordersLoading)
    return <Loading message="Loading orders data..." />;

  if (isError || ordersIsError || !user || !orderData) {
    return (
      <p className="text-red-600">
        Error:{" "}
        {error?.message || ordersError?.message || "Failed to load data."}
      </p>
    );
  }

  const orders =
    orderData?.filter((order) => order.buyerEmail === user?.userEmail) ?? [];

  return <DataTable columns={columns} data={orders} />;
}

export default MyCarsPage;
