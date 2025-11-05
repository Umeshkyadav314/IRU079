import { useState } from 'react';
import { DashboardLayout } from './DashboardLayout';
import { Page } from '../App';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import {
  Send,
  Bot,
  User,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Factory,
  Truck,
  Database,
  Zap
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface AIAssistantProps {
  navigateTo: (page: Page) => void;
}

const predictiveData = [
  { day: 'Mon', actual: 145, predicted: 148, confidence: 95 },
  { day: 'Tue', actual: 152, predicted: 154, confidence: 93 },
  { day: 'Wed', actual: 148, predicted: 150, confidence: 94 },
  { day: 'Thu', actual: 156, predicted: 158, confidence: 92 },
  { day: 'Fri', actual: 160, predicted: 162, confidence: 91 },
  { day: 'Sat', actual: null, predicted: 165, confidence: 88 },
  { day: 'Sun', actual: null, predicted: 168, confidence: 85 },
];

const initialMessages = [
  {
    id: 1,
    role: 'assistant',
    content: 'Hello! I\'m SEMP AI Assistant. I can help you with predictive analytics for Volkswagen Group\'s enterprise systems. What would you like to know?',
    timestamp: '09:00 AM',
  },
];

const insights = [
  {
    id: 1,
    type: 'warning',
    title: 'Supplier Delay Risk - Pune Plant',
    description: 'AI model predicts 68% probability of supplier delay affecting Volkswagen India production line.',
    impact: 'High',
    recommendation: 'Contact backup suppliers and adjust production schedule by 2 days.',
    confidence: 68,
    plant: 'VW Pune, India',
  },
  {
    id: 2,
    type: 'info',
    title: 'SAP System Performance Optimization',
    description: 'Expected 15% increase in database query load next week based on historical patterns.',
    impact: 'Medium',
    recommendation: 'Schedule database index optimization during low-traffic hours (2-4 AM CET).',
    confidence: 82,
    plant: 'Wolfsburg, Germany',
  },
  {
    id: 3,
    type: 'success',
    title: 'Audi A8 Production Efficiency',
    description: 'Manufacturing execution system showing 12% improvement in line efficiency.',
    impact: 'Positive',
    recommendation: 'Document best practices and replicate to other Audi production lines.',
    confidence: 95,
    plant: 'Neckarsulm, Germany',
  },
  {
    id: 4,
    type: 'warning',
    title: 'Oracle Database Capacity Alert',
    description: 'Porsche dealer management system will reach 85% storage capacity in 14 days.',
    impact: 'Medium',
    recommendation: 'Initiate data archival process and provision additional storage (500GB).',
    confidence: 91,
    plant: 'Stuttgart, Germany',
  },
];

const suggestions = [
  { text: 'Show supplier delay forecasts', icon: Truck },
  { text: 'Analyze system performance trends', icon: TrendingUp },
  { text: 'Check plant health status', icon: Factory },
  { text: 'Predict API usage patterns', icon: Zap },
];

export function AIAssistant({ navigateTo }: AIAssistantProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      role: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: 'assistant',
        content: getAIResponse(inputValue),
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputValue('');
  };

  const getAIResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('supplier') || lowerQuery.includes('delay')) {
      return 'Based on historical data and current supplier performance metrics, I\'ve identified a 68% risk of supply delay at the Pune plant. The primary supplier for brake components has shown delivery delays in 3 of the last 5 shipments. I recommend:\n\n1. Contact backup supplier (Bosch India)\n2. Adjust production schedule by 48 hours\n3. Increase safety stock by 15%\n\nWould you like me to generate a detailed risk report?';
    }
    
    if (lowerQuery.includes('performance') || lowerQuery.includes('system')) {
      return 'Current system performance analysis across VW Group:\n\n• SAP ECC: 98% health, avg latency 45ms\n• Oracle DB: 96% health, avg latency 52ms\n• Cloud APIs: 100% health, avg latency 28ms\n\nPrediction: SAP query load will increase 15% next week due to month-end reporting. Recommend scheduling index optimization.\n\nWould you like specific optimization recommendations?';
    }
    
    if (lowerQuery.includes('plant') || lowerQuery.includes('health')) {
      return 'Plant Health Status Summary:\n\n✅ Wolfsburg, Germany: 99.8% uptime\n✅ Ingolstadt (Audi): 99.9% uptime\n✅ Neckarsulm (Audi): 100% uptime\n⚠️ Pune, India: 98.2% uptime (supplier risk detected)\n✅ Stuttgart (Porsche): 99.7% uptime\n\nAll systems operational. One medium-priority alert at Pune plant. Would you like detailed diagnostics?';
    }
    
    return 'I can help you with:\n\n• Predictive analytics for supplier delays\n• System performance optimization\n• Plant health monitoring\n• API usage forecasting\n• Cost optimization recommendations\n\nWhat specific area would you like me to analyze?';
  };

  const handleSuggestionClick = (text: string) => {
    setInputValue(text);
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />;
      default: return <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'warning': return 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20';
      case 'success': return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20';
      default: return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20';
    }
  };

  return (
    <DashboardLayout currentPage="ai-assistant" navigateTo={navigateTo}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-slate-900 dark:text-white mb-2">AI Assistant</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Predictive analytics and intelligent insights for VW Group systems
          </p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-[#001e50] to-[#003d82] border-0 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm mb-1">Active Forecasts</p>
                  <p className="text-3xl">12</p>
                </div>
                <TrendingUp className="w-10 h-10 text-white/30" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-2 border-[#001e50] dark:border-[#00b1eb]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Avg Accuracy</p>
                  <p className="text-3xl text-[#001e50] dark:text-[#00b1eb]">94%</p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-500/30" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-2 border-[#001e50] dark:border-[#00b1eb]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Alerts Today</p>
                  <p className="text-3xl text-yellow-600 dark:text-yellow-400">3</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-yellow-500/30" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-900 border-2 border-[#001e50] dark:border-[#00b1eb]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">Cost Saved</p>
                  <p className="text-3xl text-green-600 dark:text-green-400">₹2.1M</p>
                </div>
                <TrendingDown className="w-10 h-10 text-green-500/30" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-slate-900 h-[600px] flex flex-col">
              <CardHeader className="border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#001e50] dark:bg-[#00b1eb] rounded-lg flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-slate-900 dark:text-white">SEMP AI</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      Powered by Machine Learning
                    </CardDescription>
                  </div>
                  <Badge className="ml-auto bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800">
                    Online
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          message.role === 'user' 
                            ? 'bg-[#00b1eb]' 
                            : 'bg-[#001e50] dark:bg-[#00b1eb]'
                        }`}>
                          {message.role === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`flex-1 ${message.role === 'user' ? 'text-right' : ''}`}>
                          <div className={`inline-block p-4 rounded-lg max-w-[85%] ${
                            message.role === 'user'
                              ? 'bg-[#00b1eb] text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                          }`}>
                            <p className="text-sm whitespace-pre-line">{message.content}</p>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Suggestions */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {suggestions.map((suggestion, idx) => {
                      const Icon = suggestion.icon;
                      return (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSuggestionClick(suggestion.text)}
                          className="text-xs border-[#001e50] dark:border-[#00b1eb] text-[#001e50] dark:text-[#00b1eb] hover:bg-[#001e50] hover:text-white dark:hover:bg-[#00b1eb] dark:hover:text-white"
                        >
                          <Icon className="w-3 h-3 mr-1" />
                          {suggestion.text}
                        </Button>
                      );
                    })}
                  </div>

                  {/* Input */}
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about predictions, system health, or optimization..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      className="flex-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                    />
                    <Button 
                      onClick={handleSend} 
                      className="bg-[#001e50] hover:bg-[#003d82] text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Insights Panel */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-slate-900">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">AI Insights</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Real-time predictions and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[520px] pr-4">
                  <div className="space-y-4">
                    {insights.map((insight) => (
                      <Card key={insight.id} className={`border-2 ${getInsightColor(insight.type)}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3 mb-3">
                            {getInsightIcon(insight.type)}
                            <div className="flex-1">
                              <h4 className="text-sm text-slate-900 dark:text-white mb-1">
                                {insight.title}
                              </h4>
                              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                                {insight.description}
                              </p>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {insight.plant}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {insight.confidence}% confidence
                                </Badge>
                              </div>
                              <div className="p-2 bg-white dark:bg-slate-800 rounded text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                                💡 {insight.recommendation}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Predictive Chart */}
        <Card className="bg-white dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white">Adapter Deployment Forecast</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">
              7-day prediction with confidence intervals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={predictiveData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
                <XAxis dataKey="day" className="text-slate-600 dark:text-slate-400" />
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
                  dataKey="actual"
                  stroke="#001e50"
                  strokeWidth={3}
                  name="Actual Deployments"
                  dot={{ fill: '#001e50', r: 5 }}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#00b1eb"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="AI Prediction"
                  dot={{ fill: '#00b1eb', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
