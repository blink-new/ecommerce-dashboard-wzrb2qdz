import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CustomersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
          <CardDescription>
            Manage customer relationships, profiles, and communication.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-muted-foreground">Customer management interface coming soon...</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}