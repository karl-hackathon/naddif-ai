"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { createBrowserClient } from "@supabase/ssr"
import { User } from "@/types/types"
const chartData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 275, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const colors = [
  "var(--color-chrome)",
  "var(--color-safari)",
  "var(--color-firefox)",
  "var(--color-edge)",
  "var(--color-other)"
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function BarChartComponent({ barData }: { barData: any }) {
  // export function BarChartComponent({ user }: { user:User }) {
  // const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!);
  // const [barData, setBarData] = useState<any>([]);

  // useEffect(() => {
  //     const fetchBarData = async () => {
  //       const { data: reviews }= await supabase.from('code_reviews').select('*').eq('user_id', user?.user_id);
  //       const severityCount = reviews?.reduce((acc, item) => {
  //         acc[item.severity] = (acc[item.severity] || 0) + 1;
  //         return acc;
  //       }, {});
        
  //       const chartData = Object.entries(severityCount).map(([severity, count], index) => ({
  //         severity: parseInt(severity, 10), // Using severity number as browser name
  //         count: count, // Using count as number of visitors
  //         fill: colors[index % colors.length] // Dynamic fill color based on severity
  //       }));

  //       console.log(chartData)

  //       setBarData(chartData);
  //     }

  //     fetchBarData();
  // }, [])
  
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Severit Count</CardTitle>
        <CardDescription>All time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={barData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="severity"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={(value) =>
              //   chartConfig[value as keyof typeof chartConfig]?.label
              // }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="count"
              strokeWidth={2}
              radius={8}
              // activeIndex={2}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Total <span className="font-bold">{barData.reduce((sum: any, item: any) => sum + item.count, 0)}</span> <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
        Bar chart showcasing the severity of your code reviews
        </div>
      </CardFooter>
    </Card>
  )
}
