import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import CsvDialogData from "./csv-dialog-data";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export default function CsvDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <p className="cursor-pointer hover:underline">View</p>
            </DialogTrigger>
            <DialogContent className="w-4/5 h-4/5 flex flex-col justify-start items-start overflow-auto">
                <DialogHeader>
                    <DialogTitle>CSV</DialogTitle>
                    <DialogDescription>
                        Preview of your bank statement
                    </DialogDescription>
                </DialogHeader>
                <Suspense
                    fallback={
                        <div className="flex justify-center items-center">
                            <Loader2 className="animate-spin" />
                        </div>
                    }
                >
                    <CsvDialogData />
                </Suspense>
            </DialogContent>
        </Dialog>
    );
}
