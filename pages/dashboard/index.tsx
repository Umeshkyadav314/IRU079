import { useRouter } from "next/router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Dashboard } from "@/components/Dashboard";
import { Page } from "@/App";

export default function DashboardPage() {
  const router = useRouter();

  const handleNavigate = (page: Page) => {
    // map internal Page names to routes
    switch (page) {
      case "landing":
        router.push("/");
        break;
      case "login":
        router.push("/login");
        break;
      case "docs":
        router.push("/docs");
        break;
      case "pricing":
        router.push("/pricing");
        break;
      case "dashboard":
        router.push("/dashboard");
        break;
      case "integrations":
        router.push("/dashboard/integrations");
        break;
      case "gateway":
        router.push("/dashboard/gateway");
        break;
      case "sandbox":
        router.push("/dashboard/sandbox");
        break;
      case "ai-assistant":
        router.push("/dashboard/ai-assistant");
        break;
      case "monitoring":
        router.push("/dashboard/monitoring");
        break;
      case "security":
        router.push("/dashboard/security");
        break;
      case "settings":
        router.push("/dashboard/settings");
        break;
      default:
        router.push("/");
    }
  };

  return (
    <DashboardLayout currentPage="dashboard" navigateTo={handleNavigate}>
      <Dashboard navigateTo={handleNavigate} />
    </DashboardLayout>
  );
}
