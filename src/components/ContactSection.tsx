'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    // Simulate quick dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            INITIATE ENGAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans tracking-tight">
            Start a Conversation with Our Digital Architects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Have a project in mind or need strategic architecture consulting? Reach out directly to our engineering team in Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-slate-100 font-sans">
                Corporate Headquarters
              </h3>

              <div className="space-y-4 text-xs font-mono text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-100 block font-sans text-sm">Jaipur, Rajasthan</strong>
                    <span className="text-slate-400 font-sans text-xs">
                      32/115, RHB, Pratap Nagar, Jaipur, Rajasthan 302033, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-100 block font-sans text-sm">Email Inquiries</strong>
                    <a href="mailto:opportunities@cynbit.in" className="text-cyan-400 hover:underline">
                      opportunities@cynbit.in
                    </a>
                    <span className="block text-slate-400">support@cynbit.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-100 block font-sans text-sm">Helpline & Direct Line</strong>
                    <span className="text-slate-300">+91 89479 62667</span>
                    <span className="block text-slate-400">+91 78912 09777</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Response turnaround: Under 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md p-6 sm:p-8">
              {isSent ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 font-sans">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                    Thank you. Your message has been routed to Cynbit’s discovery desk. We will respond within 24 hours.
                  </p>
                  <Button onClick={() => setIsSent(false)} variant="outline" size="sm">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. TechCorp Solutions"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Project Overview or Question
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share a brief overview of your technical requirements, expected timelines, or questions..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto px-8"
                      isLoading={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

