# Frensimuso Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features dark/light mode, interactive project showcase, skills section, learning blog, and contact form.

## ✨ Features

### 🎨 Design & UX

- **Dark/Light Mode Toggle** - Seamless theme switching with system preference detection
- **Responsive Design** - Mobile-first approach with beautiful animations
- **Modern UI** - Clean, professional design with gradient accents
- **Smooth Animations** - Custom CSS animations and hover effects
- **Accessibility** - Proper ARIA labels and keyboard navigation

### 🚀 Core Sections

- **Hero Section** - Animated introduction with call-to-action buttons
- **Projects Showcase** - Interactive project cards with category filtering
- **Skills & Expertise** - Visual skill representation with proficiency levels
- **Learning Blog** - Blog posts about skills learned from projects
- **Contact Form** - Professional contact form with social links
- **Footer** - Comprehensive footer with quick links and services

### 🔧 Technical Features

- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS v4** - Utility-first CSS framework
- **Context API** - Theme management and state handling
- **Component Architecture** - Modular, reusable components
- **SEO Optimized** - Meta tags and proper HTML structure

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API
- **Icons**: SVG icons and emojis
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation and theme toggle
│   │   ├── Hero.tsx            # Hero section with animations
│   │   ├── Projects.tsx        # Project showcase with filtering
│   │   ├── Skills.tsx          # Skills section with progress bars
│   │   ├── Blog.tsx            # Blog posts about learning
│   │   ├── Contact.tsx         # Contact form and social links
│   │   └── Footer.tsx          # Footer with links and services
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Dark/light mode context
│   ├── globals.css             # Global styles and animations
│   ├── layout.tsx              # Root layout with providers
│   └── page.tsx                # Main page component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

- `src/app/components/Header.tsx` - Your name/logo
- `src/app/components/Hero.tsx` - Personal description and skills
- `src/app/components/Projects.tsx` - Your projects
- `src/app/components/Skills.tsx` - Your skills and proficiency levels
- `src/app/components/Blog.tsx` - Your blog posts
- `src/app/components/Contact.tsx` - Contact information and social links

### Styling

- Modify `src/app/globals.css` for custom animations and styles
- Update Tailwind classes in components for different color schemes
- Customize the gradient colors in the theme

### Content

- Replace placeholder content with your actual projects and experiences
- Update social media links with your profiles
- Modify the contact form to integrate with your preferred backend

## 🌟 Unique Features

### 1. **Interactive Project Filtering**

- Category-based filtering (Frontend, Backend, AI/ML, etc.)
- Project count indicators
- Hover effects with live demo and code links

### 2. **Visual Skill Representation**

- Progress bars with gradient colors
- Category-based skill organization
- Proficiency level indicators (Beginner to Expert)

### 3. **Learning Blog Integration**

- Blog posts tied to project experiences
- Category filtering for different technology areas
- Expandable content with read more/less functionality

### 4. **Smart Theme System**

- System preference detection
- Persistent theme storage
- Smooth transitions between themes

### 5. **Professional Contact Section**

- Categorized contact form (Project, Job, Consulting, etc.)
- Social media integration
- Availability status indicator

## 📱 Responsive Design

The portfolio is fully responsive with:

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Adaptive layouts for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Use `npm run build` and deploy the `out` directory
- **GitHub Pages**: Configure for static export
- **AWS S3**: Upload built files to S3 bucket

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint configuration for Next.js
- Prettier for code formatting
- Component-based architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Inspiration from modern portfolio designs

## 📞 Support

If you have any questions or need help customizing the portfolio:

- Open an issue on GitHub
- Contact me through the portfolio contact form
- Check the documentation for common customization tasks

---

**Built with ❤️ by Frensimuso**

_Feel free to use this template for your own portfolio!_
