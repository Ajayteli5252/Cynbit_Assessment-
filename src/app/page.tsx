'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlueprintWizard } from '@/components/blueprint/BlueprintWizard';
import { BitElevateNavigator } from '@/components/bitelevate/BitElevateNavigator';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { BlueprintSubmission, CandidateSubmission } from '@/types';
import { Sparkles, Terminal, Compass, LayoutDashboard, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'bitelevate' | 'command-center'>('blueprint');
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
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      
      {/* Background Cyber Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Global Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Floating Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl border border-cyan-500/50 bg-slate-900/90 backdrop-blur-xl text-cyan-300 font-mono text-xs shadow-[0_0_25px_rgba(0,240,255,0.3)] animate-slide-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activeTab === 'blueprint' && (
          <div className="animate-fade-in">
            <BlueprintWizard onNewSubmission={handleNewBlueprint} />
          </div>
        )}

        {activeTab === 'bitelevate' && (
          <div className="animate-fade-in">
            <BitElevateNavigator onNewCandidate={handleNewCandidate} />
          </div>
        )}

        {activeTab === 'command-center' && (
          <div className="animate-fade-in">
            <AdminDashboard />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

    </div>
  );
}
