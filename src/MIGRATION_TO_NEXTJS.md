# Migration Guide: React to Next.js

This guide will help you convert the current React application to a full Next.js application with App Router.

## 🎯 Overview

The current codebase is Next.js-ready but uses a client-side routing approach. This guide shows how to convert it to use Next.js's built-in routing system.

## 📋 Current Structure vs Next.js Structure

### Current (Client-Side Routing)
```
/
├── App.tsx (handles all routing)
├── components/
│   ├── LandingPage.tsx
│   ├── Dashboard.tsx
│   └── ...
```

### After Migration (Next.js App Router)
```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (landing)
│   ├── login/
│   │   └── page.tsx
│   ├── docs/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── integrations/
│   │   └── page.tsx
│   └── ...
├── components/
│   └── (shared components)
```

## 🚀 Step-by-Step Migration

### Step 1: Install Next.js Dependencies

Already included in `package.json`. Just run:

```bash
npm install
```

### Step 2: Create App Directory Structure

```bash
mkdir -p app
mkdir -p app/login
mkdir -p app/docs
mkdir -p app/pricing
mkdir -p app/dashboard
mkdir -p app/integrations
mkdir -p app/gateway
mkdir -p app/sandbox
mkdir -p app/ai-assistant
mkdir -p app/monitoring
mkdir -p app/security
mkdir -p app/settings
```

### Step 3: Create Root Layout

Create `app/layout.tsx`:

```typescript
import type { Metadata } from 'next';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import { Toaster } from '../components/ui/sonner';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Iru079 - API Integration Platform',
  description: 'Modern API integration platform with 500+ integrations',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AuthProvider>
            {children}
            <Toaster position="top-right" />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Step 4: Create Landing Page

Create `app/page.tsx`:

```typescript
'use client';

import { LandingPage } from '../components/LandingPage';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  return <LandingPage onNavigate={(page) => router.push(`/${page}`)} />;
}
```

### Step 5: Create Login Page

Create `app/login/page.tsx`:

```typescript
'use client';

import { LoginPage } from '../../components/LoginPage';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  
  return (
    <LoginPage 
      onLogin={() => router.push('/dashboard')}
      onBack={() => router.push('/')}
    />
  );
}
```

### Step 6: Create Docs Page

Create `app/docs/page.tsx`:

```typescript
'use client';

import { DocsPage } from '../../components/DocsPage';
import { useRouter } from 'next/navigation';

export default function Docs() {
  const router = useRouter();
  
  return <DocsPage navigateTo={(page) => router.push(`/${page}`)} />;
}
```

### Step 7: Create Pricing Page

Create `app/pricing/page.tsx`:

```typescript
'use client';

import { PricingPage } from '../../components/PricingPage';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();
  
  return <PricingPage navigateTo={(page) => router.push(`/${page}`)} />;
}
```

### Step 8: Create Dashboard Layout

Create `app/dashboard/layout.tsx`:

```typescript
'use client';

import { DashboardLayout } from '../../components/DashboardLayout';
import { useRouter, usePathname } from 'next/navigation';
import { Page } from '../../App';

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Convert pathname to Page type
  const getCurrentPage = (): Page => {
    const path = pathname.split('/')[1] || 'dashboard';
    return path as Page;
  };
  
  return (
    <DashboardLayout
      currentPage={getCurrentPage()}
      navigateTo={(page) => router.push(`/${page}`)}
    >
      {children}
    </DashboardLayout>
  );
}
```

### Step 9: Create Dashboard Page

Create `app/dashboard/page.tsx`:

```typescript
'use client';

import { Dashboard } from '../../components/Dashboard';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  
  return <Dashboard navigateTo={(page) => router.push(`/${page}`)} />;
}
```

### Step 10: Create Other Protected Pages

Repeat for each protected page:

**`app/integrations/page.tsx`:**
```typescript
'use client';

import { IntegrationHub } from '../../components/IntegrationHub';
import { useRouter } from 'next/navigation';

export default function IntegrationsPage() {
  const router = useRouter();
  return <IntegrationHub navigateTo={(page) => router.push(`/${page}`)} />;
}
```

**`app/gateway/page.tsx`:**
```typescript
'use client';

import { APIGateway } from '../../components/APIGateway';
import { useRouter } from 'next/navigation';

export default function GatewayPage() {
  const router = useRouter();
  return <APIGateway navigateTo={(page) => router.push(`/${page}`)} />;
}
```

**`app/sandbox/page.tsx`:**
```typescript
'use client';

import { APISandbox } from '../../components/APISandbox';
import { useRouter } from 'next/navigation';

export default function SandboxPage() {
  const router = useRouter();
  return <APISandbox navigateTo={(page) => router.push(`/${page}`)} />;
}
```

**`app/ai-assistant/page.tsx`:**
```typescript
'use client';

import { AIAssistant } from '../../components/AIAssistant';
import { useRouter } from 'next/navigation';

