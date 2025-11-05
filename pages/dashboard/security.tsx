import { useRouter } from "next/router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { SecurityCompliance } from "@/components/SecurityCompliance";

export default function SecurityPage() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <DashboardLayout currentPage="security" navigateTo={handleNavigate}>
      <SecurityCompliance navigateTo={handleNavigate} />
    </DashboardLayout>
  );
}
