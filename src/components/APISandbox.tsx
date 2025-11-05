import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Page } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Play, Plus, Trash2, Copy, Save, Clock, CheckCircle, XCircle } from 'lucide-react';

interface APISandboxProps {
  navigateTo: (page: Page) => void;
}

const savedRequests = [
  { id: 1, name: 'Get User Profile', method: 'GET', endpoint: '/api/v1/users/123', lastRun: '5 min ago' },
  { id: 2, name: 'Create Payment', method: 'POST', endpoint: '/api/v1/payments', lastRun: '2 hours ago' },
  { id: 3, name: 'Update Order', method: 'PUT', endpoint: '/api/v1/orders/456', lastRun: '1 day ago' },
];

const requestHistory = [
  { id: 1, method: 'GET', endpoint: '/api/v1/users/123', status: 200, time: '45ms', timestamp: '2:34 PM' },
  { id: 2, method: 'POST', endpoint: '/api/v1/payments', status: 201, time: '120ms', timestamp: '2:15 PM' },
  { id: 3, method: 'GET', endpoint: '/api/v1/orders', status: 200, time: '62ms', timestamp: '1:50 PM' },
  { id: 4, method: 'DELETE', endpoint: '/api/v1/sessions/789', status: 204, time: '38ms', timestamp: '1:22 PM' },
  { id: 5, method: 'GET', endpoint: '/api/v1/users/456', status: 404, time: '28ms', timestamp: '12:45 PM' },
];

export function APISandbox({ navigateTo }: APISandboxProps) {
  const [method, setMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState('https://api.iru079.com/api/v1/users');
  const [requestBody, setRequestBody] = useState('{\n  "name": "John Doe",\n  "email": "john@example.com"\n}');
  const [responseData, setResponseData] = useState('');
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [responseTime, setResponseTime] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const headers = [
    { key: 'Content-Type', value: 'application/json' },
    { key: 'Authorization', value: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
  ];

  const handleSendRequest = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResponse = {
        id: '123',
        name: 'John Doe',
        email: 'john@example.com',
        created_at: '2025-11-02T12:00:00Z',
        role: 'user',
        metadata: {
          last_login: '2025-11-02T14:30:00Z',
          login_count: 42
        }
      };
      
      setResponseData(JSON.stringify(mockResponse, null, 2));
      setResponseStatus(200);
      setResponseTime('45ms');
      setIsLoading(false);
    }, 800);
  };

  const methodColors: Record<string, string> = {
    'GET': 'bg-blue-100 text-blue-700',
    'POST': 'bg-green-100 text-green-700',
    'PUT': 'bg-orange-100 text-orange-700',
    'DELETE': 'bg-red-100 text-red-700',
  };

  return (
    <DashboardLayout currentPage="sandbox" navigateTo={navigateTo}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl text-slate-900 mb-2 dark:text-gray-200">API Sandbox</h1>
          <p className="text-slate-600 dark:text-gray-300">Test and debug your API endpoints in real-time</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Request Builder */}
          <div className="col-span-8 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Request Builder</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={handleSendRequest} disabled={isLoading}>
                      <Play className="w-4 h-4 mr-2" />
                      {isLoading ? 'Sending...' : 'Send Request'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Method & Endpoint */}
                <div className="flex gap-2">
                  <Select value={method} onValueChange={setMethod}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="GET">GET</SelectItem>
                      <SelectItem value="POST">POST</SelectItem>
                      <SelectItem value="PUT">PUT</SelectItem>
                      <SelectItem value="DELETE">DELETE</SelectItem>
                      <SelectItem value="PATCH">PATCH</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    value={endpoint} 
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder="https://api.example.com/endpoint"
                    className="flex-1"
                  />
                </div>

                {/* Tabs for Request Details */}
                <Tabs defaultValue="body" className="w-full">
                  <TabsList>
                    <TabsTrigger value="body">Body</TabsTrigger>
                    <TabsTrigger value="headers">Headers</TabsTrigger>
                    <TabsTrigger value="params">Query Params</TabsTrigger>
                    <TabsTrigger value="auth">Auth</TabsTrigger>
                  </TabsList>

                  <TabsContent value="body" className="space-y-4">
                    <div className="space-y-2">
                      <Label>Request Body (JSON)</Label>
                      <Textarea 
                        value={requestBody}
                        onChange={(e) => setRequestBody(e.target.value)}
                        className="font-mono text-sm min-h-[200px]"
                        placeholder='{"key": "value"}'
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="headers" className="space-y-4">
                    <div className="space-y-3">
                      {headers.map((header, index) => (
                        <div key={index} className="flex gap-2">
                          <Input value={header.key} placeholder="Header name" className="flex-1" />
                          <Input value={header.value} placeholder="Header value" className="flex-1" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Header
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="params" className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input placeholder="Parameter name" className="flex-1" />
                        <Input placeholder="Parameter value" className="flex-1" />
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Parameter
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="auth" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Authentication Type</Label>
                        <Select defaultValue="bearer">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bearer">Bearer Token</SelectItem>
                            <SelectItem value="basic">Basic Auth</SelectItem>
                            <SelectItem value="api-key">API Key</SelectItem>
                            <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Token</Label>
                        <Input type="password" defaultValue="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Response */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Response</CardTitle>
                  {responseStatus && (
                    <div className="flex items-center gap-4">
                      <Badge className={responseStatus < 300 ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-red-100 text-red-700 hover:bg-red-100'}>
                        {responseStatus < 300 ? <CheckCircle className="w-3 h-3 mr-1" /> : <XCircle className="w-3 h-3 mr-1" />}
                        Status: {responseStatus}
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        {responseTime}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {responseData ? (
                  <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-auto max-h-[400px] text-sm">
                    {responseData}
                  </pre>
                ) : (
                  <div className="text-center py-12 text-slate-500">
                    Send a request to see the response here
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 space-y-6">
            {/* Saved Requests */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Saved Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {savedRequests.map((request) => (
                    <button
                      key={request.id}
                      className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={`${methodColors[request.method]} text-xs`}>
                          {request.method}
                        </Badge>
                        <span className="text-sm text-slate-900 truncate">{request.name}</span>
                      </div>
                      <div className="text-xs text-slate-500 truncate">{request.endpoint}</div>
                      <div className="text-xs text-slate-400 mt-1">{request.lastRun}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Request History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {requestHistory.map((request) => (
                    <div
                      key={request.id}
                      className="p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={`${methodColors[request.method]} text-xs`}>
                          {request.method}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${request.status < 300 ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700'}`}
                        >
                          {request.status}
                        </Badge>
                      </div>
                      <div className="text-xs text-slate-900 truncate mb-1">{request.endpoint}</div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{request.time}</span>
                        <span>{request.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Environment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <Select defaultValue="production">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="staging">Staging</SelectItem>
                    <SelectItem value="production">Production</SelectItem>
                  </SelectContent>
                </Select>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Base URL:</span>
                    <span className="text-slate-900">api.prod.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Region:</span>
                    <span className="text-slate-900">US-East-1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
