"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ExternalLink, SquareArrowOutUpRight } from "lucide-react";
import CsvRow from "./csv-row";
import { CodeReview, User } from "@/types/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@clerk/nextjs";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect, useState } from "react";
import EmptyCode from "./empty-code";
import { Skeleton } from "@/components/ui/skeleton";

export default function ReviewsTable() {
    const { user: u } = useUser()
    const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!);
    const [reviews, setReviews] = useState<CodeReview[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<any>(null)

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true);
            const { data, error } = await supabase
            .from("code_reviews")
            .select("*")
            // .eq("user_id", user?.user_id)
            .eq("user_id", u?.id)
            .order("id", { ascending: false });
            setReviews(data!)
            setIsLoading(false);
            setErrors(error)
        }

        fetchReviews();
    }, [])

    if (isLoading) {
        return <div className="flex flex-col gap-5 mt-3">
        {Array(15)
            .fill(0)
            .map((_, i) => (
                <Skeleton
                    className="h-7 w-full"
                    key={`document-row-${i}`}
                />
        ))}
    </div>
    }

    return (
        <>
            {reviews && reviews.length > 0 ? (
                <Table>
                <TableCaption>A list of your code reviews.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Id</TableHead>
                        <TableHead>Suggestion</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Code</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reviews.map((review) => (
                        <TableRow key={review.id}>
                            <TableCell className="font-medium">
                                {review.id}
                            </TableCell>
                            <TableCell className="font-medium">
                                {review.suggestion}
                            </TableCell>
                            <TableCell>{review.description}</TableCell>
                            <TableCell>
                            {review.severity < 4 ? (<Badge variant="success">{review.severity}</Badge>)
                            : review.severity < 8 ? (<Badge variant="warning">{review.severity}</Badge>)
                            : (<Badge variant="destructive">{review.severity}</Badge>)}
                            </TableCell>
                            <TableCell><Link href={`/dashboard/reviews/${review.id}`} className="hover:underline">
                                <div className="flex items-center justify-start gap-1">
                                    <p>View </p>
                                    <ExternalLink size={15}/>
                                </div>
                            </Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            ) : (
                <EmptyCode error={errors} />
            )}
        </>
        
    );
}