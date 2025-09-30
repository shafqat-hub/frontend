import { Card, CardContent } from "@/components/ui/card"

export default function Card1() {
  return (
    <Card className="bg-white dark:bg-neutral-900">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
          Active Projects
        </h2>
        <p className="text-3xl font-bold mt-2">12</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">+2 this week</p>
      </CardContent>
    </Card>
  )
}
