import { DashboardLayout } from './DashboardLayout';
import { Page } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Zap, 
  AlertCircle, 
  CheckCircle,
  ArrowRight,
  Network,
  Database,
  Cpu,
  BarChart3,
  Shield,
  Globe
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface DashboardProps {
  navigateTo: (page: Page) => void;
}

const integrationData = [
  { time: '00:00', adapters: 145, apiCalls: 12500 },
  { time: '04:00', adapters: 148, apiCalls: 8200 },
  { time: '08:00', adapters: 152, apiCalls: 24000 },
  { time: '12:00', adapters: 156, apiCalls: 35000 },
  { time: '16:00', adapters: 158, apiCalls: 28000 },
  { time: '20:00', adapters: 160, apiCalls: 18000 },
  { time: '23:59', adapters: 162, apiCalls: 15000 },
];

const systemHealthData = [
  { time: '00:00', sapLatency: 45, oracleLatency: 52, cloudLatency: 28 },
  { time: '04:00', sapLatency: 42, oracleLatency: 48, cloudLatency: 25 },
  { time: '08:00', sapLatency: 52, oracleLatency: 58, cloudLatency: 32 },
  { time: '12:00', sapLatency: 58, oracleLatency: 65, cloudLatency: 38 },
  { time: '16:00', sapLatency: 48, oracleLatency: 55, cloudLatency: 30 },
  { time: '20:00', sapLatency: 44, oracleLatency: 50, cloudLatency: 28 },
  { time: '23:59', sapLatency: 46, oracleLatency: 52, cloudLatency: 29 },
];

const brandPerformance = [
  { brand: 'VW', adapters: 42, uptime: 99.8 },
  { brand: 'Audi', adapters: 38, uptime: 99.9 },
  { brand: 'Porsche', adapters: 24, uptime: 99.7 },
  { brand: 'Skoda', adapters: 32, uptime: 99.8 },
  { brand: 'SEAT', adapters: 18, uptime: 99.6 },
  { brand: 'Others', adapters: 8, uptime: 99.5 },
];

