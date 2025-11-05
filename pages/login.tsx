import { LoginPage } from "@/components/LoginPage";

export default function Login() {
  const handleLogin = (...args: any[]) => {
    // handle login (args may contain credentials or event depending on LoginPage implementation)
  };

  const handleBack = () => {
    // handle back action (navigate or close)
  };

  return <LoginPage onLogin={handleLogin} onBack={handleBack} />;
}
