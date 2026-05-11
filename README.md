# Classical Gadget E-commerce Website

A high-fidelity, responsive e-commerce storefront built with **Next.js**, **Tailwind CSS**, and **TypeScript**. This project features a modern, clean design inspired by the Porto theme, optimized for both desktop and mobile devices.

## 🚀 Live Demo

Check out the live site: [Classical Gadget E-commerce Website](https://classical-gadget-e-commerce-website.vercel.app/)

## 🚀 Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.
- **Modern Header:** Includes a top bar with language/currency switchers and a search navigation bar with category dropdowns.
- **Dynamic Sidebar:** A "Browse Categories" sidebar with mega-menu capabilities on desktop and a mobile-friendly toggle.
- **Hero Section:** Stunning banners with custom typography ("Dancing Script") and call-to-action buttons.
- **Product Displays:**
  - **Featured Products:** Interactive product cards with hover effects, badges (HOT, SALE), and quick action buttons.
  - **Top Rated / Best Selling:** Organized product lists with ratings and pricing.
- **Trust Banners:** Shipping information and customer support value propositions.
- **Interactive Elements:** Newsletter subscription, client testimonials, and recent blog posts.
- **Pixel-Perfect UI:** Custom-tuned spacing, typography (Poppins), and FontAwesome icons.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [FontAwesome](https://fontawesome.com/)
- **Fonts:** Google Fonts (Poppins, Dancing Script, Shadows Into Light)

## 📁 Project Structure

```text
src/
├── app/              # Next.js App Router (pages and global styles)
│   ├── globals.css   # Custom CSS and Tailwind imports
│   └── page.tsx      # Main Storefront Layout
├── components/       # Reusable UI Components
│   ├── TopHeader.tsx
│   ├── SearchNav.tsx
│   ├── Sidebar.tsx
│   ├── HeroSection.tsx
│   ├── FeaturedProducts.tsx
│   ├── ShippingBanner.tsx
│   └── ...
└── public/           # Static assets (images, icons)
```

## 📦 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

- **Design Tokens:** Modify `tailwind.config.js` to change the color palette or extend the theme.
- **Global Styles:** Custom utility classes and base styles can be found in `src/app/globals.css`.
- **Responsive Breakpoints:** The project uses standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`) to ensure a smooth transition across devices.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ by [Your Name/Github Handle]
