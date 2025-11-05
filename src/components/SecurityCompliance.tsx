import { DashboardLayout } from './DashboardLayout';
import { Page } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Shield, Lock, Key, AlertTriangle, CheckCircle, Eye, Download, FileText, XCircle } from 'lucide-react';

interface SecurityComplianceProps {
  navigateTo: (page: Page) => void;
}

const securityScores = [
  { category: 'Authentication', score: 95, status: 'excellent' },
  { category: 'Encryption', score: 100, status: 'excellent' },
  { category: 'Access Control', score: 88, status: 'good' },
  { category: 'Vulnerability Scan', score: 92, status: 'excellent' },
];

const recentActivity = [
  { id: 1, user: 'john@company.com', action: 'API key rotated', resource: 'Production API', time: '5 min ago', risk: 'low' },
  { id: 2, user: 'sarah@company.com', action: 'Permission granted', resource: 'Integration Hub', time: '1 hour ago', risk: 'low' },
  { id: 3, user: 'mike@company.com', action: 'Failed login attempt', resource: 'Dashboard', time: '2 hours ago', risk: 'medium' },
  { id: 4, user: 'system', action: 'SSL certificate renewed', resource: 'api.iru079.com', time: '1 day ago', risk: 'low' },
];

const apiKeys = [
  { id: 1, name: 'Production API Key', key: 'sk_live_51HcY...', created: '2024-08-15', lastUsed: '2 min ago', status: 'active' },
  { id: 2, name: 'Staging API Key', key: 'sk_test_51HcY...', created: '2024-09-01', lastUsed: '1 hour ago', status: 'active' },
  { id: 3, name: 'Development API Key', key: 'sk_dev_51HcY...', created: '2024-10-12', lastUsed: '2 days ago', status: 'active' },
  { id: 4, name: 'Legacy API Key', key: 'sk_old_51HcY...', created: '2023-03-20', lastUsed: '30 days ago', status: 'deprecated' },
];

const complianceStatus = [
  { standard: 'SOC 2 Type II', status: 'compliant', lastAudit: '2024-09-15', nextAudit: '2025-09-15' },
  { standard: 'GDPR', status: 'compliant', lastAudit: '2024-10-01', nextAudit: '2025-10-01' },
  { standard: 'HIPAA', status: 'compliant', lastAudit: '2024-08-20', nextAudit: '2025-08-20' },
  { standard: 'PCI DSS', status: 'review', lastAudit: '2024-07-10', nextAudit: '2025-01-10' },
];

