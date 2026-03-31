# Bitten Apple - Premium Smartphone Showcase

A modern, visually stunning e-commerce landing page for premium smartphones built with Next.js 15, React 19, and Tailwind CSS 4.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 with CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## 📁 Project Structure

```
front-end/bitten-apple/
├── app/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header with links
│   │   ├── Hero.jsx          # Main hero section with animated text
│   │   ├── PhoneShowcase.jsx # Phone models showcase with pricing
│   │   ├── FeatureGrid.jsx   # Product features grid display
│   │   ├── Accessories.jsx   # Phone accessories section
│   │   └── Experience.jsx    # User experience section
│   ├── page.jsx              # Main landing page (entry point)
│   ├── layout.jsx            # Root layout configuration
│   ├── globals.css           # Global styles & Tailwind imports
│   └── favicon.ico           # Site favicon
├── public/
│   └── img/                  # Static images (wallpapers, product images)
├── package.json              # Dependencies & scripts
├── next.config.js            # Next.js configuration
├── postcss.config.cjs        # PostCSS configuration
├── tailwind.config.*         # Tailwind CSS config (optional)
└── .eslintrc.json            # ESLint configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm (comes with Node.js)

### Installation

```bash
# Navigate to the project directory
cd front-end/bitten-apple

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build
```

### Start Production Server

```bash
# After building, start the production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🎨 Features

- **Responsive Design**: Fully responsive layout adapting to all screen sizes
- **Glass Morphism**: Modern glass-effect UI elements with backdrop blur
- **Smooth Animations**: Page elements animate smoothly using Framer Motion
- **Interactive Components**: Interactive phone showcase with hover effects
- **Navigation**: Fixed header with scroll-aware styling
- **Footer**: Multi-section footer with social links

## 📱 Components Overview

| Component | Description |
|-----------|-------------|
| [`Header`](front-end/bitten-apple/app/components/Header.jsx) | Navigation bar with logo and menu links |
| [`Hero`](front-end/bitten-apple/app/components/Hero.jsx) | Animated hero section with promotional text |
| [`PhoneShowcase`](front-end/bitten-apple/app/components/PhoneShowcase.jsx) | Display of phone models with prices and "Buy Now" buttons |
| [`FeatureGrid`](front-end/bitten-apple/app/components/FeatureGrid.jsx) | Grid layout showcasing product features |
| [`Accessories`](front-end/bitten-apple/app/components/Accessories.jsx) | Phone accessories showcase section |
| [`Experience`](front-end/bitten-apple/app/components/Experience.jsx) | Customer experience/benefits section |

## 🎯 Future Improvements

- [ ] Add shopping cart functionality
- [ ] Implement product detail pages
- [ ] Add user authentication
- [ ] Integrate payment gateway
- [ ] Add product filtering and search
- [ ] Implement dark/light theme toggle

## 📄 License

This project is for demonstration purposes.

## 👤 Author

GADGET STORE KE - Experience Innovation
