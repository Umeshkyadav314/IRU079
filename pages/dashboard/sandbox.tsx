import { useRouter } from "next/router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { APISandbox } from "@/components/APISandbox";

export default function APISandboxPage() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <DashboardLayout currentPage="sandbox" navigateTo={handleNavigate}>
      <APISandbox navigateTo={handleNavigate} />
    </DashboardLayout>
  );
}
