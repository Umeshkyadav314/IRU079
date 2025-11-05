import { useRouter } from "next/router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { IntegrationHub } from "@/components/IntegrationHub";

export default function IntegrationsPage() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <DashboardLayout currentPage="integrations" navigateTo={handleNavigate}>
      <IntegrationHub navigateTo={handleNavigate} />
    </DashboardLayout>
  );
}
