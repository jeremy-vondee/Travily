# Travily

<br/>

Travily is your all-in-one travel companion that makes trip planning effortless and enjoyable. Book flights, find great hotels, and rent cars — all in one seamless platform. Travily helps you plan every trip smoothly from start to finish. Travel smarter, simpler, and stress-free with Travily by your side.

[![Astro](https://img.shields.io/badge/Astro-v4.0-blue?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-18-green?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://typescriptlang.org)
[![shadcn/ui](https://img.shields.io/badge/shadcn--ui-0.8.0-slate)](https://ui.shadcn.com)

## ✨ Features

- ✈️ **Flight booking** powered by Amadeus API
- 🏨 **Hotel search & booking** (planned)
- 🚗 **Car rental integration** (planned)
- 🔐 **Secure authentication** with Auth0
- 💳 **Payment ready** (Stripe integration planned)
- 📱 **Mobile-first responsive** design
- ⚡ **Fast performance** with Astro + React islands
- 🌍 **Multi-currency** support based on location

## 🛠 Tech Stack

| Frontend   | Backend    | APIs             | Tools        |
| ---------- | ---------- | ---------------- | ------------ |
| Astro 4+   | API Routes | Amadeus          | shadcn/ui    |
| React 18   | TypeScript | Auth0            | Lucide Icons |
| TypeScript | -          | Stripe (planned) | Tailwind CSS |

## 🚀 Quick Start

### 📦 Prerequisites

- Node.js 18+
- API keys for [Amadeus](https://developers.amadeus.com/), [Auth0](https://auth0.com/)

### 🛠️ Installation

```bash
 # Clone the repo
git clone <your-repo-url>
cd travily

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Add your API keys to .env.local

```

### ⚡Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 📁 Project Structure

```bash

src/
├── pages/           # Astro pages (routing)
├── components/      # React components
│   ├── layout/      # Navbar, MainLayout
│   ├── home/        # FlightSearchForm
│   ├── flights/     # FlightResults, SelectedFlightSummary
│   └── booking/     # PassengerForm, PaymentForm
├── api/             # Astro API routes
└── lib/             # Types, utils, API clients
```

### 🔑 Environment Variables

Create .env.local with:

```bash
# Auth0
AUTH0_CLIENT_ID=your_client_id
AUTH0_DOMAIN=your_domain.auth0.com
AUTH0_AUDIENCE=your_api_audience

# Amadeus (flights)
AMADEUS_CLIENT_ID=your_client_id
AMADEUS_CLIENT_SECRET=your_secret

# Payments (future)
STRIPE_SECRET_KEY=sk_test_...

# General
PUBLIC_BASE_URL=http://localhost:4321
```

### 🧹 Scripts

```
bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code
npm run type-check   # TypeScript validation
npm run format       # Format code
```

### 📄 License

MIT License - see LICENSE file.
