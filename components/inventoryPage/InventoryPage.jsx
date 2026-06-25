"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetCarsQuery } from "../../app/redux/api/carsApi";
import useToast from "../Shared/useCustomToast";
import { useEffect, useState, useMemo } from "react";
import Loading from "@/app/loading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function InventoryPage() {
  const { data: carsData, isLoading, isError, error } = useGetCarsQuery();
  const { showError } = useToast();

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (isError) {
      console.error("Error While fetching Cars data: ", error.error);
      showError("Error While fetching Cars data");
    }
  }, [isError, error, showError]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredCars = useMemo(() => {
    if (!carsData) return [];
    return carsData.filter(
      (car) =>
        car.carName.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        car.brand.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        String(car.model || "")
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase()),
    );
  }, [carsData, debouncedSearch]);

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (isLoading) {
    return <Loading message="Loading Cars Data..." />;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Our Inventory
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Browse our vehicles. Search by{" "}
          <span className="text-white/80">name</span>,{" "}
          <span className="text-white/80">brand</span>, or{" "}
          <span className="text-white/80">model</span>.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex items-center gap-3">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <Input
            type="text"
            placeholder="Search by name, brand, or model…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 text-sm placeholder:text-white/30"
          />
        </div>
        {searchTerm && (
          <Button
            variant="outline"
            onClick={() => setSearchTerm("")}
            className="shrink-0 text-sm text-white/70 hover:text-white"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Result count */}
      <p className="mb-4 text-xs text-white/40">
        Showing {paginatedCars.length} of {filteredCars.length} vehicle
        {filteredCars.length !== 1 ? "s" : ""}
      </p>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedCars.length > 0 ? (
          paginatedCars.map((card) => (
            <div
              key={card._id}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                <Image
                  src={card.image}
                  alt={card.carName}
                  quality={100}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-base font-medium text-white">
                    {card.carName}
                  </h2>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/60">
                    {card.brand}
                  </span>
                </div>

                {card.model && (
                  <p className="text-xs text-white/40">Model: {card.model}</p>
                )}

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3">
                  <p className="text-sm font-semibold text-white">
                    {card.price}{" "}
                    <span className="text-xs font-normal text-white/40">
                      BDT
                    </span>
                  </p>
                  <Link href={`/inventory/${card._id}`}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-lg border-white/20 bg-transparent text-xs text-white/70 hover:border-white/40 hover:bg-white/10 hover:text-white"
                    >
                      View Details →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center gap-3 py-16 text-center">
            <svg
              className="h-10 w-10 text-white/20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <p className="text-sm text-white/40">
              No vehicles found for &ldquo;{debouncedSearch}&rdquo;
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="text-xs text-white/50 underline underline-offset-2 hover:text-white/80"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-between">
          <p className="w-24 border text-sm text-white/40">
            Page {currentPage} of {totalPages}
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-30" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-30"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

export default InventoryPage;
