"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function EmptyCode({ error }: { error: any | null }) {
    if (error) {
        toast.error("Couldn't fetch your codes");
    }

    return (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold tracking-tight">
                    You have no codes
                </h1>
                <p className="text-sm text-muted-foreground mb-3">
                    Codes will show when you start using Naddif AI
                </p>
                <Button>
                    <Link href="/dashboard">Review My Code</Link>
                </Button>
            </div>
        </div>
    );
}


[
    {
        "suggestion": "Consider removing the unused 'error' parameter from the 'EmptyCode' function.",
        "description": "The 'error' parameter is passed to the 'EmptyCode' function but is never used within the function body.  This unused parameter might indicate a potential code smell and could be removed to improve code clarity."
    },
    {
        "suggestion": "Rename the component to better reflect its purpose, as it handles both empty state and potential errors.",
        "description": "The component name 'EmptyCode' might be too specific, considering it also handles potential errors. A more appropriate name like 'CodeListStatus' or 'CodeListMessage' would better reflect its broader responsibility."
    }
]