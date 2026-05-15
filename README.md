# Agnivesh AB — Futuristic Portfolio

A next-generation, high-performance personal portfolio website built for Agnivesh AB. Designed with a futuristic, cinematic, and AI-inspired aesthetic using the latest web technologies.

## Tech Stack
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + Custom CSS Variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **UI Architecture**: Component-driven (inspired by Shadcn UI)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## Features
- 🌌 **Futuristic UI**: Glassmorphism, animated gradients, neon borders, and cinematic typography.
- 🤖 **Interactive AI Agent**: A local-simulation chat widget that answers questions about Agnivesh.
- 📱 **Fully Responsive**: Flawless experience across desktop, tablet, and mobile devices.
- ⚡ **High Performance**: Optimized with Next.js Turbopack, Framer Motion, and lightweight animations.
- 🧭 **Smooth Navigation**: Custom floating dock and Lenis smooth scrolling.

## Development Setup

1. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run the Development Server**
   Start the local development server with Turbopack for ultra-fast HMR:
   ```bash
   npm run dev
   ```

3. **Open the App**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `/app` - Next.js App Router (layout, page, global CSS)
- `/components/layout` - Navigation components (Navbar, Floating Dock)
- `/components/sections` - All portfolio sections (Hero, About, Projects, etc.)
- `/components/effects` - Reusable visual effects (CursorSpotlight, etc.)
- `/lib` - Utilities and constants (portfolio data lives in `constants.ts`)
- `/public` - Static assets (images, resume.pdf)

## Customizing Content
To update the portfolio content (projects, skills, experience, etc.), simply edit the `lib/constants.ts` file. The entire website is data-driven from this single source of truth.

## Vercel Deployment

The easiest way to deploy your Next.js app is to use the Vercel Platform.

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and sign up / log in.
3. Click **Add New** > **Project** and import your GitHub repository.
4. Leave the build settings as default (`npm run build` and `npm run start`).
5. Click **Deploy**.

Your futuristic portfolio will be live and auto-updating with every GitHub push!
