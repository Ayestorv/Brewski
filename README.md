# Brewstop - Beer Finder & Companion Web Application

A modern, full-featured web application for beer enthusiasts built with Next.js 14, TypeScript, Tailwind CSS v3, and Framer Motion.

## Features

### 🍺 Beer Finder Wizard

- Interactive 5-step wizard to find your perfect beer
- Smart recommendation algorithm based on flavor preferences, body, food pairings, and ABV
- Beautiful animations and transitions
- Detailed beer information pages with tasting notes

### 🍔 Restaurant Menu

- Organized by categories (Appetizers, Mains, Sides, Desserts)
- Detailed item information including ingredients, dietary info, and calories
- Responsive grid layout with hover effects
- Price and description for each item

### 🍻 Modo Cata (Tasting Mode)

- Create custom beer tasting flights (up to 5 beers)
- Interactive selection interface
- Tasting tips and confirmation screen
- Perfect for group tastings and beer education

### 💬 Group Chat

- Real-time chat interface for beer enthusiasts
- Username customization
- Animated message transitions
- Connect with other visitors

### 🎨 Design & UX

- Brand colors: Primary (#bf2e2c), Background (#fff5ea)
- Fully responsive design (mobile-first)
- Smooth animations with Framer Motion
- Accessible components with ARIA labels
- SEO optimized with metadata and Open Graph tags

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── beers/[id]/        # Dynamic beer detail pages
│   ├── chat/              # Chat page
│   ├── menu/              # Menu pages
│   │   └── [category]/    # Dynamic category pages
│   ├── modo-cata/         # Tasting mode page
│   └── page.tsx           # Home page with wizard
├── components/            # React components
│   ├── beer/             # Beer-related components
│   ├── chat/             # Chat components
│   ├── layout/           # Layout components
│   ├── menu/             # Menu components
│   ├── modo-cata/        # Tasting mode components
│   └── wizard/           # Beer finder wizard
├── data/                 # JSON data files
│   ├── beers.json        # Beer database
│   └── menuItems.json    # Menu items
├── lib/                  # Utility functions
│   └── beerMatcher.ts    # Beer recommendation algorithm
├── store/                # Zustand stores
│   ├── chatStore.ts      # Chat state
│   ├── modoCataStore.ts  # Tasting mode state
│   └── wizardStore.ts    # Wizard state
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/brewstop.git
cd brewstop
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Development Guidelines

### Code Style

- ESLint and Prettier are configured for consistent code formatting
- Pre-commit hooks ensure code quality
- Follow TypeScript best practices

### Component Guidelines

- Use functional components with hooks
- Implement proper TypeScript types
- Ensure accessibility with semantic HTML and ARIA labels
- Add animations thoughtfully using Framer Motion

### State Management

- Zustand for global state (wizard, chat, modo cata)
- React state for component-level state
- Keep state minimal and close to where it's used

## Deployment

The application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Performance Optimizations

- Static generation for beer and menu pages
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Tailwind CSS purging for minimal CSS bundle

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management in modals and wizards
- High contrast ratios for text

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Future Enhancements

- User authentication and profiles
- Beer rating and review system
- Order management integration
- Push notifications for chat
- Advanced beer filtering options
- Social sharing features

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For support, email support@brewstop.com or join our chat at [brewstop.com/chat](https://brewstop.com/chat).# Brewski
