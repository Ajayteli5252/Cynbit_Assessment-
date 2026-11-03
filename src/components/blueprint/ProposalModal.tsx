'use client';

import React, { useState } from 'react';
import { 
  ProjectDomain, 
  UserScale, 
  CloudProvider, 
  ComplianceLevel, 
  TimelineUrgency, 
  BlueprintEstimate, 
  BlueprintSubmission 
} from '@/types';
import { 
  X, 
  Printer, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Cpu, 
  Calendar, 
  Users 
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import confetti from 'canvas-confetti';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  domain: ProjectDomain;
  userScale: UserScale;
  cloudProvider: CloudProvider;
  compliance: ComplianceLevel;
  urgency: TimelineUrgency;
  aiFeatures: string[];
  estimate: BlueprintEstimate;
  onSuccessSubmission?: (submission: BlueprintSubmission) => void;
}

export function ProposalModal({
  isOpen,
  onClose,
  domain,
  userScale,
  cloudProvider,
  compliance,
  urgency,
  aiFeatures,
  estimate,
  onSuccessSubmission,
}: ProposalModalProps) {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [projectName, setProjectName] = useState('Autonomous Enterprise Platform');
  const [projectDescription, setProjectDescription] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BlueprintSubmission | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !projectName) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName,
          clientName,
          clientEmail,
          clientCompany,
          projectDescription,
          domain,
          userScale,
          aiFeatures,
          cloudProvider,
          compliance,
          urgency,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmittedData(result.data);
        if (onSuccessSubmission) {
          onSuccessSubmission(result.data);
        }
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#38BDF8', '#8B5CF6'],
        });
      } else {
        setErrorMsg(result.error || 'Failed to submit proposal.');
      }
    } catch (err) {
      setErrorMsg('Network error submitting blueprint. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-cyan-500/40 bg-slate-950 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedData ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-cyan-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              <CheckCircle2 className="w-8 h-8 text-cyan-400" />
            </div>

            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                ENGINEERING DOSSIER REGISTERED · REF: {submittedData.id}
              </span>
              <h2 className="text-2xl font-bold text-slate-100 font-mono mt-1">
                Architectural Blueprint Confirmed
              </h2>
              <p className="text-sm text-slate-400 max-w-md mx-auto mt-2">
                Your proposal has been logged to Cynbit’s engineering queue. Our technical architects in Jaipur will review your sprint specifications within 24 hours.
              </p>
            </div>

            {/* Proposal Key Specs Box */}
            <div className="max-w-md mx-auto p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-left font-mono text-xs space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>Project Name:</span>
                <span className="text-slate-100 font-semibold">{submittedData.projectName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Client Lead:</span>
                <span className="text-slate-100">{submittedData.clientName} ({submittedData.clientCompany})</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Sprint Duration:</span>
                <span className="text-cyan-400 font-bold">{submittedData.estimate.estimatedWeeks} Weeks</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Est. Investment:</span>
                <span className="text-emerald-400 font-bold">
                  ${submittedData.estimate.costMinUSD.toLocaleString()} - ${submittedData.estimate.costMaxUSD.toLocaleString()} USD
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <Button onClick={handlePrint} variant="outline">
                <Printer className="w-4 h-4 mr-2" />
                Print / Save PDF Blueprint
              </Button>
              <Button onClick={onClose} variant="primary">
                Return to Architect Studio
              </Button>
            </div>
          </div>
        ) : (
          /* Intake & Proposal Review Form */
          <div className="space-y-6">
            
            {/* Header */}
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>CYNBIT ARCHITECTURAL INTAKE DOSSIER</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                Formalize Project Blueprint & Sprints
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Complete your project profile to lock in architecture estimates, team pod sizing, and direct engineering discovery.
              </p>
            </div>

            {/* Blueprint Key Parameters Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-lg border border-slate-800 bg-slate-900/40 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[10px]">DOMAIN</span>
                <span className="text-cyan-400 font-semibold uppercase">{domain}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">CLOUD</span>
                <span className="text-purple-400 font-semibold uppercase">{cloudProvider}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">TIMELINE</span>
                <span className="text-slate-200 font-semibold">{estimate.estimatedWeeks} WEEKS</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">EST. BUDGET</span>
                <span className="text-emerald-400 font-semibold">${estimate.costMinUSD.toLocaleString()} USD</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs font-mono">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Project Working Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g. Real-Time Autonomous Agent"
                    className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    placeholder="e.g. Acme Health Corp"
                    className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="vikram@company.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Specific Technical Requirements / Goals (Optional)
                </label>
                <textarea
                  rows={3}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Tell us about existing databases, custom third-party APIs, or compliance prerequisites..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
                <Button type="button" variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" isLoading={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  Submit to Cynbit Engineering Queue
                </Button>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}

