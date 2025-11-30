# Veto - AI-Powered Innovation Rescue Platform

## Quick Start (Automated Vercel Deployment)

### One-Click Vercel Deployment
1. Fork this repository to your GitHub account
2. Go to https://vercel.com/dashboard
3. Click "Add New" → "Project"
4. Select your forked veto repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

**Your app will be live in < 2 minutes!**

### Manual Setup (Local Development)

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/veto.git
cd veto

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Overview

**Veto** is an AI-powered platform designed to rescue and complete abandoned innovation projects. It connects innovators, researchers, and entrepreneurs with idle projects to talented developers and teams through an intelligent marketplace.

### Key Features
- **Project Marketplace**: Browse and rescue abandoned projects
- **AI Collaboration**: AI-powered insights and project completion suggestions
- **Multi-Domain Support**: Startups, Research, Hardware, Social Impact
- **IP Protection**: Secure project data and intellectual property
- **Community Ranking**: Earn reputation through successful project completions
- **Corporate Task Integration**: Enterprise integration for project management
- **Real-time Collaboration**: Team coordination tools

## Technology Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 4.5.0
- **Styling**: Tailwind CSS 3.3.5
- **Animations**: Framer Motion 10.16.4
- **UI Icons**: Lucide React 0.263.1
- **Code Quality**: ESLint

## Project Structure

```
veto/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── .env.example
```

## Available Commands

```bash
npm run dev          # Start dev server on localhost:5173
npm run build        # Create production build
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix linting issues
```

## Deployment Options

### Vercel (Recommended)
- Zero-config deployment
- Automatic builds on push
- Global CDN
- Preview deployments

### Other Platforms
- **Netlify**: Drag & drop dist folder
- **GitHub Pages**: Use GitHub Actions workflow
- **AWS Amplify**: Connect GitHub repository

## Environment Variables

Create `.env` file based on `.env.example`:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Veto
```

## Features

### 1. Project Discovery
- Search abandoned projects by domain
- Filter by completion status
- AI-powered recommendations
- Project statistics and metrics

### 2. Marketplace
- Corporate task listings
- Project bounties
- Team collaboration features
- Rating and review system

### 3. AI Integration
- Project analysis and insights
- Task decomposition
- Skill matching
- Progress tracking

### 4. Community
- Developer rankings
- Achievement badges
- Contribution history
- Network effects

### 5. IP Protection
- Secure project vaults
- Access control
- Audit logs
- Data encryption

## UI Components

### Core Components
- **Navigation**: Global navigation with responsive menu
- **Hero**: Landing page hero section
- **ProjectCard**: Individual project display
- **Marketplace**: Project grid with filters
- **TeamSection**: Team collaboration area
- **CommunityRanking**: Leaderboard display
- **IPProtection**: Security features showcase
- **CorporateIntegration**: Enterprise features
- **CallToAction**: Engagement buttons

### Layout Components
- **Header**: Top navigation bar
- **Footer**: Global footer
- **Container**: Responsive container wrapper
- **Section**: Content section wrapper

## Performance

- Optimized Vite build
- Code splitting by route
- Image optimization
- CSS minification
- Tree shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create feature branch (git checkout -b feature/amazing-feature)
3. Commit changes (git commit -m 'Add amazing feature')
4. Push to branch (git push origin feature/amazing-feature)
5. Open Pull Request

## License

MIT License - feel free to use this project for personal and commercial purposes.

## Author

**Aryan** - NIT Rourkela

## Acknowledgments

- Inspired by GitHub, Canva, and Unstop design patterns
- Built with React ecosystem
- Powered by Vite for blazing fast development

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Email: support@veto.dev
- Twitter: @vetoplatform

---

**Ready to rescue abandoned projects? Deploy now and join the innovation revolution!**
