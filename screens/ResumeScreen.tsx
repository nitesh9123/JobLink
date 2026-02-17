import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-28">
            <header className="sticky top-0 z-50 flex items-center justify-between p-6 bg-background-light/80 backdrop-blur-md border-b border-primary/5">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-primary/5">
                        <span className="material-symbols-outlined text-primary">arrow_back_ios_new</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight text-[#0f0d1b]">Resume Details</h1>
                </div>
                <button className="size-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-primary/5">
                    <span className="material-symbols-outlined text-[#524c9a]">more_horiz</span>
                </button>
            </header>

            <section className="p-6">
                <div className="glass relative overflow-hidden rounded-3xl p-8 flex flex-col items-center text-center border-dashed border-2 border-primary/20 bg-gradient-to-br from-white/40 to-white/10">
                    <div className="size-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                         <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
                    </div>
                    <h2 className="text-lg font-bold text-[#0f0d1b]">Upload New Version</h2>
                    <p className="text-sm text-[#524c9a]/70 mt-1 mb-6">PDF, DOCX up to 10MB</p>
                    <button className="w-full bg-primary text-white py-3.5 rounded-xl font-bold shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform">
                        Select File
                    </button>
                </div>
            </section>

            <section className="px-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#0f0d1b]">All Resumes</h3>
                    <span className="text-xs font-medium text-[#524c9a]/60">3 Versions</span>
                </div>
                
                {/* Primary Resume */}
                <div className="bg-white rounded-2xl p-5 border border-primary/10 shadow-sm relative">
                    <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px] font-variation-fill">check_circle</span>
                        PRIMARY
                    </div>
                    <div className="flex gap-4">
                        <div className="size-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary">description</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-[#0f0d1b] leading-tight">Product_Designer_2024.pdf</h4>
                            <p className="text-xs text-[#524c9a]/60 mt-1">Uploaded Oct 24, 2023 • 1.2 MB</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-5">
                         <button className="flex items-center justify-center gap-1.5 py-2.5 bg-primary/5 text-primary rounded-lg text-xs font-bold border border-primary/10">
                            <span className="material-symbols-outlined text-sm">edit</span> Edit
                        </button>
                        <button className="flex items-center justify-center gap-1.5 py-2.5 bg-primary/5 text-primary rounded-lg text-xs font-bold border border-primary/10">
                            <span className="material-symbols-outlined text-sm">download</span> Get
                        </button>
                        <button className="flex items-center justify-center gap-1.5 py-2.5 bg-[#fef2f2] text-red-600 rounded-lg text-xs font-bold">
                             <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                    </div>
                </div>

                {/* Other Resumes */}
                {[
                    { name: 'Creative_Lead_Resume.pdf', date: 'Sep 12, 2023', size: '980 KB' },
                    { name: 'General_Designer_v2.docx', date: 'Aug 05, 2023', size: '2.4 MB' }
                ].map((file, i) => (
                    <div key={i} className="bg-white/60 rounded-2xl p-5 border border-primary/5 shadow-sm">
                        <div className="flex gap-4">
                            <div className="size-12 rounded-xl bg-[#524c9a]/5 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-[#524c9a]">description</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-[#0f0d1b] leading-tight">{file.name}</h4>
                                <p className="text-xs text-[#524c9a]/60 mt-1">Uploaded {file.date} • {file.size}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white text-[#524c9a] rounded-lg text-xs font-bold border border-[#d1cfe7]">
                                Set as Primary
                            </button>
                            <button className="size-10 flex items-center justify-center bg-white text-[#524c9a] rounded-lg border border-[#d1cfe7]">
                                <span className="material-symbols-outlined text-lg">download</span>
                            </button>
                            <button className="size-10 flex items-center justify-center bg-white text-[#524c9a] rounded-lg border border-[#d1cfe7]">
                                <span className="material-symbols-outlined text-lg text-red-400">delete</span>
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            <section className="px-6 mt-8">
                <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 p-5 rounded-2xl border border-primary/5 flex gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl">lightbulb</span>
                    <div>
                        <p className="text-sm font-bold text-[#0f0d1b]">Pro Tip</p>
                        <p className="text-xs text-[#524c9a] leading-relaxed mt-1">Tailor your resume for each application to increase your chances by 40%.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResumeScreen;
