import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLoggedInUser } from "@/utils/supabase";

export default async function CreditsCardContent() {
    const user = await getLoggedInUser();

    return (
        <div className="text-2xl font-bold">
            <p>
                {user?.credits}{" "}
                <span className="text-xs text-muted-foreground">left</span>
            </p>
        </div>
    );
}
