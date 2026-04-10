import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  membership_type: string;
  duration: string;
  notes: string;
  status: string;
  created_at: string;
};

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  converted: "bg-green-100 text-green-700",
  declined: "bg-red-100 text-red-700",
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    if (!supabase) {
      console.error("Supabase not configured");
      setLoading(false);
      return;
    }
    
    const { data, error } = await supabase
      .from("membership_applications")
      .select("*");
    
    if (error) {
      console.error("Error fetching applications:", error.message);
    } else if (data) {
      setApplications(data);
    }
    
    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    if (!supabase) return;
    
    const { error } = await supabase
      .from("membership_applications")
      .update({ status })
      .eq("id", id);
    
    if (error) {
      console.error("Error updating status:", error.message);
    } else {
      setApplications(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    }
  };

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    navigate("/admin/login");
  };

  const filtered = applications.filter(a => {
    const matchSearch = `${a.first_name} ${a.last_name} ${a.email}`.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || a.status === filter;
    return matchSearch && matchFilter;
  });

  const stats = {
    total: applications.length,
    new: applications.filter(a => a.status === "new").length,
    contacted: applications.filter(a => a.status === "contacted").length,
    converted: applications.filter(a => a.status === "converted").length,
    thisMonth: applications.filter(a => new Date(a.created_at).getMonth() === new Date().getMonth()).length,
  };

  const topPackage = [...applications].reduce((acc, a) => {
    acc[a.membership_type] = (acc[a.membership_type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const mostPopular = Object.entries(topPackage).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-serif text-xl font-bold text-usawa-green">ABT Admin</h1>
          <p className="text-xs text-muted-foreground">Activate Body Therapy Dashboard</p>
        </div>
        <Button variant="outline" onClick={handleLogout} className="text-sm">Sign Out</Button>
      </div>

      <div className="p-6 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total applications", value: stats.total },
            { label: "New", value: stats.new },
            { label: "Contacted", value: stats.contacted },
            { label: "Converted", value: stats.converted },
            { label: "This month", value: stats.thisMonth },
          ].map(s => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-4">
              <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
              <p className="text-2xl font-semibold text-usawa-green">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Most popular package</p>
            <p className="text-lg font-semibold text-usawa-green capitalize">{mostPopular}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">GA4 Analytics</p>
            <a href="https://analytics.google.com" target="_blank" rel="noreferrer" className="text-sm text-usawa-green underline">Open Google Analytics →</a>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          <Input placeholder="Search name or email..." value={search} onChange={e => setSearch(e.target.value)} className="w-64 h-9" />
          {["all", "new", "contacted", "converted", "declined"].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-full text-sm border transition-all ${filter === f ? "bg-usawa-green text-white border-usawa-green" : "border-border text-muted-foreground hover:border-usawa-green"}`}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-muted-foreground text-sm">Loading applications...</p>
        ) : (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/30">
                <tr>
                  {["Name", "Contact", "Package", "Duration", "Status", "Date", "Actions"].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={7} className="px-4 py-8 text-center text-muted-foreground text-sm">No applications found</td></tr>
                ) : filtered.map(a => (
                  <tr key={a.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-medium">{a.first_name} {a.last_name}</td>
                    <td className="px-4 py-3">
                      <div className="text-xs text-muted-foreground">{a.email}</div>
                      <div className="text-xs text-muted-foreground">{a.phone}</div>
                    </td>
                    <td className="px-4 py-3 capitalize">{a.membership_type}</td>
                    <td className="px-4 py-3 capitalize">{a.duration}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[a.status] || "bg-gray-100 text-gray-600"}`}>
                        {a.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {new Date(a.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={a.status}
                        onChange={e => updateStatus(a.id, e.target.value)}
                        className="text-xs border border-border rounded-lg px-2 py-1 bg-background text-foreground">
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                        <option value="declined">Declined</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
