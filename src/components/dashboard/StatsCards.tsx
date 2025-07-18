import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  TrendingUp,
  TrendingDown
} from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    description: "from last month"
  },
  {
    title: "Orders",
    value: "2,350",
    change: "+180.1%",
    trend: "up", 
    icon: ShoppingCart,
    description: "from last month"
  },
  {
    title: "Customers",
    value: "12,234",
    change: "+19%",
    trend: "up",
    icon: Users,
    description: "from last month"
  },
  {
    title: "Products",
    value: "573",
    change: "-4.3%",
    trend: "down",
    icon: Package,
    description: "from last month"
  }
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown
        
        return (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Badge 
                  variant={stat.trend === "up" ? "default" : "destructive"}
                  className="flex items-center space-x-1 px-1.5 py-0.5"
                >
                  <TrendIcon className="h-3 w-3" />
                  <span>{stat.change}</span>
                </Badge>
                <span>{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}