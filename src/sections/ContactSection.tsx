import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07080d] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-fist-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-fist-purple-950/80 border border-fist-purple-500/40 text-xs font-mono text-fist-cyan-300 mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-fist-cyan-400" />
            <span>COMMUNICATION & INQUIRIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
            Connect With <span className="text-gradient-cyan">FIST</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Whether you are a recruiter looking for skilled student developers, an engineering student seeking guidance, 
            or an institution planning collaboration — our doors are always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Department Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#0f121d] border border-slate-800/90 shadow-xl space-y-6">
              <div className="flex items-center space-x-3.5 pb-5 border-b border-slate-800">
                <img
                  src="/fist-logo.jpg"
                  alt="FIST Official Logo"
                  className="w-12 h-12 rounded-full object-contain border border-fist-purple-500/50"
                />
                <div>
                  <h3 className="text-lg font-bold text-white font-display">FIST Association</h3>
                  <p className="text-xs font-mono text-fist-cyan-400">Department of Computer Science & Engineering</p>
                </div>
              </div>

              {/* Details with editable placeholders */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-fist-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Campus Location</span>
                    <span className="text-slate-400 leading-relaxed">
                      [Add Department Block / Lab Floor] <br />
                      [Add College Name: College of Engineering and Technology] <br />
                      [Add City, State & PIN Code]
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-fist-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Department & FIST Email</span>
                    <span className="text-slate-400 font-mono">fist.cse@college.edu</span> <br />
                    <span className="text-slate-400 font-mono">hod.cse@college.edu</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-fist-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Telephone Inquiries</span>
                    <span className="text-slate-400 font-mono">[Add Contact Phone: +91 00000 00000]</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="pt-4 border-t border-slate-800">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center text-xs font-mono text-slate-400 flex flex-col items-center justify-center min-h-[110px]">
                  <Globe className="w-5 h-5 text-fist-cyan-400 mb-1" />
                  <span className="text-slate-300 font-bold">Interactive Campus Map</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">[Department of CSE Computing Labs]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0f121d] border border-fist-purple-500/30 shadow-2xl">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send a Message to FIST
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to reach out to the student council and faculty advisor.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. A FIST coordinator will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-fist-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fist-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-fist-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fist-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Workshop Inquiry, Hackathon Sponsorship, Project Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-fist-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fist-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your inquiry or collaboration proposal with the department..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-fist-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-fist-cyan-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-fist-purple-600 to-fist-cyan-600 hover:from-fist-purple-500 hover:to-fist-cyan-500 shadow-xl transition-all duration-300 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
