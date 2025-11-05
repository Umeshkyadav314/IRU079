import { useRouter } from "next/router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MonitoringAnalytics } from "@/components/MonitoringAnalytics";

export default function MonitoringPage() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <DashboardLayout currentPage="monitoring" navigateTo={handleNavigate}>
      <MonitoringAnalytics navigateTo={handleNavigate} />
    </DashboardLayout>
  );
}
