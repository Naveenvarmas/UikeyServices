"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function EditStaffPage() {
  const router = useRouter();
  const params = useParams();

  const [name, setName] = useState("Rahul Kumar");
  const [email, setEmail] = useState("rahul@gmail.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [role, setRole] = useState("Manager");
  const [status, setStatus] = useState("Active");

  function handleUpdate() {
    console.log({
      id: params.id,
      name,
      email,
      phone,
      role,
      status,
    });

    router.push(`/dealer/dashboard/staff/${params.id}`);
  }

  return (
    <div className="space-y-6 p-4">

      {/* Header */}
      <div>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            router.push(
              `/dealer/dashboard/staff/${params.id}`
            )
          }
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="mt-4 text-3xl font-bold">
          Update Staff
        </h1>

        <p className="text-sm text-muted-foreground">
          Update dealer staff information.
        </p>
      </div>

      {/* Form */}
      <Card className="max-w-3xl">

        <CardHeader>
          <CardTitle>
            Staff Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium">
              Full Name
            </label>

            <Input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <Input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="mt-1"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">
              Phone
            </label>

            <Input
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="mt-1"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm font-medium">
              Role
            </label>

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option value="Manager">
                Manager
              </option>

              <option value="Sales Executive">
                Sales Executive
              </option>

              <option value="Support">
                Support
              </option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">

            <Button
              variant="outline"
              className="flex-1"
              onClick={() =>
                router.push(
                  `/dealer/dashboard/staff/${params.id}`
                )
              }
            >
              Cancel
            </Button>

            <Button
              className="flex-1"
              onClick={handleUpdate}
            >
              Update Staff
            </Button>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}