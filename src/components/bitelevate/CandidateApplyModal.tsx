'use client';

import React, { useState } from 'react';
import { CareerTrack, CandidateSubmission } from '@/types';
import { X, Send, CheckCircle2, Award, Github, Globe, Phone, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import confetti from 'canvas-confetti';

interface CandidateApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  track: CareerTrack;
  score: number;
  readinessBadge: string;
  answers: any[];
  onSuccessSubmission?: (candidate: CandidateSubmission) => void;
}

export function CandidateApplyModal({
  isOpen,
  onClose,
  track,
  score,
  readinessBadge,
  answers,
  onSuccessSubmission,
}: CandidateApplyModalProps) {
  const [candidateName, setCandidateName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<CandidateSubmission | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !email || !githubUrl) {
      setErrorMsg('Please complete required fields (Name, Email, and GitHub URL).');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/bitelevate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          candidateName,
          email,
          phone,
          githubUrl,
          portfolioUrl,
          track,
          score,
          answers,
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
          colors: ['#8B5CF6', '#00F0FF', '#10B981'],
        });
      } else {
        setErrorMsg(result.error || 'Failed to submit candidate profile.');
      }
    } catch (err) {
      setErrorMsg('Network error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl border border-purple-500/40 bg-slate-950 p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.2)] my-8">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedData ? (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-purple-950 border-2 border-purple-400 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              <CheckCircle2 className="w-8 h-8 text-purple-400" />
            </div>

            <div>
              <span className="text-xs font-mono text-purple-400 tracking-wider uppercase">
                APPLICATION REGISTERED · REF: {submittedData.id}
              </span>
              <h2 className="text-2xl font-bold text-slate-100 font-mono mt-1">
                Candidate Profile Logged
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mt-2">
                Your diagnostic benchmark has been linked with your GitHub profile and transmitted directly to Cynbit’s talent acquisition team.
              </p>
            </div>

            {/* Score Summary Box */}
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 font-mono text-xs space-y-2 text-left">
              <div className="flex justify-between text-slate-400">
                <span>Candidate:</span>
                <span className="text-slate-100 font-semibold">{submittedData.candidateName}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Track:</span>
                <span className="text-purple-400 uppercase">{submittedData.track}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Diagnostic Score:</span>
                <span className="text-cyan-400 font-bold">{submittedData.score} / 100</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Initial Status:</span>
                <span className="text-emerald-400 font-bold">{submittedData.status}</span>
              </div>
            </div>

            <div className="pt-2">
              <Button onClick={onClose} variant="primary" className="w-full">
                Close & Return to Hub
              </Button>
            </div>
          </div>
        ) : (
          /* Application Form */
          <div className="space-y-6">
            
            <div className="border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                <Award className="w-4 h-4" />
                <span>BIT-ELEVATE TALENT INTAKE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                Submit Profile & Diagnostic Results
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Your verified score ({score}/100 - {readinessBadge}) will be submitted to the Cynbit engineering review team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs font-mono">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="e.g. Sahil Verma"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sahil@example.com"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  GitHub Profile URL *
                </label>
                <div className="relative">
                  <Github className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                  <input
                    type="url"
                    required
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/your-username"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Portfolio / Personal Site (Optional)
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://yourname.dev"
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-100 text-sm focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
                <Button type="button" variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" isLoading={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Profile to Cynbit
                </Button>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}

