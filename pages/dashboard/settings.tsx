import { useRouter } from "next/router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { SettingsPage } from "@/components/SettingsPage";

export default function Settings() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    // Add your logout logic here
    router.push('/login');
  };

  return (
    <DashboardLayout currentPage="settings" navigateTo={handleNavigate}>
      <SettingsPage navigateTo={handleNavigate} onLogout={handleLogout} />
    </DashboardLayout>
  );
}
