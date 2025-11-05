import { useRouter } from "next/router";
import { PricingPage } from "@/components/PricingPage";

export default function Pricing() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return <PricingPage navigateTo={handleNavigate} />;
}
