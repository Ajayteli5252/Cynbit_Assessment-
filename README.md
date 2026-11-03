# Cynbit Technologies — The Interactive Blueprint Engine

**Assessment Submission:** Full Stack Developer Intern  
**Company:** Cynbit Technologies Private Limited ([cynbit.in](https://cynbit.in))  
**Target Page:** `cynbit.in/contact` ("The Blueprint" Inquiry Hub)  
**Candidate:** Ajay Teli  
**GitHub Repository:** [https://github.com/Ajayteli5252/Cynbit_Assessment-](https://github.com/Ajayteli5252/Cynbit_Assessment-)  

---

## 1. Problem Statement

Cynbit Technologies positions itself as an engineering-driven AI automation and software solutions studio. However, an analysis of the primary client conversion page (`cynbit.in/contact`) revealed a critical bottleneck:

* **Static Intake Barrier:** Prospective enterprise clients and startup founders visiting "The Blueprint" are met with a generic, static text form (Full Name, Email, Company, Industry, Message).
* **Zero Real-Time Visibility:** Clients receive no immediate indication of project feasibility, estimated sprint timeline, or budget bracket before submitting.
* **Delayed Response Funnel:** Forcing high-intent prospects to wait up to 24 hours for basic sizing leads to drop-offs.
* **Underutilized Engineering Credibility:** A firm specializing in autonomous AI and digital architecture misses the opportunity to showcase an interactive self-service scoping capability directly at its primary inquiry point.

---

## 2. What We Built (The Solution)

We enhanced **"The Blueprint."** section into an **Interactive System Scoper & Real-Time Estimation Engine** while matching Cynbit's original website design with 100% visual fidelity:

* **Exact UI Reproduction:** Matches the light-mint gradient background (`#FBFDFD` to `#F0F7F6`), the `(CYN ∞ BIT)` infinity logo, navigation items, the `● INQUIRY HUB` badge, "Start Your Next Project With Us" hero typography, `24H Response Sync` card, and `Global Delivery Hub` widget.
* **Interactive Project Domain Selector:** Users can select what they are building (*Autonomous AI Agents*, *Full-Stack SaaS*, *TenantEase PropTech Customization*, *Cloud & DevOps*).
* **Scale & Cadence Toggles:** Configurable user scale (*MVP / Startup*, *High Growth*, *Enterprise Scale*) and delivery cadence (*Standard 8-12 wks* vs. *Fast 4-6 wks*).
* **Real-Time Sizing Preview:** Dynamically computes estimated sprint weeks, budget range in USD ($) or INR (₹ Lakhs) via a 1-click toggle, and recommended engineering team composition.
* **1:1 Form Intake & Proposal Export:** Retains Cynbit's original contact inputs, generates a formal confirmed proposal dossier upon submission, and provides a print/PDF export summary.

---

## 3. Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript 5.6 (Strict Mode)
* **Styling:** Tailwind CSS (configured with Cynbit's exact color palette)
* **Icons & Feedback:** Lucide React & Canvas Confetti
* **Backend:** Next.js Route Handlers (`/api/blueprint`) with JSON persistence

---

## 4. How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Ajayteli5252/Cynbit_Assessment-.git
cd Cynbit_Assessment-

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open **`http://localhost:3000`** in your browser.

---

## 5. Project Structure

```
Cynbit_Assessment/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── blueprint/route.ts       # Backend proposal API
│   │   ├── globals.css                  # Light-theme styles
│   │   ├── layout.tsx                   # Root HTML wrapper
│   │   └── page.tsx                     # Single landing page orchestrator
│   └── components/
│       ├── Navbar.tsx                   # Cynbit infinity header & navigation
│       ├── Hero.tsx                     # Cynbit inquiry hero section
│       ├── BlueprintSection.tsx         # The Interactive Blueprint (The Improvement)
│       └── Footer.tsx                   # Cynbit footer & copyright
├── Cynbit_Technical_Assessment_Report.docx # Word report document
├── TECHNICAL_REPORT.md                  # Markdown report
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
