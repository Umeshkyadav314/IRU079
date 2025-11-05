import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Page } from '../App';
import {
  ArrowLeft,
  Check,
  Globe,
  Zap,
  Shield,
  Users,
  Moon,
  Sun,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface PricingPageProps {
  navigateTo: (page: Page) => void;
}

const pricingPlans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for trying out Iru079',
    features: [
      '10,000 API calls/month',
      '5 integrations',
      'Basic analytics',
      'Community support',
      '7-day data retention',
      'Standard rate limits',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Starter',
    price: { monthly: 29, yearly: 290 },
    description: 'For small teams and projects',
    features: [
      '100,000 API calls/month',
      '25 integrations',
      'Advanced analytics',
      'Email support',
      '30-day data retention',
      'Increased rate limits',
      'Webhook support',
      'Custom domains',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: { monthly: 99, yearly: 990 },
    description: 'For growing businesses',
    features: [
      '1M API calls/month',
      'Unlimited integrations',
      'Real-time analytics',
      'Priority support',
      '90-day data retention',
      'No rate limits',
      'Advanced webhooks',
      'Custom domains',
      'Team collaboration',
      'SSO & SAML',
      'Audit logs',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, yearly: null },
    description: 'For large organizations',
    features: [
      'Unlimited API calls',
      'Unlimited integrations',
      'Custom analytics',
      'Dedicated support',
      'Unlimited data retention',
      'Custom rate limits',
      'Advanced security',
      'White-label options',
      'SLA guarantee',
      'Dedicated infrastructure',
      'Custom contracts',
      '24/7 phone support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const faqs = [
  {
    question: 'What happens when I exceed my API call limit?',
    answer: 'When you approach your limit, we\'ll send you notifications. If you exceed it, your requests will be throttled but not blocked. You can upgrade anytime to increase your limits.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the charges accordingly.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and offer invoicing for Enterprise plans.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer community support for Free tier, email support for Starter, priority support for Professional, and dedicated 24/7 support for Enterprise customers.',
  },
  {
    question: 'Do you offer discounts for nonprofits or educational institutions?',
    answer: 'Yes! We offer special pricing for nonprofits and educational institutions. Contact our sales team to learn more.',
  },
];

export function PricingPage({ navigateTo }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const { theme, toggleTheme } = useTheme();

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
                <span className="text-slate-900 dark:text-slate-100 hidden sm:inline">Iru079 Pricing</span>
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

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <Switch
              checked={billingCycle === 'yearly'}
              onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
              className="data-[state=checked]:bg-teal-500"
            />
            <span className={`${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
              Yearly
            </span>
            <Badge className="bg-teal-500 hover:bg-teal-600 ml-2">Save 17%</Badge>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 sm:px-6 py-12 -mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-6 sm:p-8 bg-white dark:bg-slate-900 border-2 transition-all ${
                plan.popular
                  ? 'border-teal-500 shadow-xl scale-105 dark:shadow-teal-500/20'
                  : 'border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 hover:bg-teal-600">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-slate-900 dark:text-slate-100 text-2xl mb-2">{plan.name}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  {plan.price.monthly !== null ? (
                    <>
                      <span className="text-4xl text-slate-900 dark:text-slate-100">
                        ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                      </span>
                      <span className="text-slate-600 dark:text-slate-400">/month</span>
                      {billingCycle === 'yearly' && (
                        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          ${plan.price.yearly}/year
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-4xl text-slate-900 dark:text-slate-100">Custom</span>
                  )}
                </div>
              </div>

              <Button
                className={`w-full mb-6 ${
                  plan.popular
                    ? 'bg-teal-500 hover:bg-teal-600 text-white'
                    : 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200'
                }`}
                onClick={() => navigateTo('login')}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Comparison */}
      <div className="bg-white dark:bg-slate-900 py-12 sm:py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 mb-4">
              Why Choose Iru079?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade features at every price point
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <Zap className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-slate-900 dark:text-slate-100 mb-2">Lightning Fast</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Sub-50ms latency with global edge network. Faster than competitors by 3x.
              </p>
            </Card>

            <Card className="p-6 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <Shield className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-slate-900 dark:text-slate-100 mb-2">Enterprise Security</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                SOC 2, GDPR, HIPAA compliant with end-to-end encryption.
              </p>
            </Card>

            <Card className="p-6 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <Users className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-slate-900 dark:text-slate-100 mb-2">24/7 Support</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Expert support team ready to help you succeed at any time.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Got questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-6"
              >
                <AccordionTrigger className="text-slate-900 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-400">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-teal-500" />
                    <span className="text-left">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-slate-100 w-full sm:w-auto"
              onClick={() => navigateTo('login')}
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 w-full sm:w-auto"
              onClick={() => navigateTo('docs')}
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center text-slate-600 dark:text-slate-400">
          <p>© 2025 Iru079. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