export default function AIAssistantPage() {
  const router = useRouter();
  return <AIAssistant navigateTo={(page) => router.push(`/${page}`)} />;
}
```

**`app/monitoring/page.tsx`:**
```typescript
'use client';

import { MonitoringAnalytics } from '../../components/MonitoringAnalytics';
import { useRouter } from 'next/navigation';

export default function MonitoringPage() {
  const router = useRouter();
  return <MonitoringAnalytics navigateTo={(page) => router.push(`/${page}`)} />;
}
```

**`app/security/page.tsx`:**
```typescript
'use client';

import { SecurityCompliance } from '../../components/SecurityCompliance';
import { useRouter } from 'next/navigation';

export default function SecurityPage() {
  const router = useRouter();
  return <SecurityCompliance navigateTo={(page) => router.push(`/${page}`)} />;
}
```

**`app/settings/page.tsx`:**
```typescript
'use client';

import { SettingsPage } from '../../components/SettingsPage';
import { useRouter } from 'next/navigation';

export default function SettingsPageRoute() {
  const router = useRouter();
  return (
    <SettingsPage 
      navigateTo={(page) => router.push(`/${page}`)}
      onLogout={() => router.push('/')}
    />
  );
}
```

### Step 11: Add Middleware for Protected Routes

Create `middleware.ts` in the root:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add paths that require authentication
const protectedPaths = [
  '/dashboard',
  '/integrations',
  '/gateway',
  '/sandbox',
  '/ai-assistant',
  '/monitoring',
  '/security',
  '/settings',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path requires authentication
  const isProtected = protectedPaths.some(path => pathname.startsWith(path));
  
  if (isProtected) {
    // Check for user in cookie or session (implement your auth logic)
    // For now, we'll rely on client-side redirect
    // In production, implement proper session checking here
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

### Step 12: Create Next.js Config

Create `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
```

### Step 13: Update Contexts for Server Components

Update `contexts/ThemeContext.tsx`:

```typescript
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// ... rest of the code remains the same
```

Update `contexts/AuthContext.tsx`:

```typescript
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// ... rest of the code remains the same
```

### Step 14: Create API Routes (Optional)

Create `app/api/auth/[...nextauth]/route.ts` for real authentication:

```typescript
// Example with NextAuth
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '../../../../lib/prisma';

// Configure NextAuth
// See: https://next-auth.js.org/configuration/options
```

### Step 15: Update package.json Scripts

Already configured in `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Step 16: Create Prisma Client Helper

Create `lib/prisma.ts`:

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

### Step 17: Add Loading and Error States

Create `app/loading.tsx`:

```typescript
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
    </div>
  );
}
```

Create `app/error.tsx`:

```typescript
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-teal-500 text-white rounded-lg"
      >
        Try again
      </button>
    </div>
  );
}
```

### Step 18: Add Not Found Page

Create `app/not-found.tsx`:

```typescript
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl mb-4">404 - Page Not Found</h2>
      <Link href="/" className="text-teal-500 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
```

### Step 19: Update Component Links

Update all components to use Next.js `Link` instead of buttons:

```typescript
import Link from 'next/link';

// Instead of:
<button onClick={() => navigateTo('docs')}>Docs</button>

// Use:
<Link href="/docs">Docs</Link>
```

### Step 20: Test the Migration

```bash
# Start the development server
npm run dev

# Test all routes:
# - http://localhost:3000 (landing)
# - http://localhost:3000/login
# - http://localhost:3000/docs
# - http://localhost:3000/pricing
# - http://localhost:3000/dashboard
# - etc.
```

## ✅ Post-Migration Checklist

- [ ] All pages render correctly
- [ ] Navigation works between pages
- [ ] Dark mode persists across pages
- [ ] Authentication redirects work
- [ ] Protected routes are secured
- [ ] Images load properly
- [ ] API routes work (if implemented)
- [ ] SEO metadata is correct
- [ ] Loading states work
- [ ] Error boundaries work
- [ ] Mobile responsive on all pages

## 🔄 Benefits of Next.js Migration

1. **Better SEO** - Server-side rendering for public pages
2. **Faster Initial Load** - Code splitting and optimization
3. **API Routes** - Built-in backend endpoints
4. **File-based Routing** - Cleaner routing structure
5. **Image Optimization** - Automatic image optimization
6. **Better Performance** - React Server Components
7. **TypeScript Integration** - Better type checking

## 📚 Additional Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Next.js Migration Guide](https://nextjs.org/docs/app/building-your-application/upgrading)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🆘 Troubleshooting

**Issue: "use client" errors**
- Add 'use client' to components that use hooks or browser APIs

**Issue: Hydration errors**
- Check for mismatched HTML between server and client
- Use suppressHydrationWarning for theme-dependent content

**Issue: Context not working**
- Ensure contexts are marked with 'use client'
- Wrap layout with providers, not individual pages

---

**Need Help?** Check the Next.js documentation or create an issue.
