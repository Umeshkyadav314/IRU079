# Deployment Guide for Iru079

Complete guide for deploying Iru079 to various platforms.

## 🚀 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All tests pass
- [ ] Environment variables are configured
- [ ] Database is set up
- [ ] Build completes successfully (`npm run build`)
- [ ] TypeScript has no errors (`npm run type-check`)
- [ ] Security best practices are followed

## 🌐 Platform-Specific Guides

### 1. Vercel (Recommended)

**Why Vercel:**
- Built specifically for Next.js
- Zero configuration deployment
- Automatic HTTPS
- Global CDN
- Serverless functions
- Free tier available

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/iru079.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Configure project settings

3. **Environment Variables**
   
   Add in Vercel Dashboard → Settings → Environment Variables:
   ```
   DATABASE_URL=postgresql://...
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Get your URL: `https://your-project.vercel.app`

5. **Set Up Database**
   - Use Vercel Postgres, or
   - External PostgreSQL (Railway, Supabase, etc.)

6. **Run Migrations**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Run migrations on Vercel
   vercel env pull .env.local
   npx prisma migrate deploy
   ```

**Custom Domain:**
- Go to Settings → Domains
- Add your domain
- Update DNS records

---

### 2. Netlify

**Steps:**

1. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

2. **Install Netlify Plugin**
   ```bash
   npm install -D @netlify/plugin-nextjs
   ```

3. **Create netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [[plugins]]
     package = "@netlify/plugin-nextjs"
   
   [build.environment]
     NODE_VERSION = "18"
   ```

4. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

---

### 3. Railway

**Steps:**

1. **Create Project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"

2. **Add PostgreSQL**
   - In Railway dashboard
   - Click "New" → "Database" → "PostgreSQL"
   - Copy DATABASE_URL

3. **Configure Environment Variables**
   ```
   DATABASE_URL=${{Postgres.DATABASE_URL}}
   NEXTAUTH_SECRET=your-secret
   NODE_ENV=production
   ```

4. **Deploy**
   - Railway will auto-deploy on git push
   - Get URL from dashboard

---

### 4. AWS (EC2 + RDS)

**Infrastructure:**

1. **RDS PostgreSQL**
   - Create RDS PostgreSQL instance
   - Note connection details

2. **EC2 Instance**
   - Ubuntu 22.04 LTS
   - t3.small or larger
   - Open ports: 22, 80, 443

**Setup:**

```bash
# SSH into EC2
ssh -i your-key.pem ubuntu@your-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone repository
git clone https://github.com/yourusername/iru079.git
cd iru079

# Install dependencies
npm install

# Set up environment
cp .env.example .env
nano .env  # Add your variables

# Build
npm run build

# Start with PM2
pm2 start npm --name "iru079" -- start
pm2 startup
pm2 save

# Set up Nginx
sudo apt install nginx
sudo nano /etc/nginx/sites-available/iru079
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/iru079 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# SSL with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### 5. Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npx prisma generate
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/iru079
      - NEXTAUTH_SECRET=your-secret
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=iru079
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

**Deploy:**
```bash
docker-compose up -d
```

---

### 6. DigitalOcean App Platform

**Steps:**

1. **Create App**
   - Go to DigitalOcean
   - Click "Create" → "Apps"
   - Connect GitHub repository

2. **Configure**
   ```
   Build Command: npm run build
   Run Command: npm start
   ```

3. **Add Database**
   - Add PostgreSQL managed database
   - Link to app

4. **Environment Variables**
   - Add in Settings
   - Use ${db.DATABASE_URL} for database

5. **Deploy**
   - Click "Deploy"
   - Get URL

---

## 🗄️ Database Deployment Options

### Option 1: Vercel Postgres
```bash
# Install package
npm install @vercel/postgres

# Use in app
import { sql } from '@vercel/postgres';
```

### Option 2: Supabase
- Free tier: 500MB database
- Built-in Auth
- Real-time subscriptions

### Option 3: Railway PostgreSQL
- Simple setup
- Pay-as-you-go
- Auto-scaling

### Option 4: AWS RDS
- Enterprise grade
- Multi-AZ deployment
- Automated backups

### Option 5: Self-Hosted PostgreSQL
```bash
# Install on Ubuntu
sudo apt update
sudo apt install postgresql postgresql-contrib

# Create database
sudo -u postgres psql
CREATE DATABASE iru079;
CREATE USER iru079_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE iru079 TO iru079_user;
```

---

## 🔐 Security Considerations

### Environment Variables
```bash
# Never commit .env files
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore

# Use different secrets per environment
PRODUCTION_SECRET != DEVELOPMENT_SECRET
```

### Database Security
- Use SSL connections
- Whitelist IP addresses
- Use strong passwords
- Regular backups
- Enable audit logging

### Application Security
- Enable HTTPS only
- Set security headers
- Implement rate limiting
- Use CORS properly
- Sanitize user input

**next.config.js Security Headers:**
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

---

## 📊 Monitoring & Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Sentry Error Tracking
```bash
npm install @sentry/nextjs
```

### Google Analytics
```typescript
// Add in app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🧪 Post-Deployment Testing

### Checklist
- [ ] Homepage loads
- [ ] All routes accessible
- [ ] Authentication works
- [ ] Database queries work
- [ ] Images load
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] Forms submit correctly
- [ ] API endpoints respond
- [ ] Error pages work

### Tools
```bash
# Lighthouse
npx lighthouse https://your-domain.com --view

# Load testing
npx autocannon https://your-domain.com

# Security scan
npx snyk test
```

---

## 🔧 Maintenance

### Database Backups
```bash
# Automated daily backups
0 2 * * * pg_dump iru079 > backup_$(date +\%Y\%m\%d).sql
```

### Updates
```bash
# Check for updates
npx npm-check-updates

# Update dependencies
npm update

# Test after updates
npm test
npm run build
```

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Enable error tracking (Sentry)
- Monitor performance (Vercel Analytics)
- Track user behavior (Google Analytics)

---

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Errors
- Check DATABASE_URL format
- Verify SSL settings
- Check IP whitelist
- Test connection string

### Memory Issues
- Increase Node memory: `NODE_OPTIONS="--max-old-space-size=4096"`
- Optimize images
- Code splitting
- Remove unused dependencies

---

## 📞 Support

- Documentation: https://docs.iru079.com
- Issues: https://github.com/yourorg/iru079/issues
- Email: support@iru079.com

---

**Happy Deploying! 🚀**
