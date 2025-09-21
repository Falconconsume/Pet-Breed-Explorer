# 🐾 Pet Breeds Gallery

A modern, responsive web application for exploring cat and dog breeds with detailed information, characteristics, and image galleries.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Features

- 🔍 **Smart Search**: Real-time search with autocomplete functionality
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🖼️ **Image Galleries**: Browse multiple images for each breed
- 📊 **Detailed Characteristics**: View breed traits with visual progress bars
- 🎨 **Modern UI**: Clean interface built with shadcn/ui components
- ⚡ **Fast Performance**: Optimized image loading with Next.js Image component
- 🌐 **Dual API Integration**: Fetches data from both Cat API and Dog API

## 🚀 Demo

[Live Demo](https://your-demo-link.vercel.app) <!-- Add your deployment link here -->

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Optimization**: [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)
- **APIs**: 
  - [The Cat API](https://thecatapi.com/)
  - [The Dog API](https://thedogapi.com/)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm/yarn/pnpm/bun package manager
- API keys from [The Cat API](https://thecatapi.com/) and [The Dog API](https://thedogapi.com/)

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/Falconconsume/Pet-Breed-Explorer.git
cd pet-breeds-gallery
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_CAT_API=https://api.thecatapi.com/v1
NEXT_PUBLIC_CAT_KEY=your_cat_api_key_here

NEXT_PUBLIC_DOG_API=https://api.thedogapi.com/v1
NEXT_PUBLIC_DOG_KEY=your_dog_api_key_here
```

4. **Get API Keys**
   - Cat API: Register at [https://thecatapi.com/signup](https://thecatapi.com/signup)
   - Dog API: Register at [https://thedogapi.com/signup](https://thedogapi.com/signup)

5. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
pet-breeds-gallery/
├── app/
│   ├── page.tsx                 # Home page with breeds grid
│   ├── breed/
│   │   └── [id]/
│   │       └── page.tsx         # Individual breed details page
│   └── layout.tsx               # Root layout
├── components/
│   ├── ui/                      # shadcn/ui components
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   ├── badge.tsx
│   │   ├── progress.tsx
│   │   ├── carousel.tsx
│   │   └── ...
│   └── custom/                  # Custom components
│       ├── RatingBar.tsx
│       ├── TraitBadge.tsx
│       └── Gallery.tsx
├── lib/
│   ├── axios.ts                 # API client configuration
│   └── utils.ts                 # Utility functions
├── types/
│   └── breed.ts                 # TypeScript interfaces
├── public/                      # Static assets
└── styles/
    └── globals.css              # Global styles
```

## 🎯 Key Features Explained

### Breed Grid Display
- Responsive grid layout (1-5 columns based on screen size)
- Lazy-loaded images with placeholder states
- Hover effects and smooth transitions

### Search & Filter
- Real-time search with autocomplete
- Filter breeds by name
- Clear filter functionality

### Breed Details Page
- **Overview Tab**: Basic information and description
- **Characteristics Tab**: Visual representation of traits
- **Personality Tab**: Behavioral characteristics
- **Gallery Tab**: Multiple images carousel

### Performance Optimizations
- Next.js Image component with automatic optimization
- Lazy loading for images
- Responsive image sizing
- Efficient data fetching with Promise.all

## 📝 Available Scripts

```bash
# Development
npm run dev           # Start development server

# Build
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors

# Type checking
npm run type-check   # Run TypeScript compiler check
```

## 🌍 Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_CAT_API` | Cat API base URL | Yes | `https://api.thecatapi.com/v1` |
| `NEXT_PUBLIC_CAT_KEY` | Cat API key | Yes | `live_xxxxx` |
| `NEXT_PUBLIC_DOG_API` | Dog API base URL | Yes | `https://api.thedogapi.com/v1` |
| `NEXT_PUBLIC_DOG_KEY` | Dog API key | Yes | `live_xxxxx` |

### Deploy on Other Platforms

Build the application:
```bash
npm run build
```

## 🐛 Known Issues

- Some breed images might not load if not available from the API
- Search is case-sensitive in some browsers
- Gallery carousel might need optimization for very large image sets

## 🙏 Acknowledgments

- [The Cat API](https://thecatapi.com/) for cat breed data
- [The Dog API](https://thedogapi.com/) for dog breed data
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Vercel](https://vercel.com) for hosting and deployment

