import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Page } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Search,
  Database,
  Cloud,
  Factory,
  Truck,
  Users,
  FileCode,
  Settings,
  CheckCircle,
  XCircle,
  Activity,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

interface IntegrationHubProps {
  navigateTo: (page: Page) => void;
}

const legacyAdapters = [
  {
    id: 1,
    name: 'SAP ECC 6.0',
    category: 'ERP Systems',
    icon: Database,
    status: 'active',
    instances: 24,
    description: 'Enterprise Resource Planning for VW manufacturing plants',
    brand: 'Volkswagen',
    location: 'Wolfsburg, Germany',
    lastSync: '2 min ago',
    health: 98
  },
  {
    id: 2,
    name: 'Oracle Database 19c',
    category: 'Database',
    icon: Database,
    status: 'active',
    instances: 18,
    description: 'Legacy database for Audi production tracking',
    brand: 'Audi',
    location: 'Ingolstadt, Germany',
    lastSync: '5 min ago',
    health: 96
  },
  {
    id: 3,
    name: 'Mainframe AS/400',
    category: 'Legacy Systems',
    icon: FileCode,
    status: 'active',
    instances: 8,
    description: 'Core financial system for Porsche dealerships',
    brand: 'Porsche',
    location: 'Stuttgart, Germany',
    lastSync: '1 min ago',
    health: 100
  },
  {
    id: 4,
    name: 'SAP HANA',
    category: 'ERP Systems',
    icon: Database,
    status: 'active',
    instances: 16,
    description: 'Real-time analytics for Skoda supply chain',
    brand: 'Skoda',
    location: 'Mladá Boleslav, Czech',
    lastSync: '3 min ago',
    health: 99
  },
  {
    id: 5,
    name: 'Custom CRM Legacy',
    category: 'CRM',
    icon: Users,
    status: 'active',
    instances: 12,
    description: 'Customer relationship management for SEAT dealers',
    brand: 'SEAT',
    location: 'Barcelona, Spain',
    lastSync: '8 min ago',
    health: 94
  },
  {
    id: 6,
    name: 'IBM DB2',
    category: 'Database',
    icon: Database,
    status: 'active',
    instances: 10,
    description: 'Parts inventory database for VW India',
    brand: 'Volkswagen',
    location: 'Pune, India',
    lastSync: '4 min ago',
    health: 97
  },
  {
    id: 7,
    name: 'Manufacturing Execution System (MES)',
    category: 'Manufacturing',
    icon: Factory,
    status: 'active',
    instances: 14,
    description: 'Production line control for Audi A8 factory',
    brand: 'Audi',
    location: 'Neckarsulm, Germany',
    lastSync: '1 min ago',
    health: 100
  },
  {
    id: 8,
    name: 'Supply Chain Legacy',
    category: 'Supply Chain',
    icon: Truck,
    status: 'active',
    instances: 20,
    description: 'Supplier network management across VW Group',
    brand: 'VW Group',
    location: 'Global',
    lastSync: '6 min ago',
    health: 95
  },
  {
    id: 9,
    name: 'Oracle EBS R12',
    category: 'ERP Systems',
    icon: Database,
    status: 'warning',
    instances: 6,
    description: 'Financial system for Porsche motorsports',
    brand: 'Porsche',
    location: 'Weissach, Germany',
    lastSync: '15 min ago',
    health: 87
  },
  {
    id: 10,
    name: 'Dealer Management System',
    category: 'CRM',
    icon: Users,
    status: 'active',
    instances: 32,
    description: 'Global dealer network platform',
    brand: 'VW Group',
    location: 'Worldwide',
    lastSync: '2 min ago',
    health: 98
  },
];

const cloudAdapters = [
  {
    id: 11,
    name: 'AWS S3 Integration',
    category: 'Cloud Storage',
    icon: Cloud,
    status: 'active',
    instances: 8,
    description: 'Document storage for compliance and audit',
    brand: 'VW Group',
    location: 'EU-West',
    lastSync: '1 min ago',
    health: 100
  },
  {
    id: 12,
    name: 'Azure AD',
    category: 'Identity',
    icon: Users,
    status: 'active',
    instances: 12,
    description: 'Enterprise identity and access management',
    brand: 'VW Group',
    location: 'Global',
    lastSync: '30 sec ago',
    health: 100
  },
  {
    id: 13,
    name: 'Google Cloud IoT',
    category: 'IoT',
    icon: Activity,
    status: 'active',
    instances: 24,
    description: 'Vehicle telemetry and factory sensors',
    brand: 'Volkswagen',
    location: 'Global',
    lastSync: '45 sec ago',
    health: 99
  },
];

