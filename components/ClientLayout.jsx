'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import { ThemeProvider } from "./theme-provider";
import { AuthProvider } from "./authProvider/authProvider";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
