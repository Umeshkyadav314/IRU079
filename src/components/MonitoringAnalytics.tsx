import { DashboardLayout } from './DashboardLayout';
import { Page } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Activity, TrendingUp, TrendingDown, AlertCircle, CheckCircle, Clock, Zap } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface MonitoringAnalyticsProps {
  navigateTo: (page: Page) => void;
}

const requestsData = [
  { time: '00:00', requests: 12500, errors: 45 },
  { time: '04:00', requests: 8200, errors: 28 },
  { time: '08:00', requests: 24000, errors: 89 },
  { time: '12:00', requests: 35000, errors: 124 },
  { time: '16:00', requests: 28000, errors: 95 },
  { time: '20:00', requests: 18000, errors: 62 },
  { time: '23:59', requests: 15000, errors: 51 },
];

const latencyData = [
  { time: '00:00', p50: 38, p95: 85, p99: 142 },
  { time: '04:00', p50: 35, p95: 78, p99: 135 },
  { time: '08:00', p50: 42, p95: 95, p99: 168 },
  { time: '12:00', p50: 48, p95: 108, p99: 195 },
  { time: '16:00', p50: 45, p95: 98, p99: 175 },
  { time: '20:00', p50: 40, p95: 88, p99: 158 },
  { time: '23:59', p50: 38, p95: 82, p99: 148 },
];

const statusCodeData = [
  { name: '2xx Success', value: 847392, color: '#10b981' },
  { name: '4xx Client Error', value: 2458, color: '#f59e0b' },
  { name: '5xx Server Error', value: 142, color: '#ef4444' },
];

const topEndpoints = [
  { endpoint: '/api/v1/users', requests: 245000, avgLatency: '42ms', errorRate: '0.02%', status: 'healthy' },
  { endpoint: '/api/v1/orders', requests: 189000, avgLatency: '58ms', errorRate: '0.05%', status: 'healthy' },
  { endpoint: '/api/v1/payments', requests: 156000, avgLatency: '124ms', errorRate: '0.08%', status: 'warning' },
  { endpoint: '/api/v1/products', requests: 98000, avgLatency: '35ms', errorRate: '0.01%', status: 'healthy' },
  { endpoint: '/api/v1/webhooks', requests: 67000, avgLatency: '78ms', errorRate: '0.15%', status: 'warning' },
];

const recentAlerts = [
  { id: 1, severity: 'critical', message: 'Payment API error rate above threshold', time: '5 min ago', status: 'active' },
  { id: 2, severity: 'warning', message: 'High latency detected on Orders endpoint', time: '1 hour ago', status: 'resolved' },
  { id: 3, severity: 'info', message: 'Scheduled maintenance completed', time: '3 hours ago', status: 'resolved' },
];

