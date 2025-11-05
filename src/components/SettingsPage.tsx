import { DashboardLayout } from './DashboardLayout';
import { Page } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { User, Bell, Palette, CreditCard, Users, LogOut, Upload, Mail, Shield } from 'lucide-react';

interface SettingsPageProps {
  navigateTo: (page: Page) => void;
  onLogout: () => void;
}

export function SettingsPage({ navigateTo, onLogout }: SettingsPageProps) {
  return (
    <DashboardLayout currentPage="settings" navigateTo={navigateTo}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl text-slate-900 mb-2">Settings</h1>
          <p className="text-slate-600">Manage your account, preferences, and team settings</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information and profile picture</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="bg-teal-100 text-teal-700 text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Photo
                    </Button>
                    <p className="text-xs text-slate-500">JPG, PNG or GIF. Max size 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex gap-2">
                    <Input id="email" type="email" defaultValue="john.doe@company.com" className="flex-1" />
                    <Badge className="self-center bg-green-100 text-green-700 hover:bg-green-100">Verified</Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" defaultValue="Acme Inc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Senior Developer" />
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-teal-600 hover:bg-teal-700">Save Changes</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your password and authentication methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
                  <div>
                    <div className="text-sm text-slate-900 mb-1">Two-Factor Authentication</div>
                    <div className="text-xs text-slate-500">Add an extra layer of security to your account</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Enabled</Badge>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
                  <div>
                    <div className="text-sm text-slate-900 mb-1">Password</div>
                    <div className="text-xs text-slate-500">Last changed 45 days ago</div>
                  </div>
                  <Button variant="outline" size="sm">Change Password</Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
                  <div>
                    <div className="text-sm text-slate-900 mb-1">Active Sessions</div>
                    <div className="text-xs text-slate-500">3 devices currently logged in</div>
                  </div>
                  <Button variant="outline" size="sm">Manage Sessions</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Choose what updates you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'API Alerts', description: 'Get notified about API errors and downtime', enabled: true },
                  { name: 'Usage Reports', description: 'Weekly summary of your API usage', enabled: true },
                  { name: 'Security Alerts', description: 'Critical security notifications', enabled: true },
                  { name: 'Product Updates', description: 'New features and improvements', enabled: false },
                  { name: 'Marketing Emails', description: 'Tips, guides, and promotional content', enabled: false },
                ].map((notification, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
                    <div>
                      <div className="text-sm text-slate-900 mb-1">{notification.name}</div>
                      <div className="text-xs text-slate-500">{notification.description}</div>
                    </div>
                    <Switch defaultChecked={notification.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alert Preferences</CardTitle>
                <CardDescription>Configure how you receive critical alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Alert Delivery</Label>
                  <div className="space-y-2">
                    {[
                      { channel: 'Email', icon: Mail, enabled: true },
                      { channel: 'SMS', icon: Bell, enabled: false },
                      { channel: 'Slack', icon: Bell, enabled: true },
                    ].map((channel, index) => {
                      const Icon = channel.icon;
                      return (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4 text-slate-600" />
                            <span className="text-sm text-slate-900">{channel.channel}</span>
                          </div>
                          <Switch defaultChecked={channel.enabled} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Alert Threshold</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - All alerts</SelectItem>
                      <SelectItem value="medium">Medium - Important alerts only</SelectItem>
                      <SelectItem value="high">High - Critical alerts only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Theme Preferences</CardTitle>
                <CardDescription>Customize the look and feel of your dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Color Theme</Label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: 'Light', active: true },
                      { name: 'Dark', active: false },
                      { name: 'System', active: false },
                    ].map((theme, index) => (
                      <button
                        key={index}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          theme.active ? 'border-teal-500 bg-teal-50' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-sm text-slate-900 mb-2">{theme.name}</div>
                        <div className="h-16 rounded bg-gradient-to-br from-slate-900 to-teal-900"></div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Accent Color</Label>
                  <div className="flex gap-3">
                    {['#14b8a6', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'].map((color, index) => (
                      <button
                        key={index}
                        className="w-10 h-10 rounded-lg border-2 border-slate-200 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Dashboard Density</Label>
                  <Select defaultValue="comfortable">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compact">Compact</SelectItem>
                      <SelectItem value="comfortable">Comfortable</SelectItem>
                      <SelectItem value="spacious">Spacious</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Reset to Default</Button>
                  <Button className="bg-teal-600 hover:bg-teal-700">Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Manage your subscription and billing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-6 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600">
                  <div>
                    <div className="text-white mb-1">Pro Plan</div>
                    <div className="text-3xl text-white mb-2">$99<span className="text-lg">/month</span></div>
                    <div className="text-teal-100 text-sm">Billed monthly • Next invoice on Dec 2, 2025</div>
                  </div>
                  <Button className="bg-white text-teal-600 hover:bg-teal-50">Upgrade to Enterprise</Button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-slate-50">
                    <div className="text-sm text-slate-600 mb-1">API Calls</div>
                    <div className="text-2xl text-slate-900">847K / 1M</div>
                    <div className="text-xs text-slate-500 mt-1">84.7% used</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50">
                    <div className="text-sm text-slate-600 mb-1">Integrations</div>
                    <div className="text-2xl text-slate-900">24 / 50</div>
                    <div className="text-xs text-slate-500 mt-1">48% used</div>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-50">
                    <div className="text-sm text-slate-600 mb-1">Team Members</div>
                    <div className="text-2xl text-slate-900">12 / 25</div>
                    <div className="text-xs text-slate-500 mt-1">48% used</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Manage your payment information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-900 mb-1">Visa ending in 4242</div>
                      <div className="text-xs text-slate-500">Expires 12/2026</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Default</Badge>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View and download past invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { date: 'Nov 2, 2025', amount: '$99.00', status: 'Paid', invoice: 'INV-2025-11' },
                    { date: 'Oct 2, 2025', amount: '$99.00', status: 'Paid', invoice: 'INV-2025-10' },
                    { date: 'Sep 2, 2025', amount: '$99.00', status: 'Paid', invoice: 'INV-2025-09' },
                  ].map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50">
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-slate-900">{invoice.date}</div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{invoice.status}</Badge>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-slate-900">{invoice.amount}</div>
                        <Button variant="ghost" size="sm">Download</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>Manage your team and their permissions</CardDescription>
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <Users className="w-4 h-4 mr-2" />
                    Invite Member
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'John Doe', email: 'john@company.com', role: 'Admin', status: 'active' },
                    { name: 'Sarah Smith', email: 'sarah@company.com', role: 'Developer', status: 'active' },
                    { name: 'Mike Johnson', email: 'mike@company.com', role: 'Developer', status: 'active' },
                    { name: 'Emily Brown', email: 'emily@company.com', role: 'Viewer', status: 'pending' },
                  ].map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-teal-100 text-teal-700">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm text-slate-900 mb-1">{member.name}</div>
                          <div className="text-xs text-slate-500">{member.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{member.role}</Badge>
                        <Badge className={member.status === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-orange-100 text-orange-700 hover:bg-orange-100'}>
                          {member.status}
                        </Badge>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Logout Section */}
        <Card className="border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-slate-900 mb-1">Sign Out</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sign out of your Iru079 account</p>
              </div>
              <Button variant="destructive" onClick={onLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
