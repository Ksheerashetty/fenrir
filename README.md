Fenrir Security Frontend Challenge
A high-fidelity, production-grade security dashboard built with React, Vite, and Tailwind CSS v4. This application demonstrates advanced UI/UX implementation, real-time state simulation, and comprehensive theme management.

🚀 Features
Three Core Screens:

Screen 1 — Sign-up: A split-screen high-conversion layout with branded social authentication.

Screen 2 — Dashboard: A comprehensive overview featuring severity stat cards with trend indicators and a functional scan table.

Screen 3 — Active Scan: A live-action detail view with a circular progress dial, step-by-step tracker, and a terminal-style activity log.

Dual-Theme Engine: Full support for Light and Dark modes using Tailwind v4's PostCSS engine, accessible via a global sidebar toggle.

Interactive Navigation: Seamless transitions between screens using react-router-dom.

Production-Ready CSS: Custom-built with a PostCSS pipeline to ensure optimal performance and eliminate the need for production-unfriendly CDNs.

🛠️ Tech Stack
Framework: React 18

Build Tool: Vite

Styling: Tailwind CSS v4

Icons: Lucide React

Routing: React Router v6

📦 Installation & Setup
Clone the repository:

Bash
git clone <your-repo-link>
cd fenrir-challenge
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Build for production:

Bash
npm run build
📐 Design Decisions
Color Palette: Used exact Hex codes from the design reference (#14A098 for Teal accents, #0B0E14 for Dark background).

Live Console: Implemented a scrollable terminal container that replicates real-world security tool outputs, including highlighted vulnerability findings like IDOR.

Responsive Layout: Used a mobile-first approach ensuring the sidebar collapses and the login form stacks at a 375px viewport width.