export function MonitoringAnalytics({ navigateTo }: MonitoringAnalyticsProps) {
  return (
    <DashboardLayout currentPage="monitoring" navigateTo={navigateTo}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-slate-900 mb-2 dark:text-gray-200">Monitoring & Analytics</h1>
            <p className="text-slate-600 dark:text-gray-300">Real-time metrics, logs, and performance insights</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="24h">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">Last Hour</SelectItem>
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Export Report</Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">Total Requests</CardTitle>
              <Activity className="w-4 h-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-slate-900 mb-1">849,992</div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>12.5% vs yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">Avg Latency</CardTitle>
              <Zap className="w-4 h-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-slate-900 mb-1">48ms</div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <TrendingDown className="w-4 h-4" />
                <span>5ms improvement</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">Success Rate</CardTitle>
              <CheckCircle className="w-4 h-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-slate-900 mb-1">99.69%</div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <span>Within SLA target</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">Uptime</CardTitle>
              <Clock className="w-4 h-4 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-slate-900 mb-1">99.99%</div>
              <div className="flex items-center gap-1 text-sm text-slate-600">
                <span>30-day average</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6">
          {/* Request Volume */}
          <Card>
            <CardHeader>
              <CardTitle>Request Volume & Errors</CardTitle>
              <CardDescription>Total API requests and error count over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={requestsData}>
                  <defs>
                    <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Area type="monotone" dataKey="requests" stroke="#14b8a6" fillOpacity={1} fill="url(#colorRequests)" />
                  <Line type="monotone" dataKey="errors" stroke="#ef4444" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Latency Percentiles */}
          <Card>
            <CardHeader>
              <CardTitle>Latency Percentiles</CardTitle>
              <CardDescription>Response time distribution (P50, P95, P99)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={latencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip />
                  <Line type="monotone" dataKey="p50" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="p95" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="p99" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-slate-600">P50 (Median)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span className="text-slate-600">P95</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-slate-600">P99</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Codes & Top Endpoints */}
        <div className="grid grid-cols-3 gap-6">
          {/* Status Code Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Status Codes</CardTitle>
              <CardDescription>Distribution of HTTP responses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={statusCodeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {statusCodeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {statusCodeData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                      <span className="text-slate-600">{item.name}</span>
                    </div>
                    <span className="text-slate-900">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Endpoints */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Top Endpoints</CardTitle>
              <CardDescription>Most frequently accessed API endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div className="flex-1">
                      <code className="text-sm text-slate-900">{endpoint.endpoint}</code>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <div className="text-slate-500 text-xs">Requests</div>
                        <div className="text-slate-900">{(endpoint.requests / 1000).toFixed(0)}K</div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">Latency</div>
                        <div className="text-slate-900">{endpoint.avgLatency}</div>
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs">Error Rate</div>
                        <div className="text-slate-900">{endpoint.errorRate}</div>
                      </div>
                      <Badge 
                        className={endpoint.status === 'healthy' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-orange-100 text-orange-700 hover:bg-orange-100'}
                      >
                        {endpoint.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts & Logs */}
        <Tabs defaultValue="alerts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="alerts">Recent Alerts</TabsTrigger>
            <TabsTrigger value="logs">System Logs</TabsTrigger>
            <TabsTrigger value="traces">Request Traces</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts">
            <Card>
              <CardHeader>
                <CardTitle>Alert History</CardTitle>
                <CardDescription>Recent alerts and incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-4">
                        <AlertCircle className={`w-5 h-5 ${
                          alert.severity === 'critical' ? 'text-red-600' :
                          alert.severity === 'warning' ? 'text-orange-600' :
                          'text-blue-600'
                        }`} />
                        <div>
                          <div className="text-sm text-slate-900 mb-1">{alert.message}</div>
                          <div className="text-xs text-slate-500">{alert.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          className={
                            alert.severity === 'critical' ? 'bg-red-100 text-red-700 hover:bg-red-100' :
                            alert.severity === 'warning' ? 'bg-orange-100 text-orange-700 hover:bg-orange-100' :
                            'bg-blue-100 text-blue-700 hover:bg-blue-100'
                          }
                        >
                          {alert.severity}
                        </Badge>
                        <Badge variant={alert.status === 'active' ? 'destructive' : 'outline'}>
                          {alert.status}
                        </Badge>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs">
            <Card>
              <CardHeader>
                <CardTitle>System Logs</CardTitle>
                <CardDescription>Real-time application logs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-100 space-y-1 max-h-[400px] overflow-y-auto">
                  <div>[2025-11-02 14:35:22] INFO - Request received: GET /api/v1/users/123</div>
                  <div>[2025-11-02 14:35:22] DEBUG - Database query executed in 12ms</div>
                  <div>[2025-11-02 14:35:22] INFO - Response sent: 200 OK (45ms)</div>
                  <div>[2025-11-02 14:35:24] INFO - Request received: POST /api/v1/payments</div>
                  <div>[2025-11-02 14:35:24] WARN - Rate limit approaching: 950/1000</div>
                  <div>[2025-11-02 14:35:24] INFO - Payment processed successfully</div>
                  <div>[2025-11-02 14:35:24] INFO - Response sent: 201 Created (120ms)</div>
                  <div className="text-red-400">[2025-11-02 14:35:26] ERROR - Database connection timeout</div>
                  <div className="text-red-400">[2025-11-02 14:35:26] ERROR - Request failed: 500 Internal Server Error</div>
                  <div>[2025-11-02 14:35:27] INFO - Retry attempt 1/3</div>
                  <div>[2025-11-02 14:35:28] INFO - Database connection restored</div>
                  <div>[2025-11-02 14:35:28] INFO - Request successful on retry</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traces">
            <Card>
              <CardHeader>
                <CardTitle>Request Traces</CardTitle>
                <CardDescription>Distributed tracing for API requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-slate-500">
                  Select a request from the logs to view its trace
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
