"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

export default function MainLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      <main>{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
}
