# SetAside Website

A modern, conversion-focused landing page for SetAside - a behavioral finance app that automatically intercepts paychecks to pay bills before users can spend the money.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Vercel-optimized

## 📁 Project Structure

```
setasideweb/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Site footer
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section with animations
│   │   ├── HowItWorks.tsx # 4-step process
│   │   ├── Features.tsx   # Feature showcase
│   │   └── ...           # Other sections
│   └── ui/               # Reusable UI components
│       ├── Button.tsx    # Button component
│       └── Logo.tsx      # Logo with variants
├── lib/                  # Utility functions
└── public/              # Static assets
    └── favicon.svg      # Site favicon
```

## 🎨 Design System

### Colors
- **Primary**: Deep blue gradient (#1e40af to #0891b2)
- **Secondary**: Emerald green (#059669)
- **Accent**: Golden yellow (#fbbf24)
- **Neutral**: Clean grays (#f8fafc to #1e293b)

### Typography
- **Font**: Inter (loaded via Next.js font optimization)
- **Headings**: Bold with gradient effects
- **Body**: Clean and readable

## 🔧 Key Features

1. **Responsive Design**: Mobile-first approach with breakpoints for all devices
2. **Smooth Animations**: Framer Motion for engaging interactions
3. **SEO Optimized**: Proper meta tags and structured data
4. **Performance**: Optimized images, lazy loading, and code splitting
5. **Accessibility**: WCAG 2.1 AA compliant
6. **Form Validation**: Email capture with real-time validation

## 📱 Sections

1. **Header**: Fixed navigation with mobile menu
2. **Hero**: Eye-catching headline with animated mockup
3. **Problem Statement**: Statistics highlighting the problem
4. **How It Works**: 4-step visual process
5. **Features**: 6 key features in grid layout
6. **Behavioral Science**: 3 principles behind the app
7. **Security**: Trust indicators and partner logos
8. **Testimonials**: Social proof with ratings
9. **FAQ**: Expandable questions and answers
10. **CTA**: Email capture with validation
11. **Footer**: Site links and social media

## 🚀 Deployment

The site is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Environment Variables

No environment variables required for basic setup. For production, you may want to add:

- Email service API keys (Mailchimp, ConvertKit, etc.)
- Analytics tracking codes
- Other third-party integrations

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📄 License

All rights reserved. This is proprietary code for SetAside.

---

Built with ❤️ for SetAside