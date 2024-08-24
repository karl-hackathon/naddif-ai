"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function EmptyDocuments({ error }: { error: any | null }) {
    if (error) {
        toast.error("Couldn't fetch your documents");
    }

    return (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold tracking-tight">
                    You have no documents
                </h1>
                <p className="text-sm text-muted-foreground mb-3">
                    Document will show when you start using Naddif AI
                </p>
                <Button>
                    <Link href="/dashboard">Convert PDFs</Link>
                </Button>
            </div>
        </div>
    );
}
