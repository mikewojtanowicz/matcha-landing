# Matcha Landing Page

## Overview

Revolutionary AI-powered recruitment platform landing page built with Next.js, React, TypeScript, and Tailwind CSS. The platform transforms the recruitment landscape by providing an intelligent, unified interface for both job seekers and employers.

## Tech Stack

- **Framework:** Next.js with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Performance:** Server-side rendering and static generation
- **Animation:** Framer Motion for complex animations
- **State Management:** React Hooks
- **Form Handling:** React Hook Form
- **Testing:** Jest + React Testing Library

## Project Structure

```
matcha-landing/
├── public/              # Static assets
├── src/
│   ├── app/
│   │   ├── animations.css
│   │   ├── globals.css
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Main landing page
│   │
│   ├── components/
│   │   ├── animations/
│   │   │   ├── CompetitorSwiper.tsx
│   │   │   ├── iPhoneOutline.tsx
│   │   │   └── JobSwiper.tsx
│   │   │
│   │   ├── common/
│   │   │   ├── CompanyLogo.tsx
│   │   │   ├── CountdownTimer.tsx
│   │   │   ├── EmailSignup.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ScrollIndicator.tsx
│   │   │
│   │   └── sections/
│   │       ├── CandidateAnalysis.tsx
│   │       ├── CompetitorComparison.tsx
│   │       ├── HeroSection.tsx
│   │       ├── InfoSection.tsx
│   │       ├── JobMatching.tsx
│   │       ├── ResumeAnalysis.tsx
│   │       ├── ScreeningAutomation.tsx
│   │       ├── TabSection.tsx
│   │       └── TerminalIntro.tsx
│   │
│   └── styles/
│       └── animations.css
```

## Key Features

### For Job Seekers

- 🎯 Interactive job swiping interface
- 🤖 AI-powered job matching visualization
- 📄 Resume analysis demonstration
- ⚡ One-click application showcase

### For Employers

- 📊 Candidate analysis dashboard preview
- 🔄 Screening automation demonstration
- 📈 Recruitment process optimization showcase
- 💰 ROI calculator

## Getting Started

1. **Installation**

   ```bash
   npm install
   ```

2. **Development Server**

   ```bash
   npm run dev
   ```

3. **Production Build**
   ```bash
   npm run build
   npm run start
   ```

## Component Guidelines

### Animations

- Use `CompetitorSwiper.tsx` for comparing traditional vs Matcha approach
- Implement `JobSwiper.tsx` for demonstrating the matching interface
- Use subtle transitions (300ms duration)
- Maintain 60fps performance target
- Respect reduced-motion preferences

### Common Components

- `Navigation.tsx`: Responsive navbar with CTA buttons
- `EmailSignup.tsx`: Lead capture form with validation
- `CountdownTimer.tsx`: Launch countdown/special offer timer
- `ScrollIndicator.tsx`: Smooth scroll progress indicator

### Sections

Each section component highlights a specific value proposition:

- `HeroSection.tsx`: Main value proposition and CTA
- `TerminalIntro.tsx`: Technical capability showcase
- `JobMatching.tsx`: AI matching algorithm visualization
- `ScreeningAutomation.tsx`: Automated recruitment process
- `CandidateAnalysis.tsx`: Deep analytics capabilities
- `CompetitorComparison.tsx`: Competitive advantages

## Design Guidelines

### Colors

```javascript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        matcha: {
          primary: '#584cf4',    // Main brand color
          secondary: '#00bbd6',  // Accent color
          neutral: {
            50: '#f9fafb',
            // ... other shades
            900: '#111827',
          }
        }
      }
    }
  }
}
```

### Typography

- Primary Font: Inter
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- Implement responsive font sizes
- Maintain clear hierarchy with consistent spacing

## Accessibility Checklist

- [ ] Semantic HTML structure
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Sufficient color contrast
- [ ] Focus indicators
- [ ] Alt text for images
- [ ] Reduced motion support
- [ ] WCAG 2.1 compliance

## Performance Optimization

- Implement Next.js Image component for optimized images
- Utilize code splitting for each section
- Lazy load below-the-fold content
- Cache static assets aggressively
- Optimize SVG assets
- Minimize bundle size
- Optimize for Core Web Vitals

## Development Guidelines

1. Follow TypeScript strict mode
2. Use functional components with hooks
3. Implement proper error boundaries
4. Add comprehensive prop types
5. Document complex component logic
6. Follow mobile-first approach
7. Use CSS Grid for layouts
8. Implement proper testing coverage

## Testing

```bash
npm run test
```

Ensure coverage for:

- Unit tests for utility functions
- Component tests for interactive elements
- Accessibility tests (jest-axe)
- Visual regression tests
- End-to-end tests for critical paths
- Performance benchmarks

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Deployment

The landing page is configured for deployment on Vercel:

```bash
vercel
```

Additional deployment features:

- Automated deployment via GitHub Actions
- Environment-based configuration
- Performance monitoring setup
- Error tracking integration

## Contributing

1. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Follow coding standards:

   - Use TypeScript strictly
   - Follow ESLint configuration
   - Maintain component documentation
   - Add necessary tests

3. Submit a PR with:
   - Clear description of changes
   - Screenshots/videos of visual changes
   - Performance impact considerations


## Support

For questions or issues:

- Create an issue in the repository
- Contact the development team
- Check the internal documentation

## License

MIT LICENSE © Matcha 2024
