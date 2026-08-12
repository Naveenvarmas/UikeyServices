"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AddStaffPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Manager");
  const [status, setStatus] = useState("Active");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newStaff = {
      name,
      email,
      phone,
      role,
      status,
    };

    console.log("New staff:", newStaff);

    // API call will go here later

    router.push("/dealer/dashboard/staff");
  };

  return (
    <div className="space-y-6 p-4">

      {/* Header */}
      <div>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            router.push("/dealer/dashboard/staff")
          }
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="mt-4 text-3xl font-bold">
          Add Staff
        </h1>

        <p className="text-sm text-muted-foreground">
          Add a new dealer staff member.
        </p>
      </div>

      {/* Form */}
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle>
            Staff Information
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

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
                placeholder="Enter staff name"
                className="mt-1"
                required
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
                placeholder="Enter email"
                className="mt-1"
                required
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
                placeholder="Enter phone number"
                className="mt-1"
                required
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
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() =>
                  router.push("/dealer/dashboard/staff")
                }
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="flex-1"
              >
                Add Staff
              </Button>

            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}