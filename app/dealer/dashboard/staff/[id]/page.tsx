import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StaffPageProps {
  params: Promise<{
    id: string;
  }>;
}

const staff = {
  id: "1",
  name: "Rahul Kumar",
  email: "rahul@gmail.com",
  phone: "+91 9876543210",
  role: "Manager",
  status: "Active",
  joinedDate: "12 Aug 2026",
};

export default async function StaffViewPage({
  params,
}: StaffPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-6 p-4">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <Link href="/dealer/dashboard/staff">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>

          <h1 className="mt-4 text-3xl font-bold">
            Staff Details
          </h1>

          <p className="text-sm text-muted-foreground">
            View dealer staff information.
          </p>
        </div>

        <Link href={`/dealer/dashboard/staff/${id}/edit`}>
          <Button>
            <Pencil className="mr-2 h-4 w-4" />
            Edit Staff
          </Button>
        </Link>

      </div>

      {/* Details */}
      <Card className="max-w-3xl">

        <CardHeader>
          <CardTitle>
            {staff.name}
          </CardTitle>
        </CardHeader>

        <CardContent>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <p className="text-sm text-muted-foreground">
                Full Name
              </p>

              <p className="mt-1 font-medium">
                {staff.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Email
              </p>

              <p className="mt-1 font-medium">
                {staff.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Phone
              </p>

              <p className="mt-1 font-medium">
                {staff.phone}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Role
              </p>

              <p className="mt-1 font-medium">
                {staff.role}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Status
              </p>

              <div className="mt-1">
                <Badge>
                  {staff.status}
                </Badge>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Joined Date
              </p>

              <p className="mt-1 font-medium">
                {staff.joinedDate}
              </p>
            </div>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}