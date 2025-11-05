import { useRouter } from "next/router";
import { DocsPage } from "@/components/DocsPage";

export default function Docs() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return <DocsPage navigateTo={handleNavigate} />;
}
