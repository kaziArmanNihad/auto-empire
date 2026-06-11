"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentFailPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard/transections");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md rounded-xl border border-red-500 bg-black p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-red-600">Payment Failed ❌</h1>
        <p className="mt-3 text-white">
          Oops! Something went wrong, and your payment could not be processed.
        </p>
        <p className="mt-1 text-sm text-white">
          You will be redirected shortly...
        </p>

        <button
          onClick={() => router.push("/dashboard/transections")}
          className="mt-6 w-full rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
        >
          Go to My Transactions Page
        </button>
      </div>
    </main>
  );
}
