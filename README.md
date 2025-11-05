# Iru079 - API Integration Platform

![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.0-38bdf8)
![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748)

Iru079 is a modern, full-featured API Integration Platform built with Next.js, TypeScript, and Tailwind CSS. It provides a comprehensive suite of tools for API management, monitoring, and integration.

## 🌟 Features

- 🔐 **Authentication & Authorization**

  - Email/Password login
  - Multi-factor authentication
  - Role-based access control

- 🎨 **Modern UI/UX**

  - Dark/Light mode
  - Responsive design
  - shadcn/ui components
  - Tailwind CSS styling

- 🛠 **Core Features**
  - API Gateway & Management
  - Integration Hub (500+ integrations)
  - Real-time Monitoring
  - AI-powered Assistant
  - Security & Compliance
  - Interactive API Sandbox

## 📋 Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher (or yarn/pnpm)
- PostgreSQL 14+ (for database)
- Git

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/Umeshkyadav314/IRU079.git
   cd IRU079
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your configurations.

4. **Initialize database**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see your application.

## 📁 Project Structure

```
IRU079/
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── dashboard/     # Dashboard pages
│   └── _app.tsx      # App component
├── src/
│   ├── components/    # React components
│   ├── contexts/      # React contexts
│   ├── prisma/       # Database schema
│   ├── styles/       # Global styles
│   └── types/        # TypeScript types
├── public/            # Static files
└── ...config files
```

## 🔧 Configuration

### Environment Variables

Required environment variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/your_db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

See `.env.example` for all available options.

### Database Setup

1. Create PostgreSQL database
2. Update DATABASE_URL in `.env`
3. Run migrations:
   ```bash
   npx prisma migrate dev
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy!

Detailed deployment guides for other platforms available in `DEPLOYMENT.md`.

## 🧪 Testing

Run the test suite:

```bash
npm run test          # Run tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## 📚 Documentation

- [Project Overview](src/PROJECT_SUMMARY.md)
- [Setup Guide](src/SETUP.md)
- [Features](src/FEATURES.md)
- [Deployment Guide](src/DEPLOYMENT.md)
- [Migration Guide](src/MIGRATION_TO_NEXTJS.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Attributions

See [Attributions.md](src/Attributions.md) for third-party libraries and resources used.

## 💡 Support

- 📧 Email: support@iru079.com
- 🐛 Issues: [GitHub Issues](https://github.com/Umeshkyadav314/IRU079/issues)
- 📖 Wiki: [Project Wiki](https://github.com/Umeshkyadav314/IRU079/wiki)

## ⭐️ Show your support

Give a ⭐️ if this project helped you!
