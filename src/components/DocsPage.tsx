import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { Page } from '../App';
import {
  ArrowLeft,
  Book,
  Code,
  Rocket,
  Shield,
  Zap,
  Globe,
  Search,
  ChevronRight,
  Copy,
  Check,
  Moon,
  Sun,
  Terminal,
  FileCode,
  Settings,
  Key
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface DocsPageProps {
  navigateTo: (page: Page) => void;
}

const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Rocket,
    items: [
      { id: 'intro', title: 'Introduction' },
      { id: 'quick-start', title: 'Quick Start' },
      { id: 'installation', title: 'Installation' },
      { id: 'authentication', title: 'Authentication' },
    ],
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    icon: Code,
    items: [
      { id: 'rest-api', title: 'REST API' },
      { id: 'graphql', title: 'GraphQL' },
      { id: 'webhooks', title: 'Webhooks' },
      { id: 'rate-limits', title: 'Rate Limits' },
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Globe,
    items: [
      { id: 'oauth', title: 'OAuth 2.0' },
      { id: 'stripe', title: 'Stripe' },
      { id: 'slack', title: 'Slack' },
      { id: 'github', title: 'GitHub' },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: Shield,
    items: [
      { id: 'api-keys', title: 'API Keys' },
      { id: 'encryption', title: 'Encryption' },
      { id: 'compliance', title: 'Compliance' },
      { id: 'best-practices', title: 'Best Practices' },
    ],
  },
];

export function DocsPage({ navigateTo }: DocsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('intro');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    curl: `curl https://api.iru079.com/v1/users \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
    javascript: `const response = await fetch('https://api.iru079.com/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();`,
    python: `import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.iru079.com/v1/users', headers=headers)
data = response.json()`,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateTo('landing')}
                className="hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-900 dark:text-slate-100 hidden sm:inline">Docs</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                ) : (
                  <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                )}
              </Button>
              <Button onClick={() => navigateTo('login')} className="hidden sm:flex">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search docs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                  />
                </div>
              </div>

              {/* Navigation */}
              <ScrollArea className="h-[calc(100vh-200px)]">
                <nav className="space-y-6">
                  {docSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <div key={section.id}>
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                          <h3 className="text-slate-900 dark:text-slate-100">{section.title}</h3>
                        </div>
                        <div className="space-y-1 ml-6">
                          {section.items.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setSelectedSection(item.id)}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                                selectedSection === item.id
                                  ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400'
                                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                              }`}
                            >
                              {item.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </nav>
              </ScrollArea>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <span>Docs</span>
                <ChevronRight className="w-4 h-4" />
                <span>Getting Started</span>
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900 dark:text-slate-100">Introduction</span>
              </div>

              {/* Content */}
              <article className="prose dark:prose-invert max-w-none">
                <h1 className="text-slate-900 dark:text-slate-100 mb-4">Getting Started with Iru079</h1>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Welcome to Iru079! This guide will help you get started with our API integration platform.
                  Learn how to authenticate, make your first API call, and explore our powerful features.
                </p>

                <Card className="bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 p-6 mb-8">
                  <div className="flex gap-3">
                    <Zap className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-teal-900 dark:text-teal-100 mb-2">Quick Start</h4>
                      <p className="text-teal-800 dark:text-teal-200 text-sm">
                        Get up and running in under 5 minutes. Follow our quick start guide to make your first API call.
                      </p>
                    </div>
                  </div>
                </Card>

                <h2 className="text-slate-900 dark:text-slate-100 mb-4 mt-8">Installation</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  First, install our SDK for your preferred language:
                </p>

                <Tabs defaultValue="javascript" className="mb-8">
                  <TabsList className="bg-slate-100 dark:bg-slate-800">
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                  </TabsList>
                  <TabsContent value="javascript">
                    <div className="relative">
                      <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto">
                        <code>{codeExamples.javascript}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-slate-400 hover:text-slate-100"
                        onClick={() => copyCode(codeExamples.javascript, 'js')}
                      >
                        {copiedCode === 'js' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="python">
                    <div className="relative">
                      <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto">
                        <code>{codeExamples.python}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-slate-400 hover:text-slate-100"
                        onClick={() => copyCode(codeExamples.python, 'py')}
                      >
                        {copiedCode === 'py' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="curl">
                    <div className="relative">
                      <pre className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto">
                        <code>{codeExamples.curl}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 text-slate-400 hover:text-slate-100"
                        onClick={() => copyCode(codeExamples.curl, 'curl')}
                      >
                        {copiedCode === 'curl' ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>

                <h2 className="text-slate-900 dark:text-slate-100 mb-4 mt-8">Authentication</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  All API requests require authentication using an API key. You can generate an API key from your dashboard.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <Terminal className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-4" />
                    <h3 className="text-slate-900 dark:text-slate-100 mb-2">REST API</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Use our RESTful API for simple, stateless requests
                    </p>
                  </Card>
                  <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                    <FileCode className="w-8 h-8 text-teal-600 dark:text-teal-400 mb-4" />
                    <h3 className="text-slate-900 dark:text-slate-100 mb-2">GraphQL</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Query exactly what you need with our GraphQL endpoint
                    </p>
                  </Card>
                </div>

                <h2 className="text-slate-900 dark:text-slate-100 mb-4 mt-8">Next Steps</h2>
                <div className="grid grid-cols-1 gap-4">
                  <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-slate-900 dark:text-slate-100 mb-2">API Reference</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Explore our complete API documentation with examples
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </Card>
                  <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-slate-900 dark:text-slate-100 mb-2">Integrations</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Connect with 500+ third-party services
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </Card>
                  <Card className="p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-500 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-slate-900 dark:text-slate-100 mb-2">Security Best Practices</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Learn how to keep your integrations secure
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </Card>
                </div>
              </article>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
