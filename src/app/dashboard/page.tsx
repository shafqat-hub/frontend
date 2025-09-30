import Card1 from "@/components/dashboard/cards/Card1"
import Card2 from "@/components/dashboard/cards/Card2"
import Card3 from "@/components/dashboard/cards/Card3"
import Card4 from "@/components/dashboard/cards/Card4"

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  )
}
