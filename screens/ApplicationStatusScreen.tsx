import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationStatusScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-24">
             {/* Header */}
            <header className="flex items-center justify-between px-6 py-4">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full bg-white/50 border border-white/80">
                    <span className="material-symbols-outlined text-slate-800">chevron_left</span>
                </button>
                <h2 className="text-text-dark text-lg font-bold tracking-tight">Application Status</h2>
                <button className="flex items-center justify-center size-10 rounded-full bg-white/50 border border-white/80">
                    <span className="material-symbols-outlined text-slate-800">more_horiz</span>
                </button>
            </header>

            <section className="px-6 py-4 flex flex-col items-center">
                <div className="size-20 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-primary/5 mb-4 border border-white/60">
                    <img className="size-12 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoHqeeXjdsIX0OKsuDFEUetlhduR9CU53jf0dyzyzGUfa3G4P1gQUN3Hiqbcim7usSORG-hAFIwBUzLFXaDOkrQZf93HP1fv74PeuFSKsTDk_dfMZCwIyI77NCacRwcDFexuWIO3YJY80ujvPiVC7ngsOm9seemPrqiLkku1KqCcgXTA4gAokL01NWklRgcfkihxIUufWnTqUsnL-5cFsWXIsiTkVDG3t2A0tWpwtLLlqGIzvL0_lnGiIMxr_tqWIkvem8d1U7_cmJ" alt="Logo" />
                </div>
                <h1 className="text-text-dark text-2xl font-bold text-center">Senior UI Designer</h1>
                <p className="text-text-muted font-medium">TechCorp • San Francisco, CA</p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide">
                    <span className="size-1.5 rounded-full bg-green-500"></span>
                    In Progress
                </div>
            </section>

            {/* Timeline */}
            <section className="px-8 py-6 relative">
                <div className="absolute left-[41px] top-8 bottom-8 w-0.5 bg-slate-200"></div>
                <div className="absolute left-[41px] top-8 h-[66%] w-0.5 bg-secondary"></div>
                
                <div className="space-y-10 relative">
                    {/* Step 1 */}
                    <div className="flex gap-6 items-start">
                        <div className="relative z-10 flex items-center justify-center size-7 rounded-full bg-secondary border-4 border-white shadow-sm">
                            <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-slate-900">Applied</h3>
                                <span className="text-[11px] font-medium text-slate-400">Oct 24, 2023</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-0.5">Application successfully submitted</p>
                        </div>
                    </div>
                     {/* Step 2 */}
                     <div className="flex gap-6 items-start">
                        <div className="relative z-10 flex items-center justify-center size-7 rounded-full bg-secondary border-4 border-white shadow-sm">
                            <span className="material-symbols-outlined text-white text-[14px] font-bold">check</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-slate-900">Under Review</h3>
                                <span className="text-[11px] font-medium text-slate-400">Oct 26, 2023</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-0.5">Hiring manager is reviewing your profile</p>
                        </div>
                    </div>
                     {/* Step 3 */}
                     <div className="flex gap-6 items-start">
                        <div className="relative z-10 flex items-center justify-center size-7 rounded-full bg-white border-4 border-secondary shadow-md">
                            <div className="size-1.5 rounded-full bg-secondary"></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-secondary text-lg">Interview</h3>
                                <span className="text-[11px] font-bold text-secondary">In Progress</span>
                            </div>
                            <p className="text-sm text-slate-600 mt-0.5">Round 2: Technical Design Challenge</p>
                        </div>
                    </div>
                     {/* Step 4 */}
                     <div className="flex gap-6 items-start opacity-40">
                        <div className="relative z-10 flex items-center justify-center size-7 rounded-full bg-white border-4 border-slate-200">
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold text-slate-900">Final Offer</h3>
                                <span className="text-[11px] font-medium text-slate-400">Pending</span>
                            </div>
                            <p className="text-sm text-slate-500 mt-0.5">Final decision and offer package</p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="px-6 py-4 mb-8">
                <div className="glass rounded-3xl p-6 shadow-xl shadow-primary/5 border border-white/60 bg-white/70">
                    <h4 className="text-slate-900 font-bold mb-4">Next Steps</h4>
                    <div className="bg-white/40 rounded-2xl p-4 border border-white/40 mb-6">
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Prepare your portfolio for the technical walkthrough. The session will focus on your design process for the "Fintech Dashboard" project.
                        </p>
                        <button className="mt-4 w-full bg-secondary text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-secondary/20">
                            Schedule Call
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full overflow-hidden border-2 border-white">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuApZ9N3r7fDX6r6sPFsCoJ-tY0M6TxNz9pEDc2LuuRWz0EPHjh4IUZzny5IzNaY56tpXmigetLO-t9IUdjgaGPn_HjwWjuZvCIDvHXJyi6MLdIGWm86fy-iCq2ln_pDDpfGluifGqum-oTT4MmH-taV12k9JcTmhcxbmKmbO4J3dfdBeXUUKGAfl3PqnddzKDqHgXi2XEmx2gVdjhpMXwVtKgDip76Ti_veGBa63KnSP4Jww0XrMt6QPIjaV6aIGn7NCdSNDnnbhB4B" alt="Recruiter" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-slate-400 font-medium">Your Recruiter</p>
                            <p className="text-sm font-bold text-slate-800">Sarah Jenkins</p>
                        </div>
                        <div className="flex gap-2">
                             <button className="size-10 rounded-full bg-white flex items-center justify-center text-secondary border border-white/60 shadow-sm active:scale-95 transition-transform">
                                <span className="material-symbols-outlined text-[20px]">mail</span>
                            </button>
                            <button onClick={() => navigate('/chat')} className="size-10 rounded-full bg-white flex items-center justify-center text-secondary border border-white/60 shadow-sm active:scale-95 transition-transform">
                                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ApplicationStatusScreen;
