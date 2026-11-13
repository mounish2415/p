# Mounish Kumar — Engineering Portfolio Website

A modern, responsive personal portfolio website for **Mounish Kumar**, showcasing expertise as an **Electronics and Communication Engineer, IoT Developer, Embedded Systems Enthusiast, and Technology Innovator**.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🌟 Highlights & Features

- **Design Aesthetic:** Deep navy & black futuristic cyber theme with electric blue (`#00d2ff`) and cyan (`#00f2fe`) gradient accents.
- **Interactive Background:** High-performance HTML5 Canvas rendering interactive electronic circuit nodes and particle interconnects that respond to cursor movement.
- **Hero Section:** Dynamic role ticker, status indicator, quick action buttons, social links, and an animated cyber reticle profile emblem.
- **Categorized Technical Skills:** Skill badges with categorized domains (Programming, Electronics & Hardware, Simulation Tools & Platforms) without arbitrary fake percentages.
- **5 Featured Engineering Projects:**
  1. *AI-Based RF Signal Fingerprinting* (Flagship Research Project)
  2. *Solar-Powered EV Charging Station* (Clean Energy & Microgrid)
  3. *IoT-Based Automated Fertilizer Monitoring System* (AgriTech Precision Farming)
  4. *Smart Home Automation* (Embedded Appliance Control & Safety)
  5. *AI-Based Traffic Management System* (Computer Vision & Adaptive Timing)
- **Technical Deep-Dive Modal:** In-depth technical breakdown of each project (Problem Statement, Workflow Architecture, Hardware/Sensors, Software Stack, Key Engineering Features, Future Roadmap).
- **Interactive Experience Timeline:** Highlighting industry internship at **Approtech R&D Solutions Pvt. Ltd.** with dedicated spotlights on simulation suites (**Wokwi**, **Tinkercad**, **Cirkit**).
- **Leadership Showcase:** Highlights executive roles as **Chairperson of IEEE Student Branch** (Adhiparasakthi Engineering College) and **Secretary & Event Coordinator for Channel 2K27 National Level Technical Symposium**.
- **Academic Education:** B.E. in Electronics and Communication Engineering at Adhiparasakthi Engineering College (APEC).
- **Certifications & Achievements:** Categorized editable placeholders for workshops, certifications, symposiums, and IEEE activities.
- **Functional Contact Section:** Includes name, email, subject, message form with real client-side validation, direct **Web3Forms** email API integration, automatic **mailto** dispatch fallback, and a 1-click **Copy Email** action.
- **Interactive Curriculum Vitae Preview:** Full printable executive CV preview modal with a direct "Print / Save PDF" feature.

---

## 🛠️ Tech Stack

- **Framework:** React 18 & TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS with custom glassmorphism, glowing circuit grids, and animations
- **Icons:** Lucide Icons & Custom SVG Brand Icons
- **Interactive FX:** HTML5 Canvas particle & circuit network
- **Deployment:** Zero-config Vercel deployment with `vercel.json` rewrite rules

---

## 🚀 Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## ⚙️ Customization Guide

All personal data, links, projects, and contact information are centralized inside a single configuration file:

👉 **`src/data/portfolioData.ts`**

### What you can customize:
- **Contact Details & Socials:** Change `email`, `phone`, `location`, `socials.github`, and `socials.linkedin`.
- **Contact Form Web3Forms Access Key:** 
  1. Go to [https://web3forms.com](https://web3forms.com) and generate a free access key.
  2. Paste your access key into `personalInfo.web3FormsAccessKey` in `src/data/portfolioData.ts`.
  3. Form messages will instantly arrive in your email inbox!
- **Projects:** Add real GitHub repository links, live prototype URLs, or hardware photos.
- **Certifications:** Add your verified certificates and workshop titles in `certificationsData`.

---

## 🌐 Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Mounish Kumar Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import your GitHub repository.
4. Click **Deploy**. Vercel will build and launch your website with automatic HTTPS and global CDN.

