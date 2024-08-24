import { ReactNode } from "react";
import DashboardSideBar from "./_components/dashboard-side-bar";
import DashboardTopNav from "./_components/dashbord-top-nav";
import { getLoggedInUser } from "@/utils/supabase";

export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await getLoggedInUser();

    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <DashboardSideBar user={user} />
            <DashboardTopNav>
                <main className="flex flex-col gap-4 p-4 lg:gap-6">
                    {children}
                </main>
            </DashboardTopNav>
        </div>
    );
}
