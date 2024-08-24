import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { PdfDocument } from "@/types/types";
import { SquareArrowOutUpRight } from "lucide-react";
import CsvRow from "./csv-row";

export default function DocumentsTable({
    documents,
}: {
    documents: PdfDocument[];
}) {
    return (
        <Table>
            <TableCaption>A list of your recent bank statements.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Document Id</TableHead>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Bank Name</TableHead>
                    <TableHead>View PDF</TableHead>
                    <TableHead>CSV</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {documents.map((document) => (
                    <TableRow key={document.document_id}>
                        <TableCell className="font-medium">
                            {document.document_id}
                        </TableCell>
                        <TableCell className="font-medium">
                            {document.document_name}
                        </TableCell>
                        <TableCell>{document.bank_name}</TableCell>
                        {/* <TableCell>{document.pdf_url}</TableCell> */}
                        <TableCell>
                            <div>
                                <a
                                    href={document.pdf_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline inline-block"
                                >
                                    <div className="flex items-center justify-start gap-1 cursor-pointer">
                                        <p>View</p>
                                        <SquareArrowOutUpRight
                                            height={15}
                                            width={15}
                                            className="mt-1"
                                        />
                                    </div>
                                </a>
                            </div>
                        </TableCell>
                        <TableCell>
                            <CsvRow url={document.csv_url!} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
