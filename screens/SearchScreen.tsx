import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-24">
             {/* Header Section */}
             <header className="sticky top-0 z-40 bg-[#f6f6f8]/80 backdrop-blur-md px-5 pt-8 pb-4">
                <div className="flex items-center justify-between mb-4">
                    <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm border border-slate-100">
                        <span className="material-symbols-outlined text-slate-700">arrow_back_ios_new</span>
                    </button>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-slate-700">search</span>
                        </button>
                        <button className="flex items-center justify-center size-10 rounded-full bg-primary text-white shadow-md">
                            <span className="material-symbols-outlined">tune</span>
                        </button>
                    </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-text-dark">Designer Roles</h1>
                <p className="text-text-muted text-sm mt-1">128 jobs found in San Francisco</p>
            </header>

            {/* Sort Bar */}
            <div className="flex gap-3 px-5 py-3 overflow-x-auto no-scrollbar">
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-4 shadow-sm">
                    <p className="text-white text-sm font-medium">Newest</p>
                    <span className="material-symbols-outlined text-white text-lg">expand_more</span>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 px-4 shadow-sm">
                    <p className="text-slate-700 text-sm font-medium">Salary</p>
                    <span className="material-symbols-outlined text-slate-400 text-lg">expand_more</span>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 px-4 shadow-sm">
                    <p className="text-slate-700 text-sm font-medium">Remote</p>
                </button>
            </div>

            {/* Job Cards */}
            <main className="flex-1 px-5 space-y-4 pt-2">
                {/* Job Card 1 */}
                <div onClick={() => navigate('/jobs/stripe')} className="glass-card bg-white/70 rounded-2xl p-4 flex flex-col gap-4 relative overflow-hidden group cursor-pointer active:scale-[0.99] transition-transform">
                    <div className="absolute -right-4 -top-4 size-24 bg-primary/5 rounded-full blur-2xl"></div>
                    <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                            <div className="size-12 rounded-xl bg-white shadow-sm flex items-center justify-center p-2 border border-slate-100">
                                <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ypTVYkNFchofoSqADF6yM9dmCt2LO8Z047nAsn__85-tVfxq1elsj5giM5vyy9h8sJPuFM7vDhIbZj7iRWgiSxS-xJOTPSlVq70Cl_sEAD7SuaLtvn_qSvmcUEa_bYtwbn5aRRLv_uku9puVpeYOH5Upy7qfnyvq6C1qvEPcBOEvqRb0ddqk1giIz3y0H-HJ92gwoahKt-s1iE-xVMScv6B1HEbCvn5GMS5smJvhR2wkD3DLmdH-9E5lxLSJp-PH07Sq8E2nIdEu" alt="Stripe" />
                            </div>
                            <div>
                                <h3 className="font-bold text-text-dark text-base leading-tight">Product Designer</h3>
                                <p className="text-text-muted text-sm mt-0.5">Stripe • San Francisco, CA</p>
                            </div>
                        </div>
                        <button className="text-primary" onClick={(e) => e.stopPropagation()}>
                            <span className="material-symbols-outlined fill-0">bookmark_border</span>
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider">Full-time</span>
                        <span className="px-2.5 py-1 rounded-lg bg-green-100 text-green-700 text-[11px] font-semibold uppercase tracking-wider">Hybrid</span>
                    </div>
                    <div className="flex items-center justify-between mt-1 pt-3 border-t border-slate-100/50">
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Expected Salary</span>
                            <p className="text-primary font-bold text-lg leading-none mt-1">$165k - $210k<span className="text-slate-400 font-medium text-xs">/yr</span></p>
                        </div>
                        <button className="bg-primary text-white font-bold py-2 px-5 rounded-xl shadow-lg shadow-primary/20 text-sm">Apply</button>
                    </div>
                </div>

                {/* Job Card 2 */}
                <div onClick={() => navigate('/jobs/airbnb')} className="glass-card bg-white/70 rounded-2xl p-4 flex flex-col gap-4 relative overflow-hidden cursor-pointer active:scale-[0.99] transition-transform">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                            <div className="size-12 rounded-xl bg-white shadow-sm flex items-center justify-center p-2 border border-slate-100">
                                <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMQlg_QaWVg2FnVtHaN0FY4rxtJ8TIrhAyiVT18CsJqp2TI14SfYLybtN93wgXwVWTLVjjAlCUg3wnYp-nwPRpP3jYqDnfJhTuWdghAvshArs4U4IOKQ86gZEAPqKwbfbEoypcKUmx_F_MHw1Dsy736lQdfKYaqpOnQA2TOkXs8pi-tP2EJTrgE9S-NxXwLMeQfkkgu7v2_60CpwytfYpisnSt2kyUz59ALJ0UVjJDZCGrv6VEWW_8zovNRMs8AkcL7_y5kQMhY1kw" alt="Airbnb" />
                            </div>
                            <div>
                                <h3 className="font-bold text-text-dark text-base leading-tight">UX Researcher</h3>
                                <p className="text-text-muted text-sm mt-0.5">Airbnb • Remote</p>
                            </div>
                        </div>
                        <button className="text-slate-300 hover:text-primary" onClick={(e) => e.stopPropagation()}>
                            <span className="material-symbols-outlined">bookmark_border</span>
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider">Contract</span>
                        <span className="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-[11px] font-semibold uppercase tracking-wider">Remote</span>
                    </div>
                    <div className="flex items-center justify-between mt-1 pt-3 border-t border-slate-100/50">
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Expected Salary</span>
                            <p className="text-primary font-bold text-lg leading-none mt-1">$140k - $175k<span className="text-slate-400 font-medium text-xs">/yr</span></p>
                        </div>
                        <button className="bg-primary text-white font-bold py-2 px-5 rounded-xl shadow-lg shadow-primary/20 text-sm">Apply</button>
                    </div>
                </div>

                {/* Job Card 3 */}
                <div onClick={() => navigate('/jobs/figma')} className="glass-card bg-white/70 rounded-2xl p-4 flex flex-col gap-4 relative overflow-hidden cursor-pointer active:scale-[0.99] transition-transform">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                            <div className="size-12 rounded-xl bg-white shadow-sm flex items-center justify-center p-2 border border-slate-100">
                                <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjeSlpVQO5eoQrwLXlQ2NHxNRT0vLdkEeeqyIko3In6HZu7zjSpR96lLozj-kiB_Bsl3aky1iwyiKpxmAJn4HQT4_J-JX-EDX_WsZiwAXi9iEWmOp-7Jn3KtoiEF2QX082PvBzNxvL6xwjHIwKCvws4Zvust8idcH-OMMSNGfkXom-tdxJsqjvURRlaTsOG23WxuPmJWqQywizp1aP3p-0xLpIcL2s7smTaBRGYqaHPp8nHpbpz5GELw_4nXXmyCcX3D2qtdx2thAA" alt="Figma" />
                            </div>
                            <div>
                                <h3 className="font-bold text-text-dark text-base leading-tight">Senior Visual Designer</h3>
                                <p className="text-text-muted text-sm mt-0.5">Figma • San Francisco, CA</p>
                            </div>
                        </div>
                        <button className="text-primary" onClick={(e) => e.stopPropagation()}>
                            <span className="material-symbols-outlined font-variation-fill">bookmark</span>
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider">Full-time</span>
                        <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 text-[11px] font-semibold uppercase tracking-wider">On-site</span>
                    </div>
                    <div className="flex items-center justify-between mt-1 pt-3 border-t border-slate-100/50">
                        <div className="flex flex-col">
                            <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Expected Salary</span>
                            <p className="text-primary font-bold text-lg leading-none mt-1">$180k - $240k<span className="text-slate-400 font-medium text-xs">/yr</span></p>
                        </div>
                        <button className="bg-primary text-white font-bold py-2 px-5 rounded-xl shadow-lg shadow-primary/20 text-sm">Apply</button>
                    </div>
                </div>
            </main>

            {/* Simulated Filter Bottom Sheet (Partial View) */}
            <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto z-50 pointer-events-none">
                 <div className="bg-white rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transform translate-y-[calc(100%-40px)] hover:translate-y-0 transition-transform duration-300 pointer-events-auto cursor-pointer border-t border-slate-100">
                    <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900">Filters</h2>
                        <button className="text-primary font-semibold text-sm">Reset</button>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 mb-3">Employment Type</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold">Full-time</span>
                                <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">Contract</span>
                                <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">Part-time</span>
                            </div>
                        </div>
                        <button className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/30 mt-8">Show Results</button>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default SearchScreen;
