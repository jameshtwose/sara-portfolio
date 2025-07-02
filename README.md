# Sara's Portfolio

A beautiful, modern portfolio website for Sara - a talented 3D Designer and Creative Director.

## 🎨 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **3D Integration**: Built with React and Spline for immersive 3D experiences
- **TypeScript**: Fully typed for better development experience
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized with Vite for fast loading
- **Professional Sections**:
  - Hero with 3D background
  - About with interactive stats
  - Experience timeline
  - Skills with progress bars
  - Portfolio with filtering
  - Contact form
  - Professional footer

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Spline
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/jamestwose/sara-portfolio.git
cd sara-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at: `https://jamestwose.github.io/sara-portfolio`

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

## 📁 Project Structure

```
sara-portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Customization

### Updating Content

1. **Personal Information**: Update the content in each component file
2. **Experience**: Modify the `experiences` array in `Experience.tsx`
3. **Skills**: Update the `skillCategories` array in `Skills.tsx`
4. **Portfolio**: Replace projects in the `projects` array in `Portfolio.tsx`
5. **Contact**: Update contact information in `Contact.tsx`

### Styling

- Colors and themes can be modified in `tailwind.config.js`
- Custom styles are in `src/index.css`
- Component-specific styles are inline with Tailwind classes

### 3D Content

- Replace the Spline scene URL in `Hero.tsx` with Sara's custom 3D content
- You can create 3D scenes at [spline.design](https://spline.design)

## 🔧 Configuration

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Set source to "GitHub Actions"
4. The site will deploy automatically on push to main

### Environment Variables

No environment variables are required for basic setup. Add any API keys or configuration to your deployment environment as needed.

## 📄 License

This project is created with ❤️ for Sara. Feel free to use it as a template for other portfolios.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you need help with customization or have questions, feel free to reach out!

---

Built with React, TypeScript, and Vite • Deployed on GitHub Pages
