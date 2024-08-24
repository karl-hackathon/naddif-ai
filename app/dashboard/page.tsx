import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BarChartComponent } from "./_components/bar-chart";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChartBetter } from "./_components/bar-chart-better";
import { getLoggedInUser } from "@/utils/supabase";
import CreditsCardContent from "./_components/credits-card-content";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
    FileUploader,
    FileUploaderItem,
} from "../../components/ui/file-uploader";
import DocumentUploader from "./_components/document-uploader";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
    return (
        <div className="flex flex-col justify-center items-start flex-wrap px-4 pt-4 gap-4">
            <Card className="w-[20rem]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Credits
                    </CardTitle>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                    >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                </CardHeader>
                <CardContent>
                    <Suspense fallback={<Skeleton className="w-[100px] h-8" />}>
                        <CreditsCardContent />
                    </Suspense>
                </CardContent>
            </Card>
            {/* <div className="flex flex-wrap gap-2">
                <BarChartComponent />
                <BarChartBetter />
            </div> */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 w-full gap-3">
                <Card className="">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Convert Here</CardTitle>
                            <CardDescription>
                                Drop your bank statement here, and we'll do the
                                magic!
                            </CardDescription>
                        </div>
                        <Button asChild size="sm" className="ml-auto gap-1">
                            <Link href="/dashboard/documents">
                                View All
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div>
                            {/* Adjust maxHeight according to your design */}
                            {/* <main className="flex flex-col gap-2 lg:gap-2 h-[300px] w-full">
                                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-xl font-bold tracking-tight">
                                            Drag
                                        </h1>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Projects will show when you start
                                            using Nextjs Starter Kit
                                        </p>
                                    </div>
                                </div>
                            </main> */}
                            <DocumentUploader />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
