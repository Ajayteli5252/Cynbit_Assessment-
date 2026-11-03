'use client';

import React, { useState, useEffect } from 'react';
import { BlueprintSubmission, CandidateSubmission } from '@/types';
import { 
  LayoutDashboard, 
  DollarSign, 
  Users, 
  Terminal, 
  Award, 
  ExternalLink, 
  Search, 
  Filter, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  TrendingUp 
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';

interface AdminDashboardProps {
  initialBlueprints?: BlueprintSubmission[];
  initialCandidates?: CandidateSubmission[];
}

export function AdminDashboard({
  initialBlueprints = [],
  initialCandidates = [],
}: AdminDashboardProps) {
  const [blueprints, setBlueprints] = useState<BlueprintSubmission[]>(initialBlueprints);
  const [candidates, setCandidates] = useState<CandidateSubmission[]>(initialCandidates);
  const [isLoading, setIsLoading] = useState(false);
  const [activeView, setActiveView] = useState<'blueprints' | 'candidates'>('blueprints');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDomain, setFilterDomain] = useState<string>('all');
  const [updateMessage, setUpdateMessage] = useState<string>('');

  const fetchSubmissions = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/submissions');
      const data = await res.json();
      if (data.success && data.data) {
        setBlueprints(data.data.blueprints || []);
        setCandidates(data.data.candidates || []);
      }
    } catch (err) {
      console.error('Failed to refresh submissions', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleUpdateStatus = async (
    type: 'blueprint' | 'candidate',
    id: string,
    newStatus: string
  ) => {
    try {
      const res = await fetch('/api/submissions', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setUpdateMessage(`Updated ${id} to "${newStatus}"`);
        setTimeout(() => setUpdateMessage(''), 3000);

        if (type === 'blueprint') {
          setBlueprints((prev) =>
            prev.map((b) => (b.id === id ? { ...b, status: newStatus as any } : b))
          );
        } else {
          setCandidates((prev) =>
            prev.map((c) => (c.id === id ? { ...c, status: newStatus as any } : c))
          );
        }
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  // Pipeline calculations
  const totalPipelineUSD = blueprints.reduce((acc, bp) => acc + bp.estimate.costMaxUSD, 0);
  const avgCandidateScore =
    candidates.length > 0
      ? Math.round(candidates.reduce((acc, c) => acc + c.score, 0) / candidates.length)
      : 0;

  // Filtered lists
  const filteredBlueprints = blueprints.filter((bp) => {
    const matchesSearch =
      bp.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bp.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bp.clientCompany.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = filterDomain === 'all' || bp.domain === filterDomain;
    return matchesSearch && matchesDomain;
  });

  const filteredCandidates = candidates.filter((c) => {
    const matchesSearch =
      c.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.track.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <LayoutDashboard className="w-4 h-4" />
            <span>CYNBIT INTERNAL COMMAND & TELEMETRY</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-mono mt-1">
            Enterprise Pipeline & Talent Triage
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Live telemetry of incoming client project blueprints and BitElevate engineering diagnostic submissions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {updateMessage && (
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800 animate-fade-in">
              {updateMessage}
            </span>
          )}
          <Button
            onClick={fetchSubmissions}
            variant="outline"
            size="sm"
            isLoading={isLoading}
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            Sync Feeds
          </Button>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>ACTIVE BLUEPRINTS</span>
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-100">
            {blueprints.length}
          </div>
          <div className="text-[11px] text-cyan-400 font-mono mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>100% Sizing Feasibility</span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>PIPELINE CEILING</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-400">
            ${totalPipelineUSD.toLocaleString()}
          </div>
          <div className="text-[11px] text-slate-400 font-mono mt-1">
            ≈ ₹{(totalPipelineUSD * 83 / 10000000).toFixed(2)} Cr INR Pipeline
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>CANDIDATES BENCHMARKED</span>
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-slate-100">
            {candidates.length}
          </div>
          <div className="text-[11px] text-purple-400 font-mono mt-1">
            BitElevate Talent Ingestion
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-1">
            <span>AVG DIAGNOSTIC SCORE</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold font-mono text-amber-400">
            {avgCandidateScore} <span className="text-sm font-normal text-slate-400">/ 100</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono mt-1">
            Adaptive Benchmark Index
          </div>
        </div>

      </div>

      {/* View Switcher & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Toggle View */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveView('blueprints')}
            className={clsx(
              'px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all',
              activeView === 'blueprints'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            )}
          >
            Client Blueprints ({blueprints.length})
          </button>
          <button
            onClick={() => setActiveView('candidates')}
            className={clsx(
              'px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all',
              activeView === 'candidates'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            )}
          >
            BitElevate Candidates ({candidates.length})
          </button>
        </div>

        {/* Search & Domain Filter */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, company, email..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-200 text-xs focus:border-cyan-500 focus:outline-none font-mono"
            />
          </div>

          {activeView === 'blueprints' && (
            <select
              value={filterDomain}
              onChange={(e) => setFilterDomain(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 text-xs font-mono focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">All Domains</option>
              <option value="ai-agents">Autonomous AI</option>
              <option value="fullstack-saas">Full-Stack SaaS</option>
              <option value="tenantease-proptech">TenantEase PropTech</option>
              <option value="cloud-infrastructure">Cloud Zero-Trust</option>
            </select>
          )}
        </div>

      </div>

      {/* Main Table Content */}
      {activeView === 'blueprints' ? (
        /* Blueprints Table */
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Ref ID</th>
                  <th className="py-3 px-4">Project & Client</th>
                  <th className="py-3 px-4">Domain & Cloud</th>
                  <th className="py-3 px-4">Timeline</th>
                  <th className="py-3 px-4">Budget Range</th>
                  <th className="py-3 px-4">Status & Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredBlueprints.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500">
                      No architectural blueprints found matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredBlueprints.map((bp) => (
                    <tr key={bp.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 px-4 font-semibold text-cyan-400">
                        {bp.id}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-100 font-sans text-sm">
                          {bp.projectName}
                        </div>
                        <div className="text-slate-400 text-[11px]">
                          {bp.clientName} · {bp.clientCompany} ({bp.clientEmail})
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-slate-200 uppercase">{bp.domain}</div>
                        <div className="text-purple-400 text-[11px] uppercase">
                          {bp.cloudProvider} · {bp.compliance}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-200">
                          {bp.estimate.estimatedWeeks} Wks
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-400">
                        ${bp.estimate.costMinUSD.toLocaleString()} - ${bp.estimate.costMaxUSD.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={bp.status}
                          onChange={(e) =>
                            handleUpdateStatus('blueprint', bp.id, e.target.value)
                          }
                          className={clsx(
                            'px-2 py-1 rounded text-[11px] font-mono border focus:outline-none cursor-pointer',
                            bp.status === 'Discovery Scheduled'
                              ? 'bg-emerald-950/80 border-emerald-700 text-emerald-300'
                              : bp.status === 'Blueprint Sent'
                              ? 'bg-cyan-950/80 border-cyan-700 text-cyan-300'
                              : 'bg-slate-900 border-slate-700 text-amber-300'
                          )}
                        >
                          <option value="Pending Review">Pending Review</option>
                          <option value="Blueprint Sent">Blueprint Sent</option>
                          <option value="Discovery Scheduled">Discovery Scheduled</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Candidates Table */
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900/80 text-slate-400 border-b border-slate-800 uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Candidate ID</th>
                  <th className="py-3 px-4">Candidate Profile</th>
                  <th className="py-3 px-4">Track</th>
                  <th className="py-3 px-4">Diagnostic Score</th>
                  <th className="py-3 px-4">Readiness Level</th>
                  <th className="py-3 px-4">Status & Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredCandidates.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500">
                      No candidate submissions found matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredCandidates.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="py-3 px-4 font-semibold text-purple-400">
                        {c.id}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-100 font-sans text-sm">
                          {c.candidateName}
                        </div>
                        <div className="text-slate-400 text-[11px] flex items-center gap-2 mt-0.5">
                          <span>{c.email}</span>
                          <a
                            href={c.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline flex items-center gap-0.5"
                          >
                            GitHub <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="uppercase text-slate-300">{c.track}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm font-bold text-cyan-400">
                          {c.score}
                        </span>{' '}
                        <span className="text-slate-500">/ 100</span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={clsx(
                            'px-2 py-0.5 rounded text-[10px] font-bold border',
                            c.readinessBadge === 'Lead System Architect'
                              ? 'bg-purple-950 text-purple-300 border-purple-700'
                              : c.readinessBadge === 'Associate Architect'
                              ? 'bg-cyan-950 text-cyan-300 border-cyan-700'
                              : 'bg-slate-900 text-slate-300 border-slate-700'
                          )}
                        >
                          {c.readinessBadge}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={c.status}
                          onChange={(e) =>
                            handleUpdateStatus('candidate', c.id, e.target.value)
                          }
                          className={clsx(
                            'px-2 py-1 rounded text-[11px] font-mono border focus:outline-none cursor-pointer',
                            c.status === 'BitElevate Cohort Selected'
                              ? 'bg-emerald-950/80 border-emerald-700 text-emerald-300'
                              : c.status === 'Shortlisted for Interview'
                              ? 'bg-purple-950/80 border-purple-700 text-purple-300'
                              : 'bg-slate-900 border-slate-700 text-amber-300'
                          )}
                        >
                          <option value="Under Review">Under Review</option>
                          <option value="Shortlisted for Interview">
                            Shortlisted for Interview
                          </option>
                          <option value="BitElevate Cohort Selected">
                            BitElevate Cohort Selected
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}

