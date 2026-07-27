"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import {
  Layers3,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  FileText,
} from "lucide-react";

interface Issue {
  ticket_id: number;
  issue_description: string;
  priority: string;
  status: string;
  product: string;
  category: string;
  complexity: number;
  customer_score: number;
  escalated: boolean;
}

interface ClusterDetails {
  cluster_id: number;
  theme: string;
  issue_count: number;
  priority_breakdown: {
    High: number;
    Medium: number;
    Low: number;
  };
  issues: Issue[];
}

interface DetailPanelProps {
  clusterId: number | null;
}

export default function DetailPanel({
  clusterId,
}: DetailPanelProps) {
  const [cluster, setCluster] = useState<ClusterDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (clusterId === null) return;

    async function fetchCluster() {
      try {
        setLoading(true);

        const res = await api.get(`/cluster/${clusterId}`);

        console.log("Cluster Details:", res.data);

        setCluster(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCluster();
  }, [clusterId]);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <p className="text-center text-slate-500">
          Loading cluster...
        </p>
      </div>
    );
  }

  if (!cluster) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <p className="text-center text-slate-500">
          Select a cluster to view details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 h-full">

      {/* Header */}

      <div className="p-6 border-b">

        <div className="flex items-center gap-3">
          <Layers3 className="text-blue-600" />
          <h2 className="text-xl font-bold">
            Cluster Details
          </h2>
        </div>

        <p className="text-slate-500 mt-2">
          Theme:{" "}
          <span className="font-semibold text-slate-800 capitalize">
            {cluster.theme}
          </span>
        </p>

      </div>

      <div className="p-6 space-y-6">

        {/* Issue Count */}

        <div className="bg-slate-50 rounded-xl p-4">

          <h3 className="text-sm text-slate-500">
            Total Issues
          </h3>

          <p className="text-3xl font-bold mt-2">
            {cluster.issue_count}
          </p>

        </div>

        {/* Priority */}

        <div>

          <h3 className="font-semibold mb-4">
            Priority Distribution
          </h3>

          <div className="space-y-3">

            <div className="flex justify-between items-center bg-red-50 rounded-lg p-3">

              <div className="flex items-center gap-2">
                <AlertTriangle
                  size={18}
                  className="text-red-600"
                />
                <span>High</span>
              </div>

              <span className="font-bold">
                {cluster.priority_breakdown.High}
              </span>

            </div>

            <div className="flex justify-between items-center bg-yellow-50 rounded-lg p-3">

              <div className="flex items-center gap-2">
                <Clock3
                  size={18}
                  className="text-yellow-600"
                />
                <span>Medium</span>
              </div>

              <span className="font-bold">
                {cluster.priority_breakdown.Medium}
              </span>

            </div>

            <div className="flex justify-between items-center bg-green-50 rounded-lg p-3">

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-600"
                />
                <span>Low</span>
              </div>

              <span className="font-bold">
                {cluster.priority_breakdown.Low}
              </span>

            </div>

          </div>

        </div>

        {/* Issues */}

        <div>

          <h3 className="font-semibold mb-4">
            Sample Issues
          </h3>

          <div className="space-y-3 max-h-[320px] overflow-y-auto">

            {cluster.issues.slice(0, 10).map((issue) => (

              <div
                key={issue.ticket_id}
                className="flex gap-3 bg-slate-50 rounded-xl p-3"
              >

                <FileText
                  size={18}
                  className="text-blue-600 mt-1"
                />

                <div>

                  <p className="font-medium">
                    {issue.issue_description}
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Ticket #{issue.ticket_id}
                    {" • "}
                    {issue.product}
                    {" • "}
                    {issue.priority}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}