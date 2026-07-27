"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { ChevronRight, Search, Layers3 } from "lucide-react";

interface Cluster {
  id: number;
  theme: string;
  issue_count: number;
}

interface ClusterListProps {
  selected: number | null;
  onSelect: (id: number) => void;
}

export default function ClusterList({
  selected,
  onSelect,
}: ClusterListProps) {
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchClusters() {
      try {
        const res = await api.get("/clusters");

        setClusters(res.data);

        // Automatically select the first cluster
        if (res.data.length > 0 && selected === null) {
          onSelect(res.data[0].id);
        }
      } catch (err) {
        console.error("Failed to load clusters:", err);
      }
    }

    fetchClusters();
  }, []);

  const filteredClusters = clusters.filter((cluster) =>
    cluster.theme.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">

      {/* Header */}
      <div className="p-6 border-b">

        <div className="flex items-center gap-2 mb-4">
          <Layers3 className="text-blue-600" />
          <h2 className="text-2xl font-bold">
            Issue Clusters
          </h2>
        </div>

        {/* Search */}
        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search cluster..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-3 outline-none focus:border-blue-500"
          />

        </div>

      </div>

      {/* Cluster List */}
      <div className="max-h-[650px] overflow-y-auto">

        {filteredClusters.length === 0 ? (

          <div className="p-8 text-center text-slate-500">
            No clusters found.
          </div>

        ) : (

          filteredClusters.map((cluster) => (

            <div
              key={cluster.id}
              onClick={() => onSelect(cluster.id)}
              className={`cursor-pointer px-6 py-5 border-b transition-all duration-200 hover:bg-slate-50 ${
                selected === cluster.id
                  ? "border-l-4 border-blue-600 bg-blue-50"
                  : ""
              }`}
            >

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="font-semibold text-lg capitalize">
                    {cluster.theme}
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    {cluster.issue_count} Issues
                  </p>

                </div>

                <ChevronRight className="text-slate-400" />

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}