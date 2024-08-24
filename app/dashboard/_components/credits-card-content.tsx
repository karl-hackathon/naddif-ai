"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/types/types";
import { useUser } from "@clerk/nextjs";
import { createBrowserClient } from "@supabase/ssr";
import { useEffect, useState } from "react";

export default function CreditsCardContent() {
    const { user: u } = useUser()
    const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!);
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            const { data } = await supabase.from('user').select('*').eq('user_id', u?.id).single();
            setUser(data)
            setIsLoading(false);
        }

        fetchUser();
    }, [])
    

    return (
        <>
        {
            isLoading ? (
                <Skeleton className="w-[100px] h-8" />
            ) : (
                <div className="text-2xl font-bold">
                    <p>
                        {user?.credits}{" "}
                        <span className="text-xs text-muted-foreground">left</span>
                    </p>
                </div>
            )
        }
        </>
    );
}
