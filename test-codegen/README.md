# Test Codegen

A modern Next.js frontend application built with the latest technologies for fast development and great user experience.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Turbopack** for lightning-fast development
- **ESLint** for code quality
- **Dark mode** support
- **Responsive design**

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Bundler**: Turbopack (development)
- **Linting**: ESLint
- **Package Manager**: npm

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test-codegen
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
test-codegen/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/          # Reusable components
│       └── Button.tsx       # Button component
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Components

### Button Component

A reusable button component with variants:

```tsx
import Button from '@/components/Button';

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌙 Dark Mode

The application supports dark mode out of the box using Tailwind CSS dark mode classes.

## 📱 Responsive Design

Built with mobile-first approach using Tailwind CSS responsive utilities.

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with zero configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