export function Dashboard({ navigateTo }: DashboardProps) {
  const navigationCards = [
    {
      id: 'integrations' as Page,
      title: 'Integration Hub',
      description: 'SAP, Oracle & legacy adapters',
      icon: Network,
      color: 'from-[#001e50] to-[#003d82]',
      stats: '162 Active Adapters',
    },
    {
      id: 'gateway' as Page,
      title: 'API Gateway',
      description: 'SOAP to REST conversion',
      icon: Zap,
      color: 'from-[#00b1eb] to-[#0066cc]',
      stats: '2.4M Requests/Day',
    },
    {
      id: 'ai-assistant' as Page,
      title: 'AI Assistant',
      description: 'Predictive analytics & insights',
      icon: Cpu,
      color: 'from-[#003d82] to-[#001e50]',
      stats: '12 Active Forecasts',
    },
    {
      id: 'sandbox' as Page,
      title: 'API Sandbox',
      description: 'Test legacy integrations',
      icon: Activity,
      color: 'from-blue-600 to-blue-800',
      stats: '48 Test Environments',
    },
    {
      id: 'monitoring' as Page,
      title: 'Monitoring',
      description: 'Real-time analytics',
      icon: BarChart3,
      color: 'from-green-600 to-green-800',
      stats: '99.9% Uptime',
    },
    {
      id: 'security' as Page,
      title: 'Security & Compliance',
      description: 'GDPR & ISO 27001',
      icon: Shield,
      color: 'from-red-600 to-red-800',
      stats: 'Fully Compliant',
    },
  ];

  return (
    <DashboardLayout currentPage="dashboard" navigateTo={navigateTo}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-slate-900 dark:text-white mb-2">Enterprise Modernization Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Volkswagen Group - Global IT Transformation Platform
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-600 dark:text-slate-400">All Systems Operational</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="bg-gradient-to-br from-[#001e50] to-[#003d82] border-0 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-blue-200">Active Adapters</CardDescription>
              <CardTitle className="text-3xl sm:text-4xl">162</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-300">+8 this week</span>
              </div>
              <div className="text-blue-200 text-xs mt-2">SAP ECC, Oracle, Mainframe</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#00b1eb] to-[#0066cc] border-0 text-white">
            <CardHeader className="pb-2">
              <CardDescription className="text-blue-100">API Requests</CardDescription>
              <CardTitle className="text-3xl sm:text-4xl">2.4M</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <Activity className="w-4 h-4 text-white" />
                <span>Per day</span>
              </div>
              <div className="text-blue-100 text-xs mt-2">Across all VW brands</div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-2 border-[#001e50] dark:border-[#00b1eb]">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600 dark:text-slate-400">Cost Savings</CardDescription>
              <CardTitle className="text-3xl sm:text-4xl text-green-600 dark:text-green-400">₹4.2M</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <TrendingDown className="w-4 h-4 text-green-500" />
                <span>40% reduction</span>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs mt-2">Annual maintenance cost</div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-2 border-[#001e50] dark:border-[#00b1eb]">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-600 dark:text-slate-400">System Uptime</CardDescription>
              <CardTitle className="text-3xl sm:text-4xl text-[#001e50] dark:text-[#00b1eb]">99.9%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>SLA: 99.5%</span>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-xs mt-2">0 days downtime</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Integration Activity */}
          <Card className="bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Integration Activity</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Real-time adapter deployment and API calls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={integrationData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                  <XAxis dataKey="time" className="text-slate-600 dark:text-slate-400" />
                  <YAxis className="text-slate-600 dark:text-slate-400" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="adapters" 
                    stroke="#001e50" 
                    strokeWidth={2} 
                    name="Active Adapters"
                    dot={{ fill: '#001e50' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="apiCalls" 
                    stroke="#00b1eb" 
                    strokeWidth={2} 
                    name="API Calls (K)"
                    dot={{ fill: '#00b1eb' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card className="bg-white dark:bg-slate-900">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">System Latency (ms)</CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Legacy system response times
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={systemHealthData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                  <XAxis dataKey="time" className="text-slate-600 dark:text-slate-400" />
                  <YAxis className="text-slate-600 dark:text-slate-400" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="sapLatency" 
                    stackId="1"
                    stroke="#dc2626" 
                    fill="#dc2626" 
                    fillOpacity={0.6}
                    name="SAP ECC"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="oracleLatency" 
                    stackId="1"
                    stroke="#ea580c" 
                    fill="#ea580c" 
                    fillOpacity={0.6}
                    name="Oracle DB"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="cloudLatency" 
                    stackId="1"
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.6}
                    name="Cloud APIs"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Brand Performance */}
        <Card className="bg-white dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">VW Group Brand Performance</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Active adapters and uptime by brand
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={brandPerformance}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                <XAxis dataKey="brand" className="text-slate-600 dark:text-slate-400" />
                <YAxis className="text-slate-600 dark:text-slate-400" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '0.5rem'
                  }}
                />
                <Legend />
                <Bar dataKey="adapters" fill="#001e50" name="Active Adapters" />
                <Bar dataKey="uptime" fill="#00b1eb" name="Uptime %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div>
          <h2 className="text-slate-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {navigationCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card 
                  key={card.id}
                  className={`group cursor-pointer bg-gradient-to-br ${card.color} border-0 text-white hover:shadow-xl transition-all duration-300`}
                  onClick={() => navigateTo(card.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl mb-2">{card.title}</h3>
                    <p className="text-sm text-white/80 mb-3">{card.description}</p>
                    <div className="text-sm text-white/90">{card.stats}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recent Alerts */}
        <Card className="bg-white dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Recent System Alerts</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              Latest notifications from AI monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm text-slate-900 dark:text-white mb-1">SAP ECC India Plant - Successfully Migrated</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Zero downtime achieved • 2 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm text-slate-900 dark:text-white mb-1">AI Prediction: Supplier Delay Risk - Pune Plant</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">68% probability • Recommended action: Contact supplier • 4 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-sm text-slate-900 dark:text-white mb-1">New Adapter Deployed: Audi R8 Production Line</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Oracle ERP to Cloud API • 6 hours ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
