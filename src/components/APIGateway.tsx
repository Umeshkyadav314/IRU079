import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Page } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Plus, Search, Edit, Trash2, Copy, ExternalLink, Globe } from 'lucide-react';

interface APIGatewayProps {
  navigateTo: (page: Page) => void;
}

const endpoints = [
  { 
    id: 1, 
    path: '/api/v1/users', 
    method: 'GET', 
    service: 'User Service', 
    status: 'active',
    rateLimit: '1000/min',
    latency: '45ms',
    calls: '125K'
  },
  { 
    id: 2, 
    path: '/api/v1/payments', 
    method: 'POST', 
    service: 'Payment Service', 
    status: 'active',
    rateLimit: '500/min',
    latency: '120ms',
    calls: '89K'
  },
  { 
    id: 3, 
    path: '/api/v1/orders', 
    method: 'GET', 
    service: 'Order Service', 
    status: 'active',
    rateLimit: '2000/min',
    latency: '62ms',
    calls: '245K'
  },
  { 
    id: 4, 
    path: '/api/v1/webhooks', 
    method: 'POST', 
    service: 'Webhook Service', 
    status: 'disabled',
    rateLimit: '100/min',
    latency: '85ms',
    calls: '12K'
  },
];

const transformations = [
  { id: 1, name: 'JSON to XML', type: 'Format', endpoints: 3 },
  { id: 2, name: 'Response Mapping', type: 'Data', endpoints: 8 },
  { id: 3, name: 'Header Injection', type: 'Security', endpoints: 12 },
  { id: 4, name: 'Error Handling', type: 'Logic', endpoints: 15 },
];

export function APIGateway({ navigateTo }: APIGatewayProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const methodColors: Record<string, string> = {
    'GET': 'bg-blue-100 text-blue-700',
    'POST': 'bg-green-100 text-green-700',
    'PUT': 'bg-orange-100 text-orange-700',
    'DELETE': 'bg-red-100 text-red-700',
  };

  return (
    <DashboardLayout currentPage="gateway" navigateTo={navigateTo}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-slate-900 mb-2">API Gateway</h1>
            <p className="text-slate-600">Configure routes, transformations, and rate limiting</p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Endpoint
          </Button>
        </div>

        {/* Gateway Stats */}
        <div className="grid grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-600">Total Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-slate-900">12</div>
              <div className="text-sm text-slate-500 mt-1">3 disabled</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-600">Avg Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-slate-900">78ms</div>
              <div className="text-sm text-green-600 mt-1">↓ 12ms faster</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-600">Requests Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-slate-900">471K</div>
              <div className="text-sm text-green-600 mt-1">↑ 8.5% increase</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-600">Error Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-slate-900">0.03%</div>
              <div className="text-sm text-green-600 mt-1">Within SLA</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="endpoints" className="space-y-6">
          <TabsList>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="transformations">Transformations</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>

          {/* Endpoints Tab */}
          <TabsContent value="endpoints" className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  placeholder="Search endpoints..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="get">GET</SelectItem>
                  <SelectItem value="post">POST</SelectItem>
                  <SelectItem value="put">PUT</SelectItem>
                  <SelectItem value="delete">DELETE</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              {endpoints.map((endpoint) => (
                <Card key={endpoint.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <Badge className={methodColors[endpoint.method]}>{endpoint.method}</Badge>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <code className="text-sm text-slate-900">{endpoint.path}</code>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Copy className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span>{endpoint.service}</span>
                            <span>•</span>
                            <span>Rate Limit: {endpoint.rateLimit}</span>
                            <span>•</span>
                            <span>Latency: {endpoint.latency}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <div className="text-xl text-slate-900">{endpoint.calls}</div>
                          <div className="text-xs text-slate-500">Requests (24h)</div>
                        </div>
                        <Badge variant={endpoint.status === 'active' ? 'default' : 'secondary'} className={endpoint.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}>
                          {endpoint.status}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="icon">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Routes Tab */}
          <TabsContent value="routes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Route Configuration</CardTitle>
                <CardDescription>Define how requests are routed to backend services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Base URL</Label>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <Input defaultValue="https://api.iru079.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>API Version</Label>
                    <Select defaultValue="v1">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="v1">Version 1</SelectItem>
                        <SelectItem value="v2">Version 2 (Beta)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Route Rules</Label>
                  <div className="space-y-3">
                    {[
                      { path: '/api/v1/users/*', target: 'user-service.internal:8080', weight: '100%' },
                      { path: '/api/v1/payments/*', target: 'payment-service.internal:8080', weight: '100%' },
                      { path: '/api/v1/orders/*', target: 'order-service.internal:8080', weight: '80%' },
                    ].map((rule, index) => (
                      <Card key={index} className="bg-slate-50">
                        <CardContent className="p-4">
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="text-xs text-slate-500 mb-1">Path Pattern</div>
                              <code className="text-sm text-slate-900">{rule.path}</code>
                            </div>
                            <div>
                              <div className="text-xs text-slate-500 mb-1">Target Service</div>
                              <code className="text-sm text-slate-900">{rule.target}</code>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs text-slate-500 mb-1">Traffic Weight</div>
                                <div className="text-sm text-slate-900">{rule.weight}</div>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <Button variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Route Rule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transformations Tab */}
          <TabsContent value="transformations" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Request & Response Transformations</CardTitle>
                    <CardDescription>Modify requests and responses on-the-fly</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Transformation
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {transformations.map((transformation) => (
                    <Card key={transformation.id} className="border-slate-200">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-sm text-slate-900 mb-1">{transformation.name}</h4>
                            <Badge variant="outline" className="text-xs">{transformation.type}</Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-7 w-7">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-sm text-slate-600">
                          Applied to {transformation.endpoints} endpoints
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Policies Tab */}
          <TabsContent value="policies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rate Limiting</CardTitle>
                <CardDescription>Control request rates to prevent abuse</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-900 mb-1">Enable Global Rate Limiting</div>
                    <div className="text-sm text-slate-500">Apply rate limits across all endpoints</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Requests per Minute</Label>
                    <Input type="number" defaultValue="10000" />
                  </div>
                  <div className="space-y-2">
                    <Label>Burst Size</Label>
                    <Input type="number" defaultValue="20000" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CORS Configuration</CardTitle>
                <CardDescription>Configure cross-origin resource sharing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-900 mb-1">Enable CORS</div>
                    <div className="text-sm text-slate-500">Allow requests from different origins</div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Allowed Origins</Label>
                    <Input defaultValue="*" placeholder="https://example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Allowed Methods</Label>
                    <Input defaultValue="GET, POST, PUT, DELETE, OPTIONS" />
                  </div>
                  <div className="space-y-2">
                    <Label>Allowed Headers</Label>
                    <Input defaultValue="Content-Type, Authorization" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
