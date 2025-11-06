# SPN rOS - Restaurant ERP System
## Complete Installation Guide

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Detailed Installation](#detailed-installation)
4. [Supabase Setup](#supabase-setup)
5. [Environment Configuration](#environment-configuration)
6. [Running the Application](#running-the-application)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install with: `npm install -g pnpm`
- **Git** - [Download](https://git-scm.com/)
- **Supabase Account** - [Sign up](https://supabase.com/)

---

## ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/bank-spn/Lasted.git
cd Lasted

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
# Create .env file and add your Supabase credentials
# (See Environment Configuration section below)

# 4. Run development server
pnpm dev

# 5. Open browser
# Navigate to http://localhost:3000
```

---

## 📦 Detailed Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/bank-spn/Lasted.git
cd Lasted
```

### Step 2: Install Dependencies

```bash
pnpm install
```

This will install all required packages including:
- React 19
- Vite 7
- tRPC 11
- Supabase Client
- Tailwind CSS 4
- shadcn/ui components
- Recharts (for charts)

### Step 3: Verify Installation

```bash
# Check if all dependencies are installed
pnpm list

# Check Node.js version
node --version  # Should be v18 or higher

# Check pnpm version
pnpm --version  # Should be v8 or higher
```

---

## 🗄️ Supabase Setup

### Step 1: Create Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click **"New Project"**
3. Fill in project details:
   - **Name**: SPN rOS (or any name you prefer)
   - **Database Password**: Choose a strong password
   - **Region**: Select closest to your location
4. Click **"Create new project"**
5. Wait for project to be ready (~2 minutes)

### Step 2: Get API Credentials

1. Go to **Project Settings** → **API**
2. Copy the following:
   - **Project URL**: `https://YOUR_PROJECT_ID.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - **service_role key** (optional): For server-side operations

### Step 3: Run SQL Setup Files

Navigate to **SQL Editor** in Supabase Dashboard:

**Important**: Run these files **in order**, one at a time.

#### File 1: Create Tables
1. Open `supabase/setup/01_create_tables.sql`
2. Copy entire content
3. Paste into SQL Editor
4. Click **"Run"**
5. Wait for success message

#### File 2: Create Indexes
1. Open `supabase/setup/02_create_indexes.sql`
2. Copy entire content
3. Paste into SQL Editor
4. Click **"Run"**
5. Wait for success message

#### File 3: Enable RLS
1. Open `supabase/setup/03_enable_rls.sql`
2. Copy entire content
3. Paste into SQL Editor
4. Click **"Run"**
5. Wait for success message

#### File 4: Functions & Triggers
1. Open `supabase/setup/04_functions_triggers.sql`
2. Copy entire content
3. Paste into SQL Editor
4. Click **"Run"**
5. Wait for success message

#### File 5: Seed Data
1. Open `supabase/setup/05_seed_data.sql`
2. Copy entire content
3. Paste into SQL Editor
4. Click **"Run"**
5. Wait for success message

### Step 4: Enable Realtime

1. Go to **Database** → **Replication** in Supabase Dashboard
2. Enable realtime for these tables (toggle switch):
   - ✅ categories
   - ✅ menu_items
   - ✅ orders
   - ✅ order_items
   - ✅ inventory
   - ✅ employees
   - ✅ attendance
   - ✅ cash_drawer
   - ✅ cash_transactions
   - ✅ accounting_transactions
   - ✅ audit_log
   - ✅ system_settings

### Step 5: Verify Database Setup

Run this query in SQL Editor to verify:

```sql
SELECT 'categories' as table_name, COUNT(*) as count FROM categories
UNION ALL SELECT 'menu_items', COUNT(*) FROM menu_items
UNION ALL SELECT 'orders', COUNT(*) FROM orders
UNION ALL SELECT 'employees', COUNT(*) FROM employees
UNION ALL SELECT 'inventory', COUNT(*) FROM inventory;
```

**Expected Results:**
- categories: 4
- menu_items: 2
- orders: 7
- employees: 5
- inventory: 6

---

## 🔐 Environment Configuration

### Step 1: Create .env File

Create a `.env` file in the project root:

```bash
# Copy from template
cp .env.example .env
```

### Step 2: Add Supabase Credentials

Edit `.env` and add your Supabase credentials:

```env
# ============================================
# Supabase Configuration
# ============================================
# Replace with your actual Supabase project URL
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co

# Replace with your actual Supabase anon/public key
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IllvdXJfcHJvamVjdF9pZCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjAwMDAwMDAwLCJleHAiOjIwMDAwMDAwMDB9.YOUR_ANON_KEY

# Optional: Service Role Key (for server-side operations)
# WARNING: Keep this secret! Never expose in frontend code
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# ============================================
# Application Configuration
# ============================================
NODE_ENV=development
VITE_APP_TITLE=SPN rOS - Restaurant ERP
VITE_APP_LOGO=/logo.png
```

### Step 3: Verify Configuration

```bash
# Check if .env file exists
ls -la .env

# Verify environment variables are loaded (don't run in production)
cat .env
```

**Important Security Notes:**
- ✅ Never commit `.env` to version control
- ✅ Keep `SUPABASE_SERVICE_ROLE_KEY` secret
- ✅ Use different keys for development and production
- ✅ `.env` is already in `.gitignore`

---

## 🚀 Running the Application

### Development Mode

```bash
# Start development server
pnpm dev

# Server will start on http://localhost:3000
# Frontend will auto-reload on file changes
```

### Build for Production

```bash
# Build the application
pnpm build

# This creates:
# - dist/public/ - Frontend static files
# - dist/index.js - Backend server bundle
```

### Run Production Build Locally

```bash
# Start production server
pnpm start

# Server will start on http://localhost:3000
```

### Other Useful Commands

```bash
# Type checking
pnpm check

# Format code
pnpm format

# Run tests
pnpm test

# Database migrations (if using Drizzle)
pnpm db:push
```

---

## 🌐 Deployment

### Deploy to Vercel

#### Step 1: Prepare for Deployment

Ensure all changes are committed:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### Step 2: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your GitHub repository
4. Click **"Import"**

#### Step 3: Configure Build Settings

- **Framework Preset**: Other
- **Build Command**: `pnpm build`
- **Output Directory**: `dist/public`
- **Install Command**: `pnpm install`

#### Step 4: Add Environment Variables

In Vercel project settings, add:

```
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

#### Step 5: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (~2-5 minutes)
3. Your app will be live at: `https://your-project.vercel.app`

### Deploy to Other Platforms

See `VERCEL_DEPLOYMENT.md` for detailed Vercel instructions.

For other platforms (Netlify, Railway, etc.), the build process is similar:
- Build command: `pnpm build`
- Output directory: `dist/public`
- Node version: 18+

---

## 🔍 Troubleshooting

### Common Issues

#### Issue 1: "Cannot find module" errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
pnpm install
```

#### Issue 2: "Supabase connection failed"

**Possible causes:**
1. Wrong URL or API key in `.env`
2. Supabase project not ready
3. RLS policies blocking access

**Solution:**
1. Verify credentials in Supabase Dashboard → Settings → API
2. Check if project status is "Active" (green dot)
3. Verify RLS policies are set to public access (for development)

#### Issue 3: "Port 3000 already in use"

**Solution:**
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 pnpm dev
```

#### Issue 4: Build fails with TypeScript errors

**Solution:**
```bash
# Check TypeScript errors
pnpm check

# If errors persist, try:
rm -rf node_modules dist
pnpm install
pnpm build
```

#### Issue 5: Realtime not working

**Checklist:**
- ✅ Realtime enabled in Supabase (Database → Replication)
- ✅ RLS policies allow SELECT access
- ✅ Browser WebSocket connection not blocked
- ✅ Correct table names in code

**Test realtime:**
1. Open browser console (F12)
2. Look for WebSocket connection logs
3. Make changes in Supabase Dashboard
4. Check if frontend updates automatically

#### Issue 6: "Missing environment variables"

**Solution:**
```bash
# Verify .env file exists
cat .env

# Check if variables are loaded
echo $VITE_SUPABASE_URL

# Restart dev server after changing .env
pnpm dev
```

### Getting Help

If you encounter issues not covered here:

1. Check browser console for errors (F12)
2. Check server logs in terminal
3. Review Supabase logs (Dashboard → Logs)
4. Refer to documentation:
   - `README.md` - Project overview
   - `SUPABASE_SETUP_COMPLETE.md` - Detailed Supabase guide
   - `VERCEL_DEPLOYMENT.md` - Deployment guide
   - `supabase/setup/README.md` - SQL setup guide

---

## 📁 Project Structure

```
spn-ros-erp/
├── client/                 # Frontend source code
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities
│   │   ├── pages/         # Page components
│   │   └── index.css      # Global styles
│   └── index.html         # HTML template
├── server/                # Backend source code
│   ├── _core/             # Core server logic
│   ├── db.ts              # Database helpers
│   ├── routers.ts         # tRPC routers
│   └── storage.ts         # S3 storage helpers
├── supabase/              # Supabase configuration
│   ├── setup/             # SQL setup files
│   │   ├── 01_create_tables.sql
│   │   ├── 02_create_indexes.sql
│   │   ├── 03_enable_rls.sql
│   │   ├── 04_functions_triggers.sql
│   │   └── 05_seed_data.sql
│   └── README.md          # Supabase setup guide
├── shared/                # Shared code
│   ├── const.ts           # Constants
│   ├── menu.json          # Menu translations
│   └── types.ts           # TypeScript types
├── .env                   # Environment variables (create this)
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies
├── pnpm-lock.yaml         # Lock file
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
├── vercel.json            # Vercel config
└── README.md              # Project overview
```

---

## ✅ Success Checklist

After installation, verify everything works:

- [ ] Dependencies installed (`pnpm install` succeeded)
- [ ] Supabase project created
- [ ] All 5 SQL files executed successfully
- [ ] Realtime enabled for all tables
- [ ] Environment variables configured in `.env`
- [ ] Development server starts (`pnpm dev`)
- [ ] App opens at http://localhost:3000
- [ ] Dashboard shows data from Supabase
- [ ] Settings page shows "Connected" status
- [ ] Can navigate between pages
- [ ] Realtime updates work (test by changing data in Supabase)

---

## 📚 Additional Resources

- **GitHub Repository**: https://github.com/bank-spn/Lasted
- **Supabase Documentation**: https://supabase.com/docs
- **Vite Documentation**: https://vitejs.dev/
- **React Documentation**: https://react.dev/
- **tRPC Documentation**: https://trpc.io/
- **Tailwind CSS**: https://tailwindcss.com/
- **shadcn/ui**: https://ui.shadcn.com/

---

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review project documentation files
3. Check GitHub Issues
4. Contact project maintainer

---

**Last Updated**: November 2, 2025  
**Version**: 1.0.0  
**License**: MIT

