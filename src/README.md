# Iru079 - API Integration Platform

A modern, Next.js-ready API integration platform with dark mode, comprehensive authentication, and enterprise-grade features.

## 🚀 Features

### Core Features
- ✨ **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 🔐 **Authentication System** - Login, registration, and MFA support
- 📊 **Dashboard** - Real-time metrics and analytics
- 🔌 **Integration Hub** - Connect 500+ third-party services
- 🌐 **API Gateway** - Route management and middleware
- 🧪 **API Sandbox** - Test APIs directly in the browser
- 🤖 **AI Assistant** - AI-powered insights and chat
- 📈 **Monitoring & Analytics** - Real-time performance tracking
- 🛡️ **Security & Compliance** - SOC 2, GDPR, HIPAA ready
- ⚙️ **Settings** - User preferences and configuration
- 📚 **Documentation** - Comprehensive API docs
- 💰 **Pricing** - Flexible pricing tiers

### Technical Features
- 🎨 Fully responsive design (mobile, tablet, desktop)
- 🌙 Dark mode with system preference detection
- 💾 LocalStorage persistence for auth and theme
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS v4.0 for styling
- 🧩 shadcn/ui components
- 📊 Recharts for data visualization
- 🔄 Context API for state management

## 📁 File Structure

```
├── App.tsx                          # Main app component with routing
├── contexts/
│   ├── AuthContext.tsx             # Authentication state management
│   └── ThemeContext.tsx            # Theme state management
├── components/
│   ├── LandingPage.tsx             # Marketing landing page
│   ├── LoginPage.tsx               # Login with MFA
│   ├── DocsPage.tsx                # API documentation
│   ├── PricingPage.tsx             # Pricing plans
│   ├── Dashboard.tsx               # Main dashboard
│   ├── IntegrationHub.tsx          # Integration management
│   ├── APIGateway.tsx              # API gateway configuration
│   ├── APISandbox.tsx              # API testing sandbox
│   ├── AIAssistant.tsx             # AI chat and insights
│   ├── MonitoringAnalytics.tsx     # Performance monitoring
│   ├── SecurityCompliance.tsx      # Security dashboard
│   ├── SettingsPage.tsx            # User settings
│   ├── DashboardLayout.tsx         # Shared layout wrapper
│   └── ui/                         # shadcn/ui components
├── prisma/
│   └── schema.prisma               # Database schema
└── styles/
    └── globals.css                 # Global styles and theme tokens
```

## 🗄️ Database Schema

The Prisma schema includes comprehensive models for:

### User Management
- **User** - User accounts with roles (ADMIN, DEVELOPER, USER, VIEWER)
- **Session** - User sessions with expiration
- **Team** - Team/organization management
- **TeamMember** - Team membership with roles

### API Management
- **ApiKey** - API key management with permissions
- **ApiRoute** - Gateway route configuration
- **RoutePolicy** - Route policies (rate limiting, auth, etc.)
- **RateLimit** - Rate limiting tracking

### Integration & Webhooks
- **Integration** - Third-party integrations
- **Webhook** - Webhook endpoints
- **WebhookDelivery** - Webhook delivery tracking

### Monitoring & Security
- **ApiLog** - API request logging
- **Metric** - Performance metrics
- **AuditLog** - Security audit trail
- **Notification** - User notifications

### AI & Analytics
- **AiConversation** - AI chat conversations
- **AiMessage** - Chat messages
- **Subscription** - Billing and subscriptions

## 🎨 Color Scheme

### Brand Colors
- **Primary (Navy)**: `#1e293b` (slate-800)
- **Secondary (Teal)**: `#14b8a6` (teal-500)
- **Background (Light)**: `#f8fafc` (slate-50)
- **Background (Dark)**: `#020617` (slate-950)

### Usage
- Teal for CTAs, active states, and highlights
- Navy for headers and primary text
- Slate grays for backgrounds and secondary content

## 🔐 Authentication

### Demo Credentials

**Admin Account:**
- Email: `admin@iru079.com`
- Password: `admin123`
- Role: Admin (full access)

**Developer Account:**
- Email: `demo@iru079.com`
- Password: `demo123`
- Role: Developer

### Features
- Email/password authentication
- MFA (Multi-Factor Authentication)
- Role-based access control
- Session management
- LocalStorage persistence

## 🌙 Dark Mode

Dark mode is implemented using:
- Tailwind's `dark:` variant
- CSS custom properties for theme tokens
- LocalStorage for preference persistence
- System preference detection on first visit

Toggle dark mode using the Moon/Sun icon in the header.

## 📱 Responsive Design

The application is fully responsive across:
- **Mobile** (320px+) - Single column, hamburger menu
- **Tablet** (768px+) - Two columns, collapsed sidebar
- **Desktop** (1024px+) - Full layout with sidebar
- **Large Desktop** (1280px+) - Optimized spacing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (for production)

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/iru079"

# App
NEXT_PUBLIC_API_URL="https://api.iru079.com"

# Optional: Third-party services
STRIPE_SECRET_KEY=""
SLACK_CLIENT_ID=""
```

## 📊 Pages Overview

### Public Pages
1. **Landing** (`/`) - Marketing homepage with features
2. **Docs** (`/docs`) - API documentation and guides
3. **Pricing** (`/pricing`) - Pricing plans and FAQ
4. **Login** (`/login`) - Authentication with MFA

### Protected Pages (Requires Auth)
5. **Dashboard** (`/dashboard`) - Overview with metrics
6. **Integrations** (`/integrations`) - Integration hub
7. **API Gateway** (`/gateway`) - Route management
8. **Sandbox** (`/sandbox`) - API testing
9. **AI Assistant** (`/ai-assistant`) - AI chat and insights
10. **Monitoring** (`/monitoring`) - Analytics and logs
11. **Security** (`/security`) - Security compliance
12. **Settings** (`/settings`) - User preferences

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4.0** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **Recharts** - Charts and graphs

### State Management
- **Context API** - Auth and theme state
- **LocalStorage** - Persistence

### Backend (Schema Only)
- **Prisma ORM** - Database ORM
- **PostgreSQL** - Database (recommended)

## 🎯 Component Patterns

### Using Theme Context
```typescript
import { useTheme } from '../contexts/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

### Using Auth Context
```typescript
import { useAuth } from '../contexts/AuthContext';

const { user, login, logout, isAuthenticated } = useAuth();
```

### Dark Mode Classes
```tsx
<div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  {/* Content */}
</div>
```

## 📝 Database Setup

### Initialize Prisma
```bash
# Generate Prisma client
npx prisma generate

# Create database migration
npx prisma migrate dev --name init

# Open Prisma Studio
npx prisma studio
```

### Seed Data (Optional)
```bash
# Create seed file
npx prisma db seed
```

## 🔧 Customization

### Branding
Update branding in:
- `/components/*` - Replace "Iru079" with your brand
- `/styles/globals.css` - Update color tokens
- Theme colors in Tailwind classes

### Adding Pages
1. Create component in `/components/YourPage.tsx`
2. Add page type to `Page` union in `App.tsx`
3. Add route case in `renderPage()` function
4. Update navigation in `DashboardLayout.tsx`

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The app is Next.js-ready and can deploy to:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

MIT License - feel free to use for personal and commercial projects.

## 🤝 Contributing

Contributions welcome! Please read contributing guidelines before submitting PRs.

## 📞 Support

- **Email**: support@iru079.com
- **Docs**: https://docs.iru079.com
- **Community**: https://community.iru079.com

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
