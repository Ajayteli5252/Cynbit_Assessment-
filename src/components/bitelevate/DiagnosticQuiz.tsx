'use client';

import React, { useState } from 'react';
import { CareerTrack, DiagnosticQuestion } from '@/types';
import { DIAGNOSTIC_QUESTIONS } from '@/lib/diagnosticQuestions';
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Terminal, 
  Send 
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';
import confetti from 'canvas-confetti';

interface DiagnosticQuizProps {
  track: CareerTrack;
  onQuizComplete: (score: number, readinessBadge: string, answers: any[]) => void;
  onOpenApplication: () => void;
}

export function DiagnosticQuiz({
  track,
  onQuizComplete,
  onOpenApplication,
}: DiagnosticQuizProps) {
  const questions = DIAGNOSTIC_QUESTIONS.filter((q) => q.track === track);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<
    { questionId: string; selectedIndex: number; score: number }[]
  >([]);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex] || questions[0];

  const handleSelectOption = (idx: number) => {
    if (showExplanation) return; // Locked once chosen
    setSelectedOption(idx);
    setShowExplanation(true);

    const points = currentQ.options[idx].points;
    const newAnswer = {
      questionId: currentQ.id,
      selectedIndex: idx,
      score: points,
    };
    setUserAnswers((prev) => [...prev, newAnswer]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Finished!
      const totalScore = userAnswers.reduce((acc, a) => acc + a.score, 0);
      let badge = 'Junior Developer';
      if (totalScore >= 85) badge = 'Lead System Architect';
      else if (totalScore >= 60) badge = 'Associate Architect';

      setIsFinished(true);
      onQuizComplete(totalScore, badge, userAnswers);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#A855F7', '#00F0FF', '#10B981'],
      });
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setUserAnswers([]);
    setIsFinished(false);
  };

  const totalScore = userAnswers.reduce((acc, a) => acc + a.score, 0);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8 space-y-6">
      
      {/* Quiz Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-purple-400" />
          <h3 className="font-mono text-sm font-semibold text-slate-200 uppercase tracking-wider">
            Adaptive Architecture Diagnostic
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          {!isFinished ? (
            <span>
              Scenario <strong className="text-purple-400">{currentIndex + 1}</strong> of {questions.length}
            </span>
          ) : (
            <span className="text-emerald-400">DIAGNOSTIC COMPLETE</span>
          )}
        </div>
      </div>

      {isFinished ? (
        /* Results & Readiness Badge Card */
        <div className="text-center py-6 space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-purple-950 border-2 border-purple-400 flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.35)]">
            <Award className="w-10 h-10 text-purple-300" />
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
              BIT-ELEVATE ARCHITECT READINESS LEVEL
            </span>
            <h2 className="text-3xl font-extrabold text-slate-100 font-mono">
              Score: <span className="text-purple-400">{totalScore}</span> / 100
            </h2>
            <div className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-950/80 border border-purple-600 text-purple-300">
              {totalScore >= 85
                ? '🏆 LEVEL 3: LEAD SYSTEM ARCHITECT'
                : totalScore >= 60
                ? '⭐ LEVEL 2: ASSOCIATE ARCHITECT'
                : '🌱 LEVEL 1: JUNIOR DEVELOPER'}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            {totalScore >= 85
              ? 'Outstanding architectural intuition. Your responses demonstrate production-grade reasoning matching Cynbit senior engineering expectations.'
              : totalScore >= 60
              ? 'Strong structural foundation with solid tradeoffs. Recommended to master zero-trust security and low-latency edge optimization in BitElevate.'
              : 'Good foundational aptitude. BitElevate modules will accelerate your transition into production microservices and autonomous agents.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Button onClick={onOpenApplication} variant="primary" size="lg">
              <Send className="w-4 h-4 mr-2" />
              Submit Profile to Cynbit Team
            </Button>
            <Button onClick={handleReset} variant="outline" size="lg">
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Diagnostic
            </Button>
          </div>
        </div>
      ) : (
        /* Active Scenario & Options */
        <div className="space-y-5">
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Scenario Details */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
            <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider block">
              {currentQ.title}
            </span>
            <p className="text-sm font-medium text-slate-200 leading-relaxed font-sans">
              {currentQ.scenario}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectMax = option.points === 20;

              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={clsx(
                    'p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 text-xs sm:text-sm font-mono',
                    isSelected
                      ? option.points === 20
                        ? 'border-emerald-400 bg-emerald-950/30 text-emerald-200'
                        : 'border-amber-400 bg-amber-950/30 text-amber-200'
                      : 'border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-700 hover:bg-slate-900/80'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className={clsx(
                      'w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 border',
                      isSelected
                        ? 'border-current font-bold'
                        : 'border-slate-700 text-slate-500'
                    )}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{option.text}</span>
                  </div>

                  {/* Instant Educational Feedback on Selection */}
                  {showExplanation && isSelected && (
                    <div className="mt-3 pt-2.5 border-t border-current/20 text-xs font-sans text-slate-300 space-y-1">
                      <div className="font-mono font-semibold flex items-center gap-1.5">
                        {isCorrectMax ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Optimal Architectural Decision (+20 pts)
                          </span>
                        ) : (
                          <span className="text-amber-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> Sub-optimal Choice (+{option.points} pts)
                          </span>
                        )}
                      </div>
                      <p className="text-[12px] text-slate-400 leading-normal">
                        {option.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          {showExplanation && (
            <div className="pt-2 flex justify-end">
              <Button onClick={handleNext} variant="primary">
                <span>{currentIndex === questions.length - 1 ? 'Calculate Score' : 'Next Scenario'}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