const categories = ['All', 'ERP Systems', 'Database', 'Legacy Systems', 'CRM', 'Manufacturing', 'Supply Chain', 'Cloud Storage', 'IoT'];

export function IntegrationHub({ navigateTo }: IntegrationHubProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTab, setSelectedTab] = useState('legacy');

  const allAdapters = selectedTab === 'legacy' ? legacyAdapters : cloudAdapters;

  const filteredAdapters = allAdapters.filter(adapter => {
    const matchesSearch = adapter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adapter.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adapter.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || adapter.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'warning': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800';
      case 'inactive': return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-700';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400';
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 95) return 'text-green-600 dark:text-green-400';
    if (health >= 85) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <DashboardLayout currentPage="integrations" navigateTo={navigateTo}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-slate-900 dark:text-white mb-2">Integration Hub</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Connect and manage SAP, Oracle, and legacy system adapters
            </p>
          </div>
          <Button className="bg-[#001e50] hover:bg-[#003d82] text-white">
            + Deploy New Adapter
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-[#001e50] to-[#003d82] border-0 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm mb-1">Total Adapters</p>
                  <p className="text-3xl">162</p>
                </div>
                <Database className="w-10 h-10 text-white/30" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-2 border-[#001e50] dark:border-[#00b1eb]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Active</p>
                  <p className="text-3xl text-green-600 dark:text-green-400">156</p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-500/30" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-2 border-[#001e50] dark:border-[#00b1eb]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Brands</p>
                  <p className="text-3xl text-[#001e50] dark:text-[#00b1eb]">6</p>
                </div>
                <Factory className="w-10 h-10 text-[#001e50]/30 dark:text-[#00b1eb]/30" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-2 border-[#001e50] dark:border-[#00b1eb]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Avg Health</p>
                  <p className="text-3xl text-[#001e50] dark:text-[#00b1eb]">97%</p>
                </div>
                <Activity className="w-10 h-10 text-[#001e50]/30 dark:text-[#00b1eb]/30" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search adapters by name, brand, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white dark:bg-slate-900"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="bg-slate-100 dark:bg-slate-800 grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="legacy">Legacy Systems</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="all">All ({legacyAdapters.length + cloudAdapters.length})</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="mt-6">
            {/* Adapters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAdapters.map((adapter) => {
                const Icon = adapter.icon;
                return (
                  <Card key={adapter.id} className="bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 bg-[#001e50] dark:bg-[#00b1eb] rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className={getStatusColor(adapter.status)}>
                          {adapter.status === 'active' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {adapter.status === 'warning' && <Activity className="w-3 h-3 mr-1" />}
                          {adapter.status.toUpperCase()}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-slate-900 dark:text-white">{adapter.name}</CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400 text-sm">
                        {adapter.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Brand:</span>
                          <span className="text-slate-900 dark:text-white">{adapter.brand}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Location:</span>
                          <span className="text-slate-900 dark:text-white text-right">{adapter.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Instances:</span>
                          <Badge variant="outline" className="border-[#001e50] dark:border-[#00b1eb] text-[#001e50] dark:text-[#00b1eb]">
                            {adapter.instances}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Health:</span>
                          <span className={`${getHealthColor(adapter.health)}`}>{adapter.health}%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Last Sync:</span>
                          <span className="text-slate-900 dark:text-white">{adapter.lastSync}</span>
                        </div>

                        <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                          <Button size="sm" variant="outline" className="flex-1 border-[#001e50] dark:border-[#00b1eb] text-[#001e50] dark:text-[#00b1eb]">
                            <Settings className="w-3 h-3 mr-1" />
                            Configure
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <RefreshCw className="w-3 h-3 mr-1" />
                            Sync
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredAdapters.length === 0 && (
              <Card className="bg-white dark:bg-slate-900 p-12 text-center">
                <Database className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                <p className="text-slate-600 dark:text-slate-400">No adapters found matching your criteria</p>
                <Button className="mt-4 bg-[#001e50] hover:bg-[#003d82] text-white">
                  Clear Filters
                </Button>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Quick Deploy Section */}
        <Card className="bg-gradient-to-br from-[#001e50] to-[#003d82] border-0 text-white">
          <CardHeader>
            <CardTitle>Quick Deploy Adapters</CardTitle>
            <CardDescription className="text-blue-200">
              Pre-configured adapters for common VW Group systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001e50] justify-start">
                <Database className="w-4 h-4 mr-2" />
                SAP ECC
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001e50] justify-start">
                <Database className="w-4 h-4 mr-2" />
                Oracle DB
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001e50] justify-start">
                <Factory className="w-4 h-4 mr-2" />
                MES
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#001e50] justify-start">
                <Cloud className="w-4 h-4 mr-2" />
                AWS/Azure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
