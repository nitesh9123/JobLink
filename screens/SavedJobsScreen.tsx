import React from 'react';
import { useNavigate } from 'react-router-dom';

const SavedJobsScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-24 px-6">
            <header className="sticky top-0 z-40 flex items-center justify-between py-6 bg-background-light/90 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-primary/5">
                        <span className="material-symbols-outlined text-[#0f0d1b]">arrow_back_ios_new</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight ml-2">Saved Jobs</h1>
                </div>
                <div className="relative">
                    <button className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm border border-primary/10">
                        <span className="material-symbols-outlined text-[#524c9a]">filter_list</span>
                    </button>
                </div>
            </header>

            <div className="mb-6">
                <div className="bg-primary/5 p-1 rounded-xl flex items-center justify-between">
                    <button onClick={() => navigate('/applied')} className="flex-1 py-2 text-sm font-medium text-[#524c9a]">Applied</button>
                    <button className="flex-1 py-2 text-sm font-bold rounded-lg bg-white text-primary shadow-sm">Saved</button>
                    <button onClick={() => navigate('/profile')} className="flex-1 py-2 text-sm font-medium text-[#524c9a]">Profile</button>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-[#0f0d1b]">24 Saved Jobs</h2>
                    <p className="text-xs text-[#524c9a] mt-1">5 jobs are expiring soon</p>
                </div>
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary font-variation-fill">bookmark</span>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {/* Saved Job 1 */}
                <div className="glass rounded-2xl p-5 relative bg-white/60">
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                         <button className="size-8 rounded-full bg-white shadow-sm flex items-center justify-center text-red-500">
                             <span className="material-symbols-outlined font-variation-fill text-xl">favorite</span>
                        </button>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="size-14 rounded-xl bg-white shadow-sm p-2 flex items-center justify-center shrink-0">
                            <img className="w-full h-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7bRC2tJg28C5ylOehEW-3Jl97KaG1gnJiu5W70WPOUNkNg0PRg8qd0oWMTCqYvXONsskYaNQRgW5HKwVBGP-bTPmmokFZqz70VEWNBuWqvbI_VIIIf7YVG_UwMNW1_a2Vs0xJMutx4jkasjsW6n8NWQDAawGouFSLzBYjnEpAVCMwIBp6G7Dtq1fVsw1QL21CtzxwxAmuNiF0ib6CJVe_QO7uOdG0CmIv0teudjmWM8O5LEbRP8Cx7GSPCIA4NYYq1_G6qY20kGpw" alt="TechFlow" />
                        </div>
                        <div className="pr-8">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold mb-2 uppercase tracking-wide">
                                <span className="material-symbols-outlined text-xs">schedule</span> Expiring Soon
                            </span>
                            <h3 className="font-bold text-[#0f0d1b] leading-tight">Senior Product Designer</h3>
                            <p className="text-sm text-[#524c9a] mt-0.5">TechFlow Inc.</p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs text-[#524c9a]/70">
                             <span className="material-symbols-outlined text-sm">location_on</span> San Francisco, CA
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#524c9a]/70">
                             <span className="material-symbols-outlined text-sm">payments</span> $140k - $180k
                        </div>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <button className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20">Apply Now</button>
                    </div>
                </div>

                {/* Saved Job 2 */}
                <div className="glass rounded-2xl p-5 relative bg-white/60">
                    <div className="absolute top-4 right-4">
                         <button className="size-8 rounded-full bg-white shadow-sm flex items-center justify-center text-red-500">
                             <span className="material-symbols-outlined font-variation-fill text-xl">favorite</span>
                        </button>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="size-14 rounded-xl bg-white shadow-sm p-2 flex items-center justify-center shrink-0">
                            <img className="w-full h-full rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgxjaGMgzCg3eSp2mhvEF1I7ltAy3kV5Kq87wuoolccPzHcooezkzJfoXtsv2pdQGXcI8Gkwsi_51wruYuNDqhsWnmKirvoVE0e67le4UZIdL-banHR2Ipu9DRiP1Qe9T9Bcr_6IqIRFtzYlzsdjec7y-_HBi2EiFJuCUa60u3vkM01JAsHXhuXrQknRVd1uDEuZq2UDVb1T8xEdoP8uNVNG0fPOUbp5FlRXJQ7y1zveTdtisXI1hS9IDXOTX0zfG8v0-0rJf-QJjl" alt="Creative" />
                        </div>
                        <div className="pr-8">
                            <h3 className="font-bold text-[#0f0d1b] leading-tight">Lead UX Researcher</h3>
                            <p className="text-sm text-[#524c9a] mt-0.5">Creative Hub</p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                         <div className="flex items-center gap-1 text-xs text-[#524c9a]/70">
                             <span className="material-symbols-outlined text-sm">location_on</span> Remote
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#524c9a]/70">
                             <span className="material-symbols-outlined text-sm">payments</span> $120k - $150k
                        </div>
                    </div>
                    <div className="mt-5 flex gap-2">
                         <button className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedJobsScreen;
