"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import {
  Lightbulb,
  AlertTriangle,
  ShieldAlert,
  Package,
  TrendingUp,
} from "lucide-react";

interface DashboardData {
  trends: {
    top_themes: Record<string, number>;
    top_products: Record<string, number>;
    priority_distribution: Record<string, number>;
  };
}

interface Recommendation {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await api.get("/dashboard");
        const dashboard: DashboardData = res.data;

        const recs: Recommendation[] = [];

        // Highest theme
        const topTheme = Object.entries(dashboard.trends.top_themes)[0];

        if (topTheme) {
          recs.push({
            title: "Authentication Insight",
            description: `${topTheme[0]} is the most frequently reported issue (${topTheme[1]} tickets). Prioritize root-cause analysis and implement preventive fixes.`,
            icon: <ShieldAlert size={20} />,
            color: "border-red-500",
          });
        }

        // Highest product
        const topProduct = Object.entries(
          dashboard.trends.top_products
        )[0];

        if (topProduct) {
          recs.push({
            title: "Product Focus",
            description: `${topProduct[0]} has the highest number of reported issues (${topProduct[1]}). Consider increasing monitoring and testing for this product.`,
            icon: <Package size={20} />,
            color: "border-blue-500",
          });
        }

        // Urgent Issues
        const urgent =
          dashboard.trends.priority_distribution["Urgent"];

        if (urgent) {
          recs.push({
            title: "Support Planning",
            description: `${urgent} urgent tickets are currently present. Allocate engineering resources to reduce response time.`,
            icon: <AlertTriangle size={20} />,
            color: "border-yellow-500",
          });
        }

        // General recommendation
        recs.push({
          title: "Continuous Improvement",
          description:
            "Focus development efforts on the highest recurring themes to maximize customer satisfaction and reduce future incidents.",
          icon: <TrendingUp size={20} />,
          color: "border-green-500",
        });

        setRecommendations(recs);
      } catch (err) {
        console.error(err);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

      <div className="flex items-center gap-2 mb-6">
        <Lightbulb className="text-yellow-500" />
        <h2 className="text-2xl font-bold">
          AI Recommendations
        </h2>
      </div>

      <div className="space-y-4">

        {recommendations.map((rec, index) => (

          <div
            key={index}
            className={`border-l-4 ${rec.color} bg-slate-50 rounded-xl p-4`}
          >

            <div className="flex items-center gap-2 font-semibold mb-2">

              {rec.icon}

              {rec.title}

            </div>

            <p className="text-slate-600 text-sm">
              {rec.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}