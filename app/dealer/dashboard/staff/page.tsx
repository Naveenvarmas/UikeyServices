"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  UserCheck,
  UserX,
  Search,
  Filter,
  Plus,
  Eye,
  Pencil,
} from "lucide-react";

import StatCard from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const allStaff = [
  {
    id: "1",
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    role: "Manager",
    status: "Active",
    joinedDate: "12 Aug 2026",
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya@gmail.com",
    phone: "+91 9876543211",
    role: "Sales Executive",
    status: "Active",
    joinedDate: "10 Aug 2026",
  },
  {
    id: "3",
    name: "Arjun Kumar",
    email: "arjun@gmail.com",
    phone: "+91 9876543212",
    role: "Support",
    status: "Inactive",
    joinedDate: "05 Aug 2026",
  },
];

export default function StaffPage() {
  const router = useRouter();

  const [staff, setStaff] = useState(allStaff);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredStaff = staff.filter((member) => {
    if (search) {
      const value = search.toLowerCase();

      if (
        !member.name.toLowerCase().includes(value) &&
        !member.email.toLowerCase().includes(value) &&
        !member.phone.toLowerCase().includes(value)
      ) {
        return false;
      }
    }

    if (selectedRole && member.role !== selectedRole) {
      return false;
    }

    if (selectedStatus && member.status !== selectedStatus) {
      return false;
    }

    return true;
  });

  const activeStaff = staff.filter(
    (member) => member.status === "Active"
  ).length;

  const inactiveStaff = staff.filter(
    (member) => member.status === "Inactive"
  ).length;

  return (
    <div className="space-y-4 p-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Dealer Staff
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage and view all your dealer staff.
          </p>
        </div>

        <Button
        onClick={()=>router.push("/dealer/dashboard/staff/add")}>
          <Plus className="mr-2 h-4 w-4" />
          Add Staff
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-3 md:grid-cols-3">

        <StatCard
          title="Total Staff"
          value={String(staff.length)}
          icon={<Users size={18} />}
        />

        <StatCard
          title="Active Staff"
          value={String(activeStaff)}
          icon={<UserCheck size={18} />}
        />

        <StatCard
          title="Inactive Staff"
          value={String(inactiveStaff)}
          icon={<UserX size={18} />}
        />

      </div>

      {/* Search + Filter */}
      <div className="flex flex-wrap gap-3">

        <Input
          placeholder="Search staff..."
          className="max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          variant="outline"
          onClick={() => setFilterOpen(!filterOpen)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>

      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="flex flex-wrap gap-4 rounded-xl border bg-muted/30 p-4 items-end">

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-muted-foreground">
              Role
            </label>

            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-background"
            >
              <option value="">All Roles</option>
              <option value="Manager">Manager</option>
              <option value="Sales Executive">
                Sales Executive
              </option>
              <option value="Support">Support</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-muted-foreground">
              Status
            </label>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm bg-background"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <Button
            onClick={() => setFilterOpen(false)}
          >
            Apply
          </Button>

          <Button
            variant="outline"
            onClick={() => {
              setSelectedRole("");
              setSelectedStatus("");
              setFilterOpen(false);
            }}
          >
            Clear
          </Button>

        </div>
      )}

      {/* Staff Table */}
      <div className="rounded-xl border">

        <Table>

          <TableHeader>
            <TableRow>
              <TableHead>Staff</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined Date</TableHead>
              <TableHead className="text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>

            {filteredStaff.length === 0 ? (

              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-10 text-muted-foreground"
                >
                  No staff found
                </TableCell>
              </TableRow>

            ) : (

              filteredStaff.map((member) => (

                <TableRow key={member.id}>

                  <TableCell>
                    <div>
                      <p className="font-medium">
                        {member.name}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {member.email}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell>
                    {member.phone}
                  </TableCell>

                  <TableCell>
                    {member.role}
                  </TableCell>

                  <TableCell>
                    <Badge>
                      {member.status}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    {member.joinedDate}
                  </TableCell>

                  <TableCell>
                    <div className="flex justify-end gap-2">

                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() =>
                          router.push(
                            `/dealer/dashboard/staff/${member.id}`
                          )
                        }
                      >
                        <Eye size={16} />
                      </Button>

                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() =>
                          router.push(
                            `/dealer/dashboard/staff/${member.id}/edit`
                          )
                        }
                      >
                        <Pencil size={16} />
                      </Button>

                    </div>
                  </TableCell>

                </TableRow>

              ))

            )}

          </TableBody>

        </Table>

      </div>

      <p className="text-sm text-muted-foreground">
        {filteredStaff.length} staff members showing
        {" "}out of {staff.length}
      </p>

    </div>
  );
}