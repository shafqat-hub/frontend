import { Card, CardContent } from "@/components/ui/card"

export default function Card3() {
  return (
    <Card className="bg-white dark:bg-neutral-900">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
          Clients
        </h2>
        <p className="text-3xl font-bold mt-2">8</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">+1 new this month</p>
      </CardContent>
    </Card>
  )
}
