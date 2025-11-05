import { useRouter } from "next/router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { AIAssistant } from "@/components/AIAssistant";

export default function AIAssistantPage() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <DashboardLayout currentPage="ai-assistant" navigateTo={handleNavigate}>
      <AIAssistant navigateTo={handleNavigate} />
    </DashboardLayout>
  );
}
