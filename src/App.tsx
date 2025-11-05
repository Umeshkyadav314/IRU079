'use client';

import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { IntegrationHub } from './components/IntegrationHub';
import { APIGateway } from './components/APIGateway';
import { APISandbox } from './components/APISandbox';
import { AIAssistant } from './components/AIAssistant';
import { MonitoringAnalytics } from './components/MonitoringAnalytics';
import { SecurityCompliance } from './components/SecurityCompliance';
import { SettingsPage } from './components/SettingsPage';
import { DocsPage } from './components/DocsPage';
import { PricingPage } from './components/PricingPage';
import { Toaster } from './components/ui/sonner';

export type Page = 
  | 'landing' 
  | 'login'
  | 'docs'
  | 'pricing'
  | 'dashboard' 
  | 'integrations' 
  | 'gateway' 
  | 'sandbox' 
  | 'ai-assistant' 
  | 'monitoring' 
  | 'security' 
  | 'settings';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const { isAuthenticated, logout } = useAuth();

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    logout();
    setCurrentPage('landing');
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={navigateTo} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onBack={() => setCurrentPage('landing')} />;
      case 'docs':
        return <DocsPage navigateTo={navigateTo} />;
      case 'pricing':
        return <PricingPage navigateTo={navigateTo} />;
      case 'dashboard':
        return <Dashboard navigateTo={navigateTo} />;
      case 'integrations':
        return <IntegrationHub navigateTo={navigateTo} />;
      case 'gateway':
        return <APIGateway navigateTo={navigateTo} />;
      case 'sandbox':
        return <APISandbox navigateTo={navigateTo} />;
      case 'ai-assistant':
        return <AIAssistant navigateTo={navigateTo} />;
      case 'monitoring':
        return <MonitoringAnalytics navigateTo={navigateTo} />;
      case 'security':
        return <SecurityCompliance navigateTo={navigateTo} />;
      case 'settings':
        return <SettingsPage navigateTo={navigateTo} onLogout={handleLogout} />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      {renderPage()}
      <Toaster position="top-right" theme={undefined} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