export function SecurityCompliance({ navigateTo }: SecurityComplianceProps) {
  return (
    <DashboardLayout currentPage="security" navigateTo={navigateTo}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-slate-900 mb-2">Security & Compliance</h1>
            <p className="text-slate-600">Manage security policies, access control, and compliance</p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Security Report
          </Button>
        </div>

        {/* Security Overview */}
        <div className="grid grid-cols-4 gap-6">
          {securityScores.map((item, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-slate-600">{item.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-3xl text-slate-900">{item.score}</div>
                  <div className="text-lg text-slate-500 mb-1">/100</div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${item.score >= 90 ? 'bg-green-500' : item.score >= 70 ? 'bg-orange-500' : 'bg-red-500'}`}
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>
                <Badge className={item.status === 'excellent' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-blue-100 text-blue-700 hover:bg-blue-100'}>
                  {item.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="api-keys" className="space-y-6">
          <TabsList>
            <TabsTrigger value="api-keys">API Keys</TabsTrigger>
            <TabsTrigger value="access-control">Access Control</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="audit-log">Audit Log</TabsTrigger>
          </TabsList>

          {/* API Keys Tab */}
          <TabsContent value="api-keys" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>API Key Management</CardTitle>
                    <CardDescription>Create and manage API keys for authentication</CardDescription>
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <Key className="w-4 h-4 mr-2" />
                    Generate New Key
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {apiKeys.map((key) => (
                    <div key={key.id} className="flex items-center justify-between p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Key className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-slate-900">{key.name}</span>
                            <Badge 
                              variant={key.status === 'active' ? 'default' : 'secondary'}
                              className={key.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : ''}
                            >
                              {key.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <code className="bg-slate-100 px-2 py-1 rounded">{key.key}</code>
                            <span>Created: {key.created}</span>
                            <span>Last used: {key.lastUsed}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">Rotate</Button>
                        <Button variant="ghost" size="sm" className="text-red-600">Revoke</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Permissions</CardTitle>
                <CardDescription>Configure scopes and rate limits for API keys</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label>Allowed Scopes</Label>
                    <div className="space-y-2">
                      {[
                        { name: 'Read Access', enabled: true },
                        { name: 'Write Access', enabled: true },
                        { name: 'Delete Access', enabled: false },
                        { name: 'Admin Access', enabled: false },
                      ].map((scope, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                          <span className="text-sm text-slate-900">{scope.name}</span>
                          <Switch defaultChecked={scope.enabled} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Label>Rate Limiting</Label>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label className="text-xs text-slate-600">Requests per minute</Label>
                        <Input type="number" defaultValue="1000" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-slate-600">Daily quota</Label>
                        <Input type="number" defaultValue="100000" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs text-slate-600">Burst limit</Label>
                        <Input type="number" defaultValue="2000" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Access Control Tab */}
          <TabsContent value="access-control" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Role-Based Access Control</CardTitle>
                <CardDescription>Manage user roles and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { role: 'Admin', users: 3, permissions: 'Full access to all resources' },
                    { role: 'Developer', users: 12, permissions: 'Read/write access to APIs' },
                    { role: 'Viewer', users: 8, permissions: 'Read-only access' },
                  ].map((role, index) => (
                    <Card key={index} className="border-slate-200">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-slate-900">{role.role}</h4>
                          <Badge variant="outline">{role.users} users</Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{role.permissions}</p>
                        <Button variant="outline" size="sm" className="w-full">Edit Role</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Policies</CardTitle>
                <CardDescription>Configure organization-wide security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Require Multi-Factor Authentication', description: 'All users must enable MFA', enabled: true },
                  { name: 'IP Allowlist', description: 'Restrict access to specific IP ranges', enabled: true },
                  { name: 'Session Timeout', description: 'Auto-logout after 30 minutes of inactivity', enabled: true },
                  { name: 'API Key Rotation', description: 'Require key rotation every 90 days', enabled: false },
                ].map((policy, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
                    <div>
                      <div className="text-sm text-slate-900 mb-1">{policy.name}</div>
                      <div className="text-xs text-slate-500">{policy.description}</div>
                    </div>
                    <Switch defaultChecked={policy.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
                <CardDescription>Track certification and regulatory compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {complianceStatus.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          {item.status === 'compliant' ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-orange-600" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm text-slate-900">{item.standard}</span>
                            <Badge 
                              className={item.status === 'compliant' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-orange-100 text-orange-700 hover:bg-orange-100'}
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <div className="text-xs text-slate-500">
                            Last audit: {item.lastAudit} • Next audit: {item.nextAudit}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          View Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Data Residency</CardTitle>
                  <CardDescription>Configure where your data is stored</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Primary Region</Label>
                    <Select defaultValue="us-east-1">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us-east-1">US East (N. Virginia)</SelectItem>
                        <SelectItem value="eu-west-1">EU West (Ireland)</SelectItem>
                        <SelectItem value="ap-southeast-1">Asia Pacific (Singapore)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div className="text-sm text-slate-900">Enable data replication</div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Encryption</CardTitle>
                  <CardDescription>Data encryption settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div>
                      <div className="text-sm text-slate-900 mb-1">Encryption at Rest</div>
                      <div className="text-xs text-slate-500">AES-256 encryption</div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                    <div>
                      <div className="text-sm text-slate-900 mb-1">Encryption in Transit</div>
                      <div className="text-xs text-slate-500">TLS 1.3</div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Audit Log Tab */}
          <TabsContent value="audit-log">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Security Audit Log</CardTitle>
                    <CardDescription>Complete history of security-related events</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Search logs..." className="w-64" />
                    <Select defaultValue="all">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Events</SelectItem>
                        <SelectItem value="auth">Authentication</SelectItem>
                        <SelectItem value="access">Access Changes</SelectItem>
                        <SelectItem value="api">API Keys</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.risk === 'low' ? 'bg-green-500' :
                          activity.risk === 'medium' ? 'bg-orange-500' :
                          'bg-red-500'
                        }`}></div>
                        <div>
                          <div className="text-sm text-slate-900 mb-1">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </div>
                          <div className="text-xs text-slate-500">
                            Resource: {activity.resource} • {activity.time}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {activity.risk} risk
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
