'use client';

import React, { useState } from 'react';
import { CareerTrack, CandidateSubmission } from '@/types';
import { TrackSelector } from './TrackSelector';
import { DiagnosticQuiz } from './DiagnosticQuiz';
import { SkillTreeGraph } from './SkillTreeGraph';
import { CandidateApplyModal } from './CandidateApplyModal';
import { Compass, Sparkles, BookOpen, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface BitElevateNavigatorProps {
  onNewCandidate?: (candidate: CandidateSubmission) => void;
}

export function BitElevateNavigator({ onNewCandidate }: BitElevateNavigatorProps) {
  const [selectedTrack, setSelectedTrack] = useState<CareerTrack>('ai-architect');
  const [quizScore, setQuizScore] = useState<number>(0);
  const [readinessBadge, setReadinessBadge] = useState<string>('Junior Developer');
  const [quizAnswers, setQuizAnswers] = useState<any[]>([]);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleQuizComplete = (score: number, badge: string, answers: any[]) => {
    setQuizScore(score);
    setReadinessBadge(badge);
    setQuizAnswers(answers);
  };

  return (
    <div className="space-y-10">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-950/40 text-purple-400 font-mono text-xs shadow-[0_0_15px_rgba(139,92,246,0.15)]">
          <Compass className="w-3.5 h-3.5" />
          <span>CYNBIT TALENT ACCELERATOR · BITELEVATE 2.0</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight font-mono">
          Adaptive Skill & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Career Architecture</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Move beyond static curriculums. Evaluate your architectural reasoning with Cynbit’s real-world production scenarios, explore the non-linear 16+ dimension skill tree, and fast-track into the engineering cohort.
        </p>
      </div>

      {/* Track Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-sm font-mono font-semibold text-slate-200 uppercase tracking-wider">
            1. Select Engineering Dimension
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Current Focus: <span className="text-purple-400 uppercase font-semibold">{selectedTrack}</span>
          </span>
        </div>
        <TrackSelector
          selectedTrack={selectedTrack}
          onSelectTrack={setSelectedTrack}
        />
      </div>

      {/* Two Column Grid: Diagnostic Quiz on Left, Skill Tree on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Adaptive Quiz (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono font-semibold text-slate-200 uppercase tracking-wider">
              2. Architectural Diagnostic
            </h2>
            <span className="text-xs font-mono text-purple-400">5 Scenarios</span>
          </div>

          <DiagnosticQuiz
            track={selectedTrack}
            onQuizComplete={handleQuizComplete}
            onOpenApplication={() => setIsApplyModalOpen(true)}
          />
        </div>

        {/* Right Column: Dynamic Visual Skill Tree (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono font-semibold text-slate-200 uppercase tracking-wider">
              3. Visual Skill Tree & Roadmap
            </h2>
            <span className="text-xs font-mono text-cyan-400">16+ Dimensions</span>
          </div>

          <SkillTreeGraph track={selectedTrack} />
        </div>

      </div>

      {/* Fast Track Application CTA */}
      <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-cyan-950/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400">
            <GraduationCap className="w-4 h-4" />
            <span>DIRECT TALENT PIPELINE</span>
          </div>
          <h3 className="text-xl font-bold font-mono text-slate-100">
            Ready to Build Next-Gen Systems at Cynbit?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Whether you are applying for the Full Stack Developer internship, an AI engineering role, or the BitElevate cohort, submit your profile to receive feedback from the engineering team.
          </p>
        </div>

        <Button
          onClick={() => setIsApplyModalOpen(true)}
          variant="primary"
          size="lg"
          className="shrink-0 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          <span>Submit Candidate Profile</span>
          <ArrowUpRight className="w-4 h-4 ml-1.5" />
        </Button>
      </div>

      {/* Candidate Apply Modal */}
      <CandidateApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        track={selectedTrack}
        score={quizScore}
        readinessBadge={readinessBadge}
        answers={quizAnswers}
        onSuccessSubmission={onNewCandidate}
      />

    </div>
  );
}
