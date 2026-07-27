"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

interface DashboardData {
  summary: {
    total_feedback: number;
    total_clusters: number;
    total_themes: number;
    high_priority: number;
    medium_priority: number;
    low_priority: number;
  };

  priority_distribution: Record<string, number>;

  cluster_labels: Record<string, string>;

  trends: {
    summary: {
      total_feedback: number;
      total_clusters: number;
      total_themes: number;
      total_products: number;
    };

    cluster_distribution: Record<string, number>;
    theme_distribution: Record<string, number>;
    product_distribution: Record<string, number>;
    priority_distribution: Record<string, number>;

    top_themes: Record<string, number>;
    top_products: Record<string, number>;
    top_clusters: Record<string, number>;
  };

  recommendations: unknown;
}

const COLORS = [
  "#2563eb",
  "#ef4444",
  "#f59e0b",
  "#22c55e",
  "#8b5cf6",
  "#06b6d4",
];

export default function TrendAnalysis() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await api.get("/dashboard");
        setDashboard(res.data);
      } catch (err) {
        console.error("Dashboard Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold mb-4">Trend Analysis</h2>
        <p className="text-slate-500">Loading charts...</p>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold mb-4">Trend Analysis</h2>
        <p className="text-red-500">Unable to load dashboard data.</p>
      </div>
    );
  }

const priorityData = Object.entries(
  dashboard.trends.priority_distribution ??
    dashboard.priority_distribution
).map(([name, value]) => ({
  name,
  value,
}));

const clusterData = Object.entries(
  dashboard.trends.top_clusters
).map(([clusterId, value]) => ({
  name:
    dashboard.cluster_labels[clusterId] ??
    `Cluster ${clusterId}`,
  value,
}));

const productData = Object.entries(
  dashboard.trends.top_products
).map(([name, value]) => ({
  name,
  value,
}));

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

      <h2 className="text-2xl font-bold mb-8">
        Trend Analysis
      </h2>

      {/* Top Clusters */}

      <div className="mb-10">

        <h3 className="font-semibold mb-4">
          Top Issue Clusters
        </h3>

        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={clusterData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis
                dataKey="name"
                angle={-20}
                textAnchor="end"
                height={70}
              />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="value"
                fill="#2563eb"
                radius={[5, 5, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Priority Distribution */}

      <div className="mb-10">

        <h3 className="font-semibold mb-4">
          Priority Distribution
        </h3>

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={priorityData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {priorityData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Top Products */}

      <div>

        <h3 className="font-semibold mb-4">
          Top Products
        </h3>

        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={productData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="value"
                fill="#16a34a"
                radius={[5, 5, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}