import { Suspense } from "react";
import DocumentContainer from "./_components/reviews-container";
import { Skeleton } from "@/components/ui/skeleton";

export default async function ReviewsPage() {
    return (
        <main className="flex flex-col gap-2 lg:gap-2 min-h-[90vh] w-full">
            <Suspense
                fallback={
                    <div className="flex flex-col gap-5 mt-3">
                        {Array(15)
                            .fill(0)
                            .map((_, i) => (
                                <Skeleton
                                    className="h-7 w-full"
                                    key={`document-row-${i}`}
                                />
                            ))}
                        <Skeleton />
                    </div>
                }
            >
                <DocumentContainer />
            </Suspense>
        </main>
    );
}
