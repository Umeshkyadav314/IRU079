import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, Shield, Zap, Network, BarChart3, Lock, Cloud, Database, Cpu, TrendingUp } from 'lucide-react';
import { Page } from '../App';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001e50] via-[#003d82] to-[#00b1eb]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <Network className="w-7 h-7 text-[#001e50]" />
          </div>
          <div>
            <span className="text-white block text-xl">SEMP</span>
            <span className="text-blue-200 text-xs hidden sm:block">Smart Enterprise Modernization Platform</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => onNavigate('docs')} className="text-blue-100 hover:text-white transition-colors">Documentation</button>
          <button onClick={() => onNavigate('pricing')} className="text-blue-100 hover:text-white transition-colors">Solutions</button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#001e50]" onClick={() => onNavigate('login')}>
            Enterprise Login
          </Button>
        </div>
        <Button variant="outline" className="md:hidden text-white border-white hover:bg-white hover:text-[#001e50]" onClick={() => onNavigate('login')}>
          Login
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-6 py-3 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm">
            <span className="text-white">Trusted by Volkswagen Group Worldwide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Transform Legacy Systems<br />
            <span className="text-[#00b1eb]">Without Business Disruption</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto px-4">
            Connect SAP, Oracle, and legacy infrastructure to modern cloud APIs. 
            Unify VW, Audi, Porsche, and Skoda brands under one intelligent platform with AI-powered predictions and automated compliance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-[#001e50] hover:bg-blue-50 w-full sm:w-auto" onClick={() => onNavigate('login')}>
              Start Modernization
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#001e50] w-full sm:w-auto" onClick={() => onNavigate('docs')}>
              View Architecture
            </Button>
          </div>
          <div className="mt-8 text-blue-200 text-sm sm:text-base">
            ⚡ Zero Downtime Migration • 🛡️ GDPR & ISO 27001 Compliant • 🔗 500+ Pre-built Adapters
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6 text-center">
            <div className="text-3xl sm:text-4xl text-white mb-2">60%</div>
            <div className="text-blue-100 text-sm sm:text-base">Faster Modernization</div>
          </Card>
          <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6 text-center">
            <div className="text-3xl sm:text-4xl text-white mb-2">40%</div>
            <div className="text-blue-100 text-sm sm:text-base">Cost Reduction</div>
          </Card>
          <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6 text-center">
            <div className="text-3xl sm:text-4xl text-white mb-2">99.9%</div>
            <div className="text-blue-100 text-sm sm:text-base">Uptime SLA</div>
          </Card>
          <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6 text-center">
            <div className="text-3xl sm:text-4xl text-white mb-2">0</div>
            <div className="text-blue-100 text-sm sm:text-base">Days Downtime</div>
          </Card>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">Volkswagen Group's Modernization Challenges</h2>
            <p className="text-lg sm:text-xl text-blue-100">Five critical pain points affecting global operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6">
              <Database className="w-10 h-10 text-[#00b1eb] mb-4" />
              <h3 className="text-lg sm:text-xl text-white mb-3">Legacy & Siloed Systems</h3>
              <p className="text-blue-100 text-sm">
                Each brand (VW, Audi, Skoda, Porsche) runs independent SAP ECC, Oracle ERP, and custom systems built over decades.
              </p>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6">
              <Network className="w-10 h-10 text-[#00b1eb] mb-4" />
              <h3 className="text-lg sm:text-xl text-white mb-3">Complex Data Integration</h3>
              <p className="text-blue-100 text-sm">
                Region-specific databases with different formats (SOAP, XML, CSV). Integration projects take months.
              </p>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6">
              <Shield className="w-10 h-10 text-[#00b1eb] mb-4" />
              <h3 className="text-lg sm:text-xl text-white mb-3">Manual Compliance</h3>
              <p className="text-blue-100 text-sm">
                GDPR and ISO 27001 compliance audits are manual, causing delays and regulatory risk.
              </p>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6">
              <TrendingUp className="w-10 h-10 text-[#00b1eb] mb-4" />
              <h3 className="text-lg sm:text-xl text-white mb-3">Limited Predictive Intelligence</h3>
              <p className="text-blue-100 text-sm">
                Huge amounts of IoT and plant data collected but not used for predictions or early warnings.
              </p>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6">
              <Cloud className="w-10 h-10 text-[#00b1eb] mb-4" />
              <h3 className="text-lg sm:text-xl text-white mb-3">High Migration Cost</h3>
              <p className="text-blue-100 text-sm">
                Replacing legacy systems costs millions with high downtime risk during transitions.
              </p>
            </Card>
            <Card className="bg-white/10 border-white/20 backdrop-blur-md p-6">
              <Lock className="w-10 h-10 text-[#00b1eb] mb-4" />
              <h3 className="text-lg sm:text-xl text-white mb-3">Security Vulnerabilities</h3>
              <p className="text-blue-100 text-sm">
                Fragmented systems create security gaps and audit trail inconsistencies across regions.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Solution Modules Section */}
      <div className="bg-white dark:bg-slate-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">SEMP Core Modules</h2>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
              Six integrated modules for complete enterprise modernization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#001e50] to-[#003d82] border-0 text-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Integration Hub</h3>
              <p className="text-blue-100 mb-4">
                Connect SAP, Oracle, and legacy systems using plug-and-play adapters. Real-time data flow across all VW brands.
              </p>
              <Button variant="ghost" className="text-white hover:bg-white/20 p-0" onClick={() => onNavigate('integrations')}>
                Explore →
              </Button>
            </Card>

            <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#00b1eb] to-[#0066cc] border-0 text-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">API Gateway</h3>
              <p className="text-blue-100 mb-4">
                Auto-convert SOAP/XML to REST/GraphQL. Simplify cloud and mobile integration with AI-powered mapping.
              </p>
              <Button variant="ghost" className="text-white hover:bg-white/20 p-0" onClick={() => onNavigate('gateway')}>
                Explore →
              </Button>
            </Card>

            <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#003d82] to-[#001e50] border-0 text-white hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">AI Assistant</h3>
              <p className="text-blue-100 mb-4">
                Predict system failures and supplier delays. AI-powered insights reduce downtime by 70%.
              </p>
              <Button variant="ghost" className="text-white hover:bg-white/20 p-0" onClick={() => onNavigate('ai-assistant')}>
                Explore →
              </Button>
            </Card>

            <Card className="p-6 sm:p-8 bg-white dark:bg-slate-800 border-2 border-[#001e50] dark:border-[#00b1eb] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#001e50] dark:bg-[#00b1eb] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-slate-900 dark:text-white mb-3">Monitoring & Analytics</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Unified dashboard for uptime, cost savings, and SLA compliance across all regions.
              </p>
              <Button variant="ghost" className="text-[#001e50] dark:text-[#00b1eb] hover:bg-[#001e50]/10 dark:hover:bg-[#00b1eb]/10 p-0" onClick={() => onNavigate('monitoring')}>
                Explore →
              </Button>
            </Card>

            <Card className="p-6 sm:p-8 bg-white dark:bg-slate-800 border-2 border-[#001e50] dark:border-[#00b1eb] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#001e50] dark:bg-[#00b1eb] rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-slate-900 dark:text-white mb-3">Security & Compliance</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Automated GDPR and ISO 27001 checks. Continuous audit logs and threat detection.
              </p>
              <Button variant="ghost" className="text-[#001e50] dark:text-[#00b1eb] hover:bg-[#001e50]/10 dark:hover:bg-[#00b1eb]/10 p-0" onClick={() => onNavigate('security')}>
                Explore →
              </Button>
            </Card>

            <Card className="p-6 sm:p-8 bg-white dark:bg-slate-800 border-2 border-[#001e50] dark:border-[#00b1eb] hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#001e50] dark:bg-[#00b1eb] rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-slate-900 dark:text-white mb-3">Adapter Library</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                500+ pre-built connectors for SAP ECC, Oracle, mainframes, IoT devices, and dealer systems.
              </p>
              <Button variant="ghost" className="text-[#001e50] dark:text-[#00b1eb] hover:bg-[#001e50]/10 dark:hover:bg-[#00b1eb]/10 p-0" onClick={() => onNavigate('integrations')}>
                Explore →
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Use Case Section */}
      <div className="bg-gradient-to-r from-[#001e50] to-[#003d82] py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl text-white mb-6">Real-World Impact</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Smart Supply Chain Modernization for VW Group India
            </p>
            <Card className="bg-white/10 border-white/20 backdrop-blur-md p-8 sm:p-12 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-white mb-4">❌ Before SEMP</h4>
                  <ul className="text-blue-100 space-y-2 text-sm sm:text-base">
                    <li>• Supplier delays affecting production</li>
                    <li>• Different ERPs per plant</li>
                    <li>• No visibility across supply chain</li>
                    <li>• 18-month integration cycles</li>
                    <li>• 4-5 days downtime per migration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-4">✅ After SEMP</h4>
                  <ul className="text-green-300 space-y-2 text-sm sm:text-base">
                    <li>• 3× faster supply visibility</li>
                    <li>• Unified API across all systems</li>
                    <li>• AI-powered delay predictions</li>
                    <li>• 7-month modernization cycle</li>
                    <li>• Zero production downtime</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl text-white mb-2">₹4.2M Saved Annually</div>
                <div className="text-blue-200">40% reduction in maintenance costs</div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Card className="bg-gradient-to-r from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 border-2 border-[#00b1eb] p-8 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto px-4">
            Join Volkswagen Group's digital transformation journey. Modernize legacy systems without disruption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#001e50] hover:bg-[#003d82] text-white w-full sm:w-auto" onClick={() => onNavigate('login')}>
              Access Enterprise Platform
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#001e50] text-[#001e50] dark:text-white dark:border-white hover:bg-[#001e50] hover:text-white w-full sm:w-auto" onClick={() => onNavigate('docs')}>
              View Technical Documentation
            </Button>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Network className="w-5 h-5 text-[#001e50]" />
                </div>
                <span className="text-white">SEMP</span>
              </div>
              <p className="text-blue-200 text-sm">
                Smart Enterprise Modernization Platform for Volkswagen Group
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Platform</h4>
              <div className="space-y-2 text-blue-200 text-sm">
                <button onClick={() => onNavigate('integrations')} className="block hover:text-white">Integration Hub</button>
                <button onClick={() => onNavigate('gateway')} className="block hover:text-white">API Gateway</button>
                <button onClick={() => onNavigate('ai-assistant')} className="block hover:text-white">AI Assistant</button>
                <button onClick={() => onNavigate('monitoring')} className="block hover:text-white">Monitoring</button>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <div className="space-y-2 text-blue-200 text-sm">
                <button onClick={() => onNavigate('docs')} className="block hover:text-white">Documentation</button>
                <button onClick={() => onNavigate('pricing')} className="block hover:text-white">Solutions</button>
                <button onClick={() => onNavigate('security')} className="block hover:text-white">Security</button>
                <button onClick={() => onNavigate('settings')} className="block hover:text-white">Support</button>
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Enterprise</h4>
              <div className="space-y-2 text-blue-200 text-sm">
                <button onClick={() => onNavigate('login')} className="block hover:text-white">Login</button>
                <a href="#" className="block hover:text-white">Contact Sales</a>
                <a href="#" className="block hover:text-white">Partner Program</a>
                <a href="#" className="block hover:text-white">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="text-center text-blue-200 text-sm border-t border-white/20 pt-8">
            © 2025 SEMP - Volkswagen Group. Enterprise-grade modernization platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
