# Veto Platform - Complete Project Upload Guide

## Quick Start - Upload All Files Using Git CLI

This guide will help you upload all the project files to the GitHub repository.

### Step 1: Clone the Repository

```bash
git clone https://github.com/strawhataryan/veto.git
cd veto
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Project Structure

Create the following folder structure:

```
veto/
├── public/
│   ├── veto-logo.png
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── StatCard.jsx
│   │   │   ├── ProjectStat.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── index.js
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── index.js
│   │   └── ui/
│   │       ├── Modal.jsx
│   │       ├── Toast.jsx
│   │       └── index.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useProjects.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── animations.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore (already created)
├── package.json (already created)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

### Step 4: Copy All Code Files

All code files are available in the project documentation. Copy and paste them into the respective files.

### Step 5: Configuration Files to Create

1. **vite.config.js** - Vite build configuration
2. **tailwind.config.js** - Tailwind CSS configuration
3. **postcss.config.js** - PostCSS configuration
4. **public/index.html** - Entry HTML file
5. **src/index.css** - Global styles

### Step 6: Add Files and Commit

```bash
# Add all files
git add .

# Commit changes
git commit -m "Add Veto Platform - Complete React application with AI collaboration features"

# Push to GitHub
git push origin main
```

### Step 7: Verify Upload

Visit: `https://github.com/strawhataryan/veto`

You should see all files in the repository.

## File Upload Using Web Interface

If you prefer the web interface:

1. Go to your repository
2. Click "Add file" → "Upload files"
3. Drag and drop the files or select them
4. Add commit message
5. Click "Commit changes"

## Next Steps

### Development
```bash
npm run dev
```
This starts the development server at http://localhost:3000

### Build for Production
```bash
npm run build
```
This creates an optimized `dist/` folder ready for deployment.

### Deploy

**Option 1: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Option 2: Netlify**
- Drag and drop the `dist` folder
- Or connect your GitHub repository

**Option 3: GitHub Pages**
Update `package.json` with deployment scripts and host from `/dist` folder

## Important Files Reference

All configuration and component code is documented in:
- `/docs` - Detailed documentation
- `/src` - React components and utilities
- Configuration files in root directory

## Support

For issues or questions, check the main README.md or create an issue in the repository.
