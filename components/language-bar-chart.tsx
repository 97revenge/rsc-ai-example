"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Badge } from "./ui/badge";

export const description = "A horizontal bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  JavaScript: {
    label: "JavaScript",
    color: "hsl(var(--chart-1))",
  },
  CSS: {
    label: "CSS",
    color: "hsl(var(--chart-2))",
  },
  TypeScript: {
    label: "TypeScript",
    color: "hsl(var(--chart-3))",
  },
  HTML: {
    label: "HTML",
    color: "hsl(var(--chart-4))",
  },
  Shell: {
    label: "Shell",
    color: "hsl(var(--chart-5))",
  },
  Batchfile: {
    label: "Batchfile",
    color: "hsl(var(--chart-6))",
  },
  Dockerfile: {
    label: "Dockerfile",
    color: "hsl(var(--chart-7))",
  },
  MDX: {
    label: "MDX",
    color: "hsl(var(--chart-8))",
  },
  Markdown: {
    label: "Markdown",
    color: "hsl(var(--chart-9))",
  },
  TeX: {
    label: "TeX",
    color: "hsl(var(--chart-10))",
  },
  Lex: {
    label: "Lex",
    color: "hsl(var(--chart-11))",
  },
  PowerShell: {
    label: "PowerShell",
    color: "hsl(var(--chart-12))",
  },
} satisfies ChartConfig;

export const GitHubLanguageChart = ({ content }: { content: Array<any> }) => {
  const chartData = content.map((obj) => {
    const [language, value] = Object.entries(obj)[0];
    return { language, value };
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>lines of code</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="w-[100%] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {chartData.map((item: any) => {
            return (
              <>
                <div className=" flex items-start justify-start w-auto  rounded-xl   ">
                  <Badge variant={"outline"} className="w-auto">
                    {item.language}
                  </Badge>
                  <Badge
                    className={
                      item.value <= 499
                        ? "w-auto min-w-xs bg-red-500"
                        : "w-auto min-w-xs bg-green-500 text-black "
                    }
                  >
                    {item.value as React.ReactNode}
                  </Badge>
                </div>
              </>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};
