"use client";

import { useEffect } from "react";
import { useAuth } from "@/AuthContext/AuthContext";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !token) {
      router.push("/auth/login");
    }
  }, [token, loading, router]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {token && (
        <div>
          <Header />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-hidden pt-14 bg-[#f8f8f8] dark:bg-[#131315]">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
}
