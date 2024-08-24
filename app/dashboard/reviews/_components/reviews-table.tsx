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
import { CodeReview } from "@/types/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ReviewsTable({
    reviews,
}: {
    reviews: CodeReview[];
}) {
    return (
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
    );
}