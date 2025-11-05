import { ReactNode } from 'react';
import { Page } from '../App';
import { 
  Globe, 
  LayoutDashboard, 
  Plug, 
  Network, 
  Code, 
  Sparkles, 
  BarChart3, 
  Shield, 
  Settings,
  Bell,
  Search,
  User,
  Moon,
  Sun
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

export function DashboardLayout({ children, currentPage, navigateTo }: DashboardLayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  
  const navItems = [
    { id: 'dashboard' as Page, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'integrations' as Page, label: 'Integrations', icon: Plug },
    { id: 'gateway' as Page, label: 'API Gateway', icon: Network },
    { id: 'sandbox' as Page, label: 'Sandbox', icon: Code },
    { id: 'ai-assistant' as Page, label: 'AI Assistant', icon: Sparkles },
    { id: 'monitoring' as Page, label: 'Monitoring', icon: BarChart3 },
    { id: 'security' as Page, label: 'Security', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* Top Navigation */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-4 sm:gap-8">
            <button onClick={() => navigateTo('dashboard')} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-900 dark:text-slate-100 hidden sm:inline">Iru079</span>
            </button>
            
            <div className="relative w-48 sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
              <Input 
                placeholder="Search..." 
                className="pl-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:bg-slate-100 dark:hover:bg-slate-800">
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              ) : (
                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="relative hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-teal-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigateTo('settings')} className="hover:bg-slate-100 dark:hover:bg-slate-800">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300">
                  {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </AvatarFallback>
              </Avatar>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 min-h-[calc(100vh-57px)] sticky top-[57px] hidden lg:block transition-colors">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.id === 'integrations' && (
                    <Badge className="ml-auto bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/50">24</Badge>
                  )}
                </button>
              );
            })}
            
            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => navigateTo('settings')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === 'settings'
                    ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 transition-colors">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">API Usage</div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-slate-700 dark:text-slate-300">847K / 1M</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">84.7%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div className="bg-teal-500 h-2 rounded-full" style={{ width: '84.7%' }}></div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
