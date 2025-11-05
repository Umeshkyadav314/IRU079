# Iru079 Setup Guide

Complete setup guide for the Iru079 API Integration Platform.

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18.x or higher
- npm 9.x or higher (or yarn/pnpm)
- PostgreSQL 14+ (for production database)
- Git (for version control)

## 🚀 Quick Start

### 1. Clone or Setup Project

If starting fresh, create a new Next.js project or use this codebase directly.

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 15
- React 18
- Prisma ORM
- Tailwind CSS 4.0
- shadcn/ui components
- And all other dependencies

### 3. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
# Required
DATABASE_URL="postgresql://user:password@localhost:5432/iru079?schema=public"

# Optional (for development)
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

### 4. Database Setup

#### Option A: Using PostgreSQL

1. **Install PostgreSQL** (if not already installed)
   - macOS: `brew install postgresql`
   - Ubuntu: `sudo apt-get install postgresql`
   - Windows: Download from [postgresql.org](https://www.postgresql.org/download/)

2. **Create Database**
   ```bash
   # Login to PostgreSQL
   psql postgres
   
   # Create database and user
   CREATE DATABASE iru079;
   CREATE USER iru079_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE iru079 TO iru079_user;
   ```

3. **Update DATABASE_URL** in `.env`
   ```env
   DATABASE_URL="postgresql://iru079_user:your_password@localhost:5432/iru079?schema=public"
   ```

#### Option B: Using SQLite (Development Only)

For quick local development:

```env
DATABASE_URL="file:./dev.db"
```

### 5. Prisma Setup

Generate Prisma client and run migrations:

```bash
# Generate Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio to view database
npm run prisma:studio
```

### 6. Start Development Server

```bash
npm run dev
```

The application will be available at: `http://localhost:3000`

## 🎨 Default Credentials

The app uses LocalStorage for demo authentication. Use these credentials:

**Admin Account:**
- Email: `admin@iru079.com`
- Password: `admin123`
- MFA Code: Any 6 digits (e.g., `123456`)

**Developer Account:**
- Email: `demo@iru079.com`
- Password: `demo123`
- MFA Code: Any 6 digits

## 📱 Features & Pages

### Public Pages (No Auth Required)
1. **Landing Page** - `/` - Marketing homepage
2. **Documentation** - `/docs` - API documentation
3. **Pricing** - `/pricing` - Pricing plans
4. **Login** - `/login` - Authentication

### Protected Pages (Requires Auth)
5. **Dashboard** - `/dashboard` - Overview and metrics
6. **Integration Hub** - `/integrations` - Manage integrations
7. **API Gateway** - `/gateway` - API route configuration
8. **API Sandbox** - `/sandbox` - Test API endpoints
9. **AI Assistant** - `/ai-assistant` - AI-powered insights
10. **Monitoring** - `/monitoring` - Analytics and logs
11. **Security** - `/security` - Security & compliance
12. **Settings** - `/settings` - User preferences

## 🌙 Dark Mode

Dark mode is enabled by default. Users can toggle between light/dark modes using the Moon/Sun icon in the header.

**Features:**
- System preference detection
- Persistent preference (LocalStorage)
- Smooth transitions
- All components support both themes

## 🗃️ Database Schema

The Prisma schema includes models for:

### Core Models
- **User** - User accounts with roles
- **Session** - User session management
- **ApiKey** - API key management
- **Integration** - Third-party integrations
- **Webhook** - Webhook configuration

### Security & Monitoring
- **AuditLog** - Security audit trail
- **ApiLog** - API request logging
- **Metric** - Performance metrics
- **RateLimit** - Rate limiting data

### Team & Billing
- **Team** - Organization/team management
- **TeamMember** - Team membership
- **Subscription** - Billing subscriptions

### AI Features
- **AiConversation** - AI chat conversations
- **AiMessage** - Chat message history

See `prisma/schema.prisma` for complete schema.

## 🔧 Configuration

### Theme Customization

Edit `/styles/globals.css` to customize colors:

```css
:root {
  /* Light mode colors */
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  /* ... */
}

.dark {
  /* Dark mode colors */
  --background: #020617;
  --foreground: oklch(0.985 0 0);
  /* ... */
}
```

### Branding

Replace "Iru079" throughout the codebase:

1. Search and replace in all `.tsx` files
2. Update logo component
3. Update metadata in `layout.tsx` (Next.js)
4. Update README and documentation

## 📦 Project Structure

```
iru079/
├── app/                    # Next.js app directory (create for Next.js)
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── LandingPage.tsx
│   ├── Dashboard.tsx
│   └── ...
├── contexts/              # React contexts
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── prisma/                # Database schema
│   └── schema.prisma
├── styles/                # Global styles
│   └── globals.css
├── public/                # Static assets
├── .env                   # Environment variables
├── package.json          # Dependencies
└── README.md             # Documentation
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Add Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add `DATABASE_URL` and other variables
   - Redeploy

### Deploy to Other Platforms

**Netlify:**
```bash
netlify deploy --prod
```

**Railway:**
```bash
railway up
```

**AWS/Azure/GCP:**
- Build: `npm run build`
- Start: `npm run start`
- Use PM2 or similar for process management

## 🧪 Testing

### Manual Testing

1. Test all authentication flows
2. Verify dark/light mode switching
3. Test responsive design on different devices
4. Verify all navigation links work
5. Test API endpoints in Sandbox

### Recommended Testing

Add these for production:
```bash
npm install --save-dev @testing-library/react vitest
```

Create test files:
```typescript
// Example: components/__tests__/Dashboard.test.tsx
import { render } from '@testing-library/react';
import { Dashboard } from '../Dashboard';

test('renders dashboard', () => {
  const { getByText } = render(<Dashboard navigateTo={() => {}} />);
  expect(getByText('Dashboard')).toBeInTheDocument();
});
```

## 🔒 Security Checklist

Before deploying to production:

- [ ] Change default DATABASE_URL
- [ ] Add secure NEXTAUTH_SECRET
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Add rate limiting
- [ ] Enable security headers
- [ ] Set up proper authentication
- [ ] Add input validation
- [ ] Enable audit logging
- [ ] Configure backup strategy

## 📊 Monitoring

Recommended monitoring tools:

- **Sentry** - Error tracking
- **Vercel Analytics** - Performance monitoring
- **LogRocket** - Session replay
- **DataDog** - Infrastructure monitoring

## 🆘 Troubleshooting

### Common Issues

**Issue: Prisma client not found**
```bash
npm run prisma:generate
```

**Issue: Database connection failed**
- Check DATABASE_URL in `.env`
- Verify PostgreSQL is running
- Check credentials

**Issue: Dark mode not working**
- Clear localStorage
- Check ThemeContext is wrapping App
- Verify dark: classes are applied

**Issue: Components not rendering**
- Check import paths
- Verify component exports
- Check for TypeScript errors

### Getting Help

- Check documentation: [docs.iru079.com](https://docs.iru079.com)
- GitHub Issues: Create an issue
- Community: Join our Discord/Slack

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)

## ✅ Next Steps

After setup:

1. ✅ Customize branding and colors
2. ✅ Set up real authentication (NextAuth, Clerk, etc.)
3. ✅ Connect to production database
4. ✅ Add real API endpoints
5. ✅ Configure third-party integrations
6. ✅ Set up monitoring and logging
7. ✅ Add automated tests
8. ✅ Configure CI/CD pipeline
9. ✅ Deploy to production

---

**Need Help?** Create an issue or contact support@iru079.com
