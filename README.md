# React + Vite + Tailwind CSS v4 Project

A modern React application built with Vite and styled with Tailwind CSS v4.

## 🚀 Features

- ⚡ **Vite** - Fast development server and building
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **Tailwind CSS v4** - Latest version with simplified configuration
- 📦 **pnpm** - Fast, disk space efficient package manager
- 🔷 **TypeScript** - Type safety and better developer experience
- 🔥 **Hot Module Replacement** - Instant updates during development

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

## 🛠️ Installation

1. **Clone or download this project**
2. **Install dependencies:**
   ```bash
   pnpm install
   ```

## 🏃‍♂️ Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173/`

## 📦 Build

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 🎨 Tailwind CSS v4 Setup

This project uses the latest Tailwind CSS v4 with the new simplified setup:

### Key Changes from v3:
- ✅ No more `tailwind.config.js` file needed
- ✅ No more `postcss.config.js` file needed  
- ✅ Uses `@tailwindcss/vite` plugin directly in Vite config
- ✅ Single `@import "tailwindcss"` in CSS instead of three directives

### Configuration Files:
- **`vite.config.ts`** - Includes `@tailwindcss/vite` plugin
- **`src/index.css`** - Contains `@import "tailwindcss"`

## 📁 Project Structure

```
├── src/
│   ├── assets/          # Static assets
│   ├── App.tsx          # Main App component
│   ├── index.css        # Global styles with Tailwind import
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration with Tailwind plugin
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 🎯 Tech Stack

- **React 19.1.1** - UI library
- **TypeScript 5.8.3** - Type checking
- **Vite 7.1.3** - Build tool and dev server
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **ESLint** - Code linting

## 📖 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/)
