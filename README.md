# Manvitha Reddy Yalluru - Professional Portfolio Website

A professional, modern, fully responsive personal portfolio website designed for **Manvitha Reddy Yalluru**, a B.Tech Computer Science & Engineering (AI & ML) student at Mohan Babu University. 

This website showcases AI/ML specializations, full-stack software development experience, internship achievements, coursework, and problem-solving profiles (LeetCode).

---

## 🚀 Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4.0)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (subtle & responsive)
- **Hosting**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure
```text
portfolio/
├── public/
│   ├── favicon.ico              # Website Favicon
│   └── Manvitha_Reddy_Resume.pdf # Downloadable source-of-truth Resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind configurations, custom scrollbars & glassmorphism
│   │   ├── layout.tsx           # SEO metadata, Open Graph configs & ThemeProvider wrapper
│   │   └── page.tsx             # Main page rendering all subcomponents
│   ├── components/
│   │   ├── ThemeProvider.tsx    # Light/Dark theme toggle context provider
│   │   ├── Navbar.tsx           # Sticky menu with active scrolling highlights & mobile drawer
│   │   ├── Hero.tsx             # Intro details, call-to-actions & custom neural network SVG animation
│   │   ├── About.tsx            # Professional bio, core focus areas & academic statistics cards
│   │   ├── Skills.tsx           # Technical skills categories (AI/ML, Backend, Libraries & Core CS)
│   │   ├── Experience.tsx       # Internship timeline (Infosys Springboard & IIDT Blackbucks)
│   │   ├── Projects.tsx         # Product-like layout cards for ML, Java, and ServiceNow projects
│   │   ├── Certifications.tsx   # Grid of certificates (ServiceNow, Oracle, Coursera, Udemy)
│   │   ├── Education.tsx        # Chronological timeline of educational qualifications
│   │   ├── Connect.tsx          # Interactive profile links for GitHub, LinkedIn, and LeetCode
│   │   ├── Contact.tsx          # Contact Form with Formspree integration and submission simulator
│   │   ├── Footer.tsx           # Copyright details and social profile shortcuts
│   │   └── BrandIcons.tsx       # Official vector SVG paths for GitHub and LinkedIn logos
│   └── next-env.d.ts
├── package.json                 # Dependency manifests
├── tsconfig.json                # TypeScript compiler options
└── README.md                    # Project documentation
```

---

## 💻 Local Development Setup

To run the project locally on your machine, follow these steps:

### 1. Prerequisites
Ensure you have Node.js installed (v18.0 or newer recommended).

### 2. Installation
Clone the repository (or navigate to the workspace directory) and install dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build and Export
Compile the project to test production builds:
```bash
npm run build
```

---

## 📬 Contact Form Configuration (Formspree Integration)

The contact form is configured to work out-of-the-box using **Formspree** (a free static form service). 

### Setup Instructions:
1. Go to [Formspree](https://formspree.io/) and create a free account.
2. Create a new form, choose **API**, and get your unique **Form ID** (e.g., `xpzbgpzw`).
3. Create a `.env.local` file in the root of your project:
   ```env
   NEXT_PUBLIC_FORMSPREE_KEY=your_form_id_here
   ```
4. Restart your development server. The contact form will now deliver user messages directly to your email address!
5. **Fallback Behavior**: If no key is set, the form will run in a mock simulation mode, showing a notification that the submission was simulated and listing instructions to hook up the backend service.

---

## 🌐 Public Deployment on Vercel

To make the portfolio publicly accessible to recruiters and hiring managers online:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Create a new repository named `portfolio`. Select **Public**.
3. In your local terminal, initialize git and push the codebase:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Professional Portfolio"
   git branch -M main
   git remote add origin https://github.com/manvireddy2311/portfolio.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com/) (sign up using your GitHub account).
2. Click **Add New** > **Project**.
3. Import your `portfolio` repository from the list.
4. Under **Environment Variables**, add:
   * **Key**: `NEXT_PUBLIC_FORMSPREE_KEY`
   * **Value**: *Your Formspree Form ID* (Optional)
5. Click **Deploy**. Vercel will build and host your portfolio publicly.
6. Once deployed, you will receive a public URL such as `https://manvitha-portfolio.vercel.app`.

### Step 3: (Optional) Connect a Custom Domain
1. In your Vercel Dashboard, go to your project > **Settings** > **Domains**.
2. Type in your custom domain (e.g., `manvithareddy.com`) and click **Add**.
3. Vercel will provide DNS records (CNAME and A records). Add these records inside your domain registrar dashboard (like GoDaddy, Namecheap, or Google Domains).
4. Vercel will automatically generate SSL certificates and link the custom domain.
