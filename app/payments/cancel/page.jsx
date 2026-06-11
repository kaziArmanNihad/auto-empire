"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentCancelPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard/transections");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="max-w-md rounded-xl border border-yellow-500 bg-black p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-yellow-500">
          Payment Canceled ⚠️
        </h1>
        <p className="mt-3 text-white">
          Your payment has been canceled. If this was unintentional, you can try
          again from your transactions page.
        </p>
        <p className="mt-1 text-sm text-white">
          You will be redirected shortly...
        </p>

        <button
          onClick={() => router.push("/dashboard/transections")}
          className="mt-6 w-full rounded-lg bg-yellow-500 px-4 py-2 font-medium text-black hover:bg-yellow-600"
        >
          Go to My Transactions Page
        </button>
      </div>
    </main>
  );
}
