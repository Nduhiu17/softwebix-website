# SoftWebix Website

A modern, mobile-first website built with Next.js, React, and Tailwind CSS, featuring a clean design with smooth animations and responsive layout.

## Features

- **Mobile-First Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth animations
- **Interactive Elements**: Floating animations and hover effects using Framer Motion
- **Service Showcase**: Six main service categories with detailed descriptions
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **Accessible**: Semantic HTML and proper contrast ratios

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font family

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main homepage component
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## Services

The website showcases six main services:

1. **Website Development** - High-quality websites with 24/7 maintenance
2. **Mobile Apps Development** - iOS and Android app development
3. **Custom Business Tools** - CRM, ERP, and other business solutions
4. **Social Media Engagement** - Facebook, Instagram, and LinkedIn campaigns
5. **Programming Services** - Python, Java, and backend development
6. **Maintenance & Bug Fixes** - Ongoing support and maintenance

## Customization

The color scheme and animations can be easily customized through the Tailwind configuration file. The design uses a purple-based color palette with complementary colors for different service categories.

## Deployment

To build for production:

```bash
npm run build
npm start
```

The website is optimized for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.
