"use client";

import { useState } from "react";
import { Search, Plus, Pencil, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function CategoriesPage() {

  // Sari categories ki list
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", products: 15, status: "Active" },
    { id: 2, name: "Home Appliances", products: 12, status: "Active" },
    { id: 3, name: "Mobile Accessories", products: 8, status: "Active" },
    { id: 4, name: "Fashion", products: 4, status: "Inactive" },
  ]);

  // Search box ki value
  const [search, setSearch] = useState("");

  // Add modal open hai ya nahi
  const [addOpen, setAddOpen] = useState(false);

  // Edit modal open hai ya nahi
  const [editOpen, setEditOpen] = useState(false);

  // Delete confirm modal
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Naya category ka naam (Add modal ke liye)
  const [newName, setNewName] = useState("");
  const [newStatus, setNewStatus] = useState("Active");

  // Edit ke liye current category
  const [editData, setEditData] = useState({ id: 0, name: "", status: "Active" });

  // Search filter
  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // Naya category add karo
  function handleAdd() {
    if (!newName.trim()) return;
    const newCat = {
      id: Date.now(),
      name: newName.trim(),
      products: 0,
      status: newStatus,
    };
    setCategories([...categories, newCat]);
    setNewName("");
    setNewStatus("Active");
    setAddOpen(false);
  }

  // Edit save karo
  function handleEditSave() {
    if (!editData.name.trim()) return;
    setCategories(categories.map((c) =>
      c.id === editData.id ? { ...c, name: editData.name, status: editData.status } : c
    ));
    setEditOpen(false);
  }

  // Category delete karo
  function handleDelete(id: number) {
    setCategories(categories.filter((c) => c.id !== id));
    setDeleteId(null);
  }

  return (
    <div className="space-y-4 p-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-sm text-muted-foreground">Manage product categories.</p>
        </div>
        <Button onClick={() => setAddOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search category..."
          className="pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category Name</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-10 text-muted-foreground">
                  Koi category nahi mili
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>{category.products}</TableCell>
                  <TableCell>
                    <Badge variant={category.status === "Active" ? "default" : "secondary"}>
                      {category.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditData({ id: category.id, name: category.name, status: category.status });
                          setEditOpen(true);
                        }}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDeleteId(category.id)}
                      >
                        <Trash2 size={16} className="text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* ========== ADD MODAL ========== */}
      {addOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#000000", borderRadius: "16px", padding: "24px", width: "360px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "700", margin: 0 }}>Add Category</h2>
              <button onClick={() => setAddOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#888" }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "#555", display: "block", marginBottom: "6px" }}>Category Name</label>
                <input
                  type="text"
                  placeholder="e.g. Electronics"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "#555", display: "block", marginBottom: "6px" }}>Status</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", background:"black"}}
                >
                  <option  value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                <button
                  onClick={() => setAddOpen(false)}
                  style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd", background: "linear-gradient(135deg,#2b0a6b,#8e2de2)", fontSize: "14px" }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg,#2b0a6b,#8e2de2)", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== EDIT MODAL ========== */}
      {editOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", width: "360px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "700", margin: 0 }}>Edit Category</h2>
              <button onClick={() => setEditOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#888" }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "#555", display: "block", marginBottom: "6px" }}>Category Name</label>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "13px", fontWeight: "600", color: "#555", display: "block", marginBottom: "6px" }}>Status</label>
                <select
                  value={editData.status}
                  onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "8px", border: "1px solid #ddd", fontSize: "14px" }}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                <button
                  onClick={() => setEditOpen(false)}
                  style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd", background: "#fff", cursor: "pointer", fontSize: "14px" }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditSave}
                  style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg,#2b0a6b,#8e2de2)", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== DELETE CONFIRM MODAL ========== */}
      {deleteId !== null && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: "#161616", borderRadius: "16px", padding: "24px", width: "320px", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <h2 style={{ fontSize: "17px", fontWeight: "700", margin: "0 0 8px 0" }}>Delete Category?</h2>
            <p style={{ fontSize: "13px", color: "#888", margin: "0 0 20px 0" }}>this catagory deleted permanenty.</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => setDeleteId(null)}
                style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ddd", background: "#5e4fa5", cursor: "pointer", fontSize: "14px" }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "none", background: "#e53e3e", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}