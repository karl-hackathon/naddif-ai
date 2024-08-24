import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BarChartComponent } from "../_components/bar-chart";
import { BarChartBetter } from "../_components/bar-chart-better";
import { getLoggedInUser } from "@/utils/supabase";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";


const colors = [
  "var(--color-chrome)",
  "var(--color-safari)",
  "var(--color-firefox)",
  "var(--color-edge)",
  "var(--color-other)"
];

export default async function AnalyticsPage() {
  const user = await getLoggedInUser()
  const cookieStore = cookies();

  const supabase: any = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data: reviews } = await supabase.from('code_reviews').select('*').eq('user_id', user?.user_id);
  const severityCount = reviews?.reduce((acc: any, item: any) => {
    acc[item.severity] = (acc[item.severity] || 0) + 1;
    return acc;
  }, {});
  
  const barData = Object.entries(severityCount).map(([severity, count], index) => ({
    severity: parseInt(severity, 10), // Using severity number as browser name
    count: count, // Using count as number of visitors
    fill: colors[index % colors.length] // Dynamic fill color based on severity
  }));


  return (
    <main className="flex min-w-screen p-4 flex-col items-start justify-between ">
          <div className="flex flex-wrap gap-2">
            <BarChartComponent barData={barData} />
            <BarChartBetter />
        </div>
    </main>
  )
}