import Navbar from "../components/dashboard/Navbar.tsx";
import StatsSection from "../components/dashboard/StatsSection.tsx";
import RecentProjects from "../components/dashboard/RecentProjects.tsx";
import RecentFeedback from "../components/dashboard/RecentFeedback.tsx";
import AIAssistantCard from "../components/dashboard/AIAssistantCard.tsx";
import ActivityTimeline from "../components/dashboard/ActivityTimeline.tsx";
import Sidebar from "../components/dashboard/Sidebar.tsx";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-slate-950">
      <Sidebar />

      <div className="flex-1 min-w-0 overflow-auto">
        <Navbar />

        <main className="space-y-8 p-4 sm:p-6 lg:p-8">

          <StatsSection />

         <div className="grid gap-8 lg:grid-cols-3">

            <div className="lg:col-span-2 space-y-8">

              <RecentProjects />

              <RecentFeedback />

            </div>

            <div className="space-y-8">

              <AIAssistantCard />

              <ActivityTimeline />

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}