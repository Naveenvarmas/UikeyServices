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

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  status?: string;
};

export default function AddStaffPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Manager");
  const [status, setStatus] = useState("Active");

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Name validation
    const trimmedName = name.trim();

    if (!trimmedName) {
      newErrors.name = "Name is required";
    } else if (trimmedName.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      newErrors.name =
        "Name can contain only letters and spaces";
    }

    // Email validation
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(trimmedPhone)) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number";
    }

    // Role validation
    if (!role) {
      newErrors.role = "Please select a role";
    }

    // Status validation
    if (!status) {
      newErrors.status = "Please select a status";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    const newStaff = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
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
      <div className="flex items-center gap-4">

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

        <div>
          <h1 className="text-3xl font-bold">
            Add Staff
          </h1>

          <p className="text-sm text-muted-foreground">
            Add a new dealer staff member.
          </p>
        </div>

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
            noValidate
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium"
              >
                Full Name
              </label>

              <Input
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);

                  if (errors.name) {
                    setErrors((prev) => ({
                      ...prev,
                      name: undefined,
                    }));
                  }
                }}
                placeholder="Enter staff name"
                className={`mt-1 ${
                  errors.name
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Email
              </label>

              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);

                  if (errors.email) {
                    setErrors((prev) => ({
                      ...prev,
                      email: undefined,
                    }));
                  }
                }}
                placeholder="Enter email"
                className={`mt-1 ${
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium"
              >
                Phone
              </label>

              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);

                  if (errors.phone) {
                    setErrors((prev) => ({
                      ...prev,
                      phone: undefined,
                    }));
                  }
                }}
                placeholder="Enter 10-digit phone number"
                maxLength={10}
                className={`mt-1 ${
                  errors.phone
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
              />

              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="text-sm font-medium"
              >
                Role
              </label>

              <select
                id="role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);

                  if (errors.role) {
                    setErrors((prev) => ({
                      ...prev,
                      role: undefined,
                    }));
                  }
                }}
                className={`mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm ${
                  errors.role
                    ? "border-red-500"
                    : ""
                }`}
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

              {errors.role && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.role}
                </p>
              )}
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="text-sm font-medium"
              >
                Status
              </label>

              <select
                id="status"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);

                  if (errors.status) {
                    setErrors((prev) => ({
                      ...prev,
                      status: undefined,
                    }));
                  }
                }}
                className={`mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm ${
                  errors.status
                    ? "border-red-500"
                    : ""
                }`}
              >
                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>
              </select>

              {errors.status && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.status}
                </p>
              )}
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