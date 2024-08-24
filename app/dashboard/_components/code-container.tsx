"use client"

import { LoadingButton } from "@/components/ui/loading-button";
import { Textarea } from "@/components/ui/textarea";
import { CodeReview } from "@/types/types";
import { useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { createBrowserClient } from "@supabase/ssr";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";


export default function CodeContainer() {
    const { user } = useUser()
    const [code, setCode] = useState('')
    const [isReviewing, setIsReviewing] = useState(false);

    const reviewCode = async () => {
        setIsReviewing(true);
        try {
            const result = await axios.post('/api/ai/gemini', { code });
            if (result.status === 500) {
                toast.error("Something went wrong while analyzing your code")
                setIsReviewing(false);
                return
            }

            const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!);
            
            result.data.res.forEach(async (res: CodeReview) => {
                const { error } = await supabase.rpc('decrement_credits', { p_user_id: user?.id, decrement_value: code.length })

                if (error) {
                    if (error.code === "P0001") {
                        toast.error("Insufficient Balance")
                    } else {
                        console.log(error)
                        toast.error("Something went wrong while analyzing your code")
                    }

                    setIsReviewing(false);
                    return
                }

                await supabase.from('code_reviews').insert({
                    user_id: user?.id,
                    suggestion: res.suggestion,
                    description: res.description,
                    severity: res.severity,
                    code,
                })
            })

            setIsReviewing(false);
            toast.success(<div>
                    <p>Your code was scanned successfully, see the full report <Link href="/dashboard/reviews" className="underline font-bold">here</Link></p>
                </div>
            );
        } catch (error) {
            toast.error("Something went wrong while analyzing your code")
            setIsReviewing(false);
            return
        }
    }


    return (
        <div>
            <Textarea placeholder="Paste your code here" onChange={(e) => setCode(e.target.value)} className="h-[300px]" disabled={isReviewing}/>
            {
                code.length !== 0 && (
                    <LoadingButton className="mt-5" onClick={reviewCode} loading={isReviewing}>Review</LoadingButton>
                )
            }
        </div>
    )
}