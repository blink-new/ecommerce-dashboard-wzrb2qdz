import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentOrders = [
  {
    id: "#3210",
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "$1,999.00",
    status: "completed",
    avatar: "/avatars/01.png"
  },
  {
    id: "#3209", 
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "$39.00",
    status: "processing",
    avatar: "/avatars/02.png"
  },
  {
    id: "#3208",
    customer: "Isabella Nguyen", 
    email: "isabella.nguyen@email.com",
    amount: "$299.00",
    status: "completed",
    avatar: "/avatars/03.png"
  },
  {
    id: "#3207",
    customer: "William Kim",
    email: "will@email.com", 
    amount: "$99.00",
    status: "pending",
    avatar: "/avatars/04.png"
  },
  {
    id: "#3206",
    customer: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "$39.00", 
    status: "completed",
    avatar: "/avatars/05.png"
  }
]

const statusColors = {
  completed: "bg-green-100 text-green-800",
  processing: "bg-blue-100 text-blue-800", 
  pending: "bg-yellow-100 text-yellow-800",
  cancelled: "bg-red-100 text-red-800"
}

export function RecentOrders() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>
          You have 265 orders this month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={order.avatar} alt="Avatar" />
                <AvatarFallback>
                  {order.customer.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{order.customer}</p>
                <p className="text-sm text-muted-foreground">
                  {order.email}
                </p>
              </div>
              <div className="ml-auto flex items-center space-x-2">
                <Badge 
                  className={`${statusColors[order.status as keyof typeof statusColors]} border-0`}
                >
                  {order.status}
                </Badge>
                <div className="font-medium">{order.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}