"use client";

import { useState } from "react";

import Header from "@/components/Header";
import SummaryCards from "@/components/SummaryCards";
import UploadSection from "@/components/UploadSection";
import ClusterList from "@/components/ClusterList";
import DetailPanel from "@/components/DetailPanel";
import TrendAnalysis from "@/components/TrendAnalysis";
import Recommendations from "@/components/Recommendations";


export default function Home() {

  // Selected cluster shared between ClusterList and DetailPanel
  const [selectedCluster, setSelectedCluster] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Page Container */}
      <div className="max-w-7xl mx-auto px-8 py-8">

        {/* Header */}
        <Header />

        {/* Summary Cards */}
        <div className="mt-8">
          <SummaryCards />
        </div>

        {/* Upload Section */}
        <div className="mt-8">
          <UploadSection />
        </div>

        {/* Cluster Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

          <ClusterList
            selected={selectedCluster}
            onSelect={setSelectedCluster}
          />

          <DetailPanel
            clusterId={selectedCluster}
          />

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

          {/* Trend Analysis */}
          <TrendAnalysis />

          {/* AI Recommendations */}
          <Recommendations />

        </div>

      </div>

    </main>
  );
}