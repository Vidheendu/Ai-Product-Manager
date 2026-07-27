"use client";

import { useEffect, useState } from "react";
import { FileText, Layers3, Lightbulb, AlertTriangle } from "lucide-react";
import api from "@/lib/api";

type DashboardResponse = {
  summary?: {
    total_feedback: number;
    total_clusters: number;
    total_themes: number;
    high_priority: number;
    medium_priority: number;
    low_priority: number;
  };
};

type CardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
};

function StatCard({ title, value, icon, color }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 text-sm">{title}</p>
          <h2 className="text-4xl font-bold mt-3">{value}</h2>
        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default function SummaryCards() {
  const [dashboard, setDashboard] = useState<DashboardResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const response = await api.get("/dashboard");

        console.log("Dashboard Response");
        console.log(response.data);

        setDashboard(response.data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8 text-slate-500">
        Loading dashboard...
      </div>
    );
  }

  if (!dashboard || !dashboard.summary) {
    return (
      <div className="text-center py-8 text-red-500">
        Dashboard data not available.
      </div>
    );
  }

  const stats = [
    {
      title: "Total Issues",
      value: dashboard.summary.total_feedback,
      icon: <FileText className="text-white" size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Clusters",
      value: dashboard.summary.total_clusters,
      icon: <Layers3 className="text-white" size={28} />,
      color: "bg-purple-600",
    },
    {
      title: "Themes",
      value: dashboard.summary.total_themes,
      icon: <Lightbulb className="text-white" size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "High Priority",
      value: dashboard.summary.high_priority,
      icon: <AlertTriangle className="text-white" size={28} />,
      color: "bg-red-500",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />
      ))}
    </section>
  );
}