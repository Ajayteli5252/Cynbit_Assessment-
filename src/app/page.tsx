'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { ProductsSection } from '@/components/ProductsSection';
import { BlueprintWizard } from '@/components/blueprint/BlueprintWizard';
import { BitElevateNavigator } from '@/components/bitelevate/BitElevateNavigator';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { BlueprintSubmission, CandidateSubmission } from '@/types';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleNewBlueprint = (sub: BlueprintSubmission) => {
    showToast(`Architectural Blueprint #${sub.id} generated & logged!`);
  };

  const handleNewCandidate = (candidate: CandidateSubmission) => {
    showToast(`BitElevate Assessment recorded for ${candidate.candidateName} (${candidate.score}/100)`);
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Cyber Glow Highlights */}
      <div className="fixed top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Global Navbar */}
      <Navbar isAdminOpen={isAdminOpen} setIsAdminOpen={setIsAdminOpen} />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-cyan-400/60 bg-slate-900/95 backdrop-blur-xl text-cyan-300 font-mono text-xs shadow-[0_0_25px_rgba(0,240,255,0.3)] animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content View */}
      <main className="flex-1 w-full">
        {isAdminOpen ? (
          /* Internal Admin Command Center View */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <Button
                onClick={() => setIsAdminOpen(false)}
                variant="outline"
                size="sm"
                className="font-mono text-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                Return to Public Website
              </Button>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
                ADMIN ACCESS ACTIVE
              </span>
            </div>

            <AdminDashboard />
          </div>
        ) : (
          /* Full Website Landing Page Experience matching cynbit.in */
          <>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. Core Architectural Services (Bento Grid) */}
            <ServicesSection />

            {/* 3. Proprietary Products (TenantEase & Revio) */}
            <ProductsSection />

            {/* 4. The Blueprint Estimator (Simplified Interactive Engine) */}
            <BlueprintWizard onNewSubmission={handleNewBlueprint} />

            {/* 5. BitElevate Career & Skill Accelerator */}
            <BitElevateNavigator onNewCandidate={handleNewCandidate} />

            {/* 6. Direct Contact & Headquarters Information */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}
