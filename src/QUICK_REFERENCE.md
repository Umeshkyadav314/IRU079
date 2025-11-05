# Iru079 - Quick Reference Guide

## 🚀 Quick Start (5 Minutes)

```bash
# 1. Install
npm install

# 2. Setup
cp .env.example .env

# 3. Database
npm run prisma:generate
npm run prisma:migrate

# 4. Run
npm run dev
```

Visit: `http://localhost:3000`

## 🔑 Demo Login

**Admin:**
- Email: `admin@iru079.com`
- Password: `admin123`
- MFA: Any 6 digits

**Developer:**
- Email: `demo@iru079.com`
- Password: `demo123`
- MFA: Any 6 digits

## 📄 All Pages

| Page | URL | Auth Required | Description |
|------|-----|--------------|-------------|
| Landing | `/` | No | Homepage |
| Docs | `/docs` | No | Documentation |
| Pricing | `/pricing` | No | Pricing plans |
| Login | `/login` | No | Authentication |
| Dashboard | `/dashboard` | Yes | Overview |
| Integrations | `/integrations` | Yes | Integration hub |
| Gateway | `/gateway` | Yes | API routes |
| Sandbox | `/sandbox` | Yes | API testing |
| AI Assistant | `/ai-assistant` | Yes | AI chat |
| Monitoring | `/monitoring` | Yes | Analytics |
| Security | `/security` | Yes | Security |
| Settings | `/settings` | Yes | Settings |

## 🎨 Theme Toggle

**Component:**
```typescript
import { useTheme } from '../contexts/ThemeContext';

const { theme, toggleTheme } = useTheme();

// Toggle
<button onClick={toggleTheme}>
  {theme === 'light' ? <Moon /> : <Sun />}
</button>
```

**Dark Mode Classes:**
```tsx
<div className="bg-white dark:bg-slate-900">
  <p className="text-slate-900 dark:text-slate-100">Text</p>
</div>
```

## 🔐 Authentication

**Component:**
```typescript
import { useAuth } from '../contexts/AuthContext';

const { user, login, logout, isAuthenticated } = useAuth();

// Login
await login(email, password);

// Logout
logout();

// Check
if (isAuthenticated) { /* ... */ }
```

## 📱 Responsive Breakpoints

```tsx
// Tailwind breakpoints
sm: 640px   // Tablet
md: 768px   // Medium
lg: 1024px  // Desktop
xl: 1280px  // Large
2xl: 1536px // Extra large

// Usage
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

## 🎨 Color Palette

```css
/* Primary */
Navy: #1e293b (slate-800)
Teal: #14b8a6 (teal-500)

/* Backgrounds */
Light: #f8fafc (slate-50)
Dark: #020617 (slate-950)

/* Cards */
Light: #ffffff (white)
Dark: #0f172a (slate-900)

/* Borders */
Light: #e2e8f0 (slate-200)
Dark: #1e293b (slate-800)
```

## 📦 Common Components

**Button:**
```tsx
import { Button } from './components/ui/button';

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large</Button>
```

**Card:**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

**Input:**
```tsx
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />
```

**Toast:**
```tsx
import { toast } from 'sonner@2.0.3';

// Success
toast.success('Success!');

// Error
toast.error('Error!');

// Info
toast.info('Info');
```

## 🗄️ Database Commands

```bash
# Generate client
npm run prisma:generate

# Create migration
npm run prisma:migrate

# Open studio
npm run prisma:studio

# Reset database
npx prisma migrate reset

# Deploy to production
npx prisma migrate deploy
```

## 🔧 Environment Variables

```env
# Required
DATABASE_URL="postgresql://user:pass@localhost:5432/iru079"

# Optional
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

## 🚢 Deploy Commands

**Vercel:**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

**Docker:**
```bash
docker build -t iru079 .
docker run -p 3000:3000 iru079
```

## 🧪 Test URLs

**Development:**
- App: `http://localhost:3000`
- Prisma Studio: `http://localhost:5555`

**Production:**
- Vercel: `https://your-app.vercel.app`
- Custom: `https://your-domain.com`

## 📊 Key Stats

- **Pages**: 12
- **Components**: 50+
- **Database Models**: 20+
- **Themes**: 2 (Light/Dark)
- **Breakpoints**: 5
- **Icons**: 100+

## 🐛 Common Fixes

**Prisma Error:**
```bash
rm -rf node_modules
npm install
npm run prisma:generate
```

**Build Error:**
```bash
rm -rf .next
npm run build
```

**Port in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**TypeScript Error:**
```bash
npm run type-check
```

## 📚 File Locations

**Components:** `/components/`
**Contexts:** `/contexts/`
**Styles:** `/styles/globals.css`
**Database:** `/prisma/schema.prisma`
**Config:** `/tsconfig.json`, `/package.json`

## 💡 Pro Tips

1. **Dark Mode Default**: App starts in dark mode
2. **Sidebar**: Hidden on mobile, visible on desktop
3. **Charts**: Use Recharts for data visualization
4. **Icons**: Use Lucide React icons
5. **Forms**: Use React Hook Form for complex forms
6. **State**: Use Context for global state
7. **Styling**: Use Tailwind utilities, avoid custom CSS
8. **Type Safety**: Use TypeScript types everywhere

## 🔗 Important Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Prisma Docs**: https://prisma.io/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Recharts**: https://recharts.org

## ⚡ Keyboard Shortcuts

Most modern editors support:
- `Ctrl/Cmd + P`: Quick file search
- `Ctrl/Cmd + Shift + F`: Find in files
- `F2`: Rename symbol
- `Ctrl/Cmd + Space`: Auto-complete

## 📝 Git Workflow

```bash
# Create branch
git checkout -b feature/my-feature

# Commit
git add .
git commit -m "feat: add new feature"

# Push
git push origin feature/my-feature

# Merge to main
git checkout main
git merge feature/my-feature
```

## 🎯 Next Steps

1. ✅ Test all pages
2. ✅ Customize branding
3. ✅ Add real API endpoints
4. ✅ Deploy to production
5. ✅ Set up monitoring
6. ✅ Add custom domain

---

**Need more help?** Check README.md, SETUP.md, or DEPLOYMENT.md
