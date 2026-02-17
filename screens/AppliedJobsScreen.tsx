import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppliedJobsScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-24 px-6">
            <header className="sticky top-0 z-50 flex items-center justify-between p-6 pb-4 bg-background-light/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-primary/5">
                        <span className="material-symbols-outlined text-[#0f0d1b]">arrow_back_ios_new</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight">Applied Jobs</h1>
                </div>
                <div className="relative">
                    <button className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm border border-primary/10">
                        <span className="material-symbols-outlined text-[#524c9a]">more_horiz</span>
                    </button>
                </div>
            </header>

            <div className="mt-2 space-y-4">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#524c9a]/50">search</span>
                    <input className="w-full bg-white border-none rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 shadow-sm placeholder-[#524c9a]/40" type="text" placeholder="Search applications..." />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    <button className="px-5 py-2 bg-primary text-white rounded-full text-xs font-bold whitespace-nowrap">All Status</button>
                    <button className="px-5 py-2 glass bg-white/60 text-[#524c9a] rounded-full text-xs font-semibold whitespace-nowrap border border-white/60">Interview</button>
                    <button className="px-5 py-2 glass bg-white/60 text-[#524c9a] rounded-full text-xs font-semibold whitespace-nowrap border border-white/60">Applied</button>
                    <button className="px-5 py-2 glass bg-white/60 text-[#524c9a] rounded-full text-xs font-semibold whitespace-nowrap border border-white/60">Rejected</button>
                </div>
            </div>

            <section className="mt-6 space-y-4">
                 {/* Item 1 */}
                <div onClick={() => navigate('/status/1')} className="glass p-4 rounded-2xl shadow-sm border border-white bg-white/60 cursor-pointer active:scale-[0.99] transition-transform">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                            <div className="size-14 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden p-2">
                                <img className="size-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe665R1KUOOtZT9NdDPP-VHehjNtcAwA2OcD64HlttXOpM6v5Y1axVdL6U0hUPRMsF0vbkL5gDuWoJ2Rs2epEPwdORttaHo_CqrIufNh5gW0mIrjQ3JW86R7FCb2wFB5MzCfnKP-XKl7i7LEltzCYVWN4nglf4bQfrrbvpehEgYbb-20cIQfgjKw0Z4PT50uKddHR1UKssNM0YrG82AMH3k3togQQnNQJ-xQ5r4YqfpL0DtnmKyTnJLYJgkFNKBCH-kSjA2OQIOv36" alt="TechFlow" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0f0d1b]">Product Designer</h3>
                                <p className="text-xs text-[#524c9a] font-medium">TechFlow Inc.</p>
                                <p className="text-[10px] text-[#524c9a]/50 mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]">schedule</span> Applied 2 days ago
                                </p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Interview</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#524c9a]/5 flex items-center justify-between">
                        <div className="flex -space-x-2">
                            <div className="size-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[14px] text-slate-400">person</span>
                            </div>
                            <div className="size-6 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center">
                                <span className="material-symbols-outlined text-[14px] text-slate-500">person</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-[#524c9a]/60 font-medium">Next: Portfolio Review (Friday)</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="glass p-4 rounded-2xl shadow-sm border border-white bg-white/60">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                            <div className="size-14 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden p-2">
                                <img className="size-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgxjaGMgzCg3eSp2mhvEF1I7ltAy3kV5Kq87wuoolccPzHcooezkzJfoXtsv2pdQGXcI8Gkwsi_51wruYuNDqhsWnmKirvoVE0e67le4UZIdL-banHR2Ipu9DRiP1Qe9T9Bcr_6IqIRFtzYlzsdjec7y-_HBi2EiFJuCUa60u3vkM01JAsHXhuXrQknRVd1uDEuZq2UDVb1T8xEdoP8uNVNG0fPOUbp5FlRXJQ7y1zveTdtisXI1hS9IDXOTX0zfG8v0-0rJf-QJjl" alt="CreativeHub" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0f0d1b]">Senior UI Artist</h3>
                                <p className="text-xs text-[#524c9a] font-medium">Creative Hub</p>
                                <p className="text-[10px] text-[#524c9a]/50 mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]">schedule</span> Applied 5 days ago
                                </p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Applied</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#524c9a]/5 flex items-center justify-between">
                        <p className="text-[10px] text-[#524c9a]/60 font-medium italic">Application under review</p>
                        <button className="text-primary text-[10px] font-bold">View Listing</button>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="glass p-4 rounded-2xl shadow-sm border border-white bg-white/40 opacity-80">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                            <div className="size-14 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden grayscale p-2">
                                <img className="size-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB64AldVJgatPuYhEuWlxuDTOj8ZAs9G68jOsBUlcfXyCE-cVnXKFS5vWsugTob5Rczd8--RQFWdgLHZrDdJ9Rq9fwOPtJP3vdjr5V_Vdb7QBD0VZYfzd2ZnQJ0kP1ivm_COuofPC9WosIzLDyo2u-MH48kq5jiZ0P4WOjH274U6NqVGq97i8EWkZBBKVbFlAjb7JhddrPocFm6QmAsdsluykuS59uQKC7kjIiBFoyRRQsb-jQK7vFajBcE1N9s6M8wjN9jTZVjX4pf" alt="DesignStudio" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0f0d1b]">Visual Designer</h3>
                                <p className="text-xs text-[#524c9a] font-medium">Global Studio X</p>
                                <p className="text-[10px] text-[#524c9a]/50 mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]">schedule</span> Applied 2 weeks ago
                                </p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-[10px] font-bold uppercase tracking-wider">Closed</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#524c9a]/5 flex items-center justify-between">
                        <p className="text-[10px] text-red-500 font-medium">Position Filled</p>
                        <button className="text-[#524c9a]/60 text-[10px] font-bold">Archive</button>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="glass p-4 rounded-2xl shadow-sm border border-white bg-white/60">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                            <div className="size-14 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden p-2">
                                <img className="size-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA4LKdYCBZMcEsXq9Xoklr7U0M-IGAisqb4dzh0KTEY0mDKxCA9_PSU9B-cYURA8V7eyCDorssT6QvouC8ZtlYv92USokcCGQPUxFhXurLdEpU2bTZ7ZU4U-EzhhVk3g-ThElYI06I1p7L_XfJcQ2p4CwmLj4DABIS_rkqd_MY3AbY8o402gQk0o9e1KPIZ3pXhYA1qw3taYmwwj-LIYM6QjP8YQissfeGjlNbTXwipahWqw-SCEOxzPcj09qtX-_f-UCSm9W1VeIl" alt="NexGen" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0f0d1b]">UX Researcher</h3>
                                <p className="text-xs text-[#524c9a] font-medium">NexGen Systems</p>
                                <p className="text-[10px] text-[#524c9a]/50 mt-1 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[12px]">schedule</span> Applied 1 week ago
                                </p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-wider">Offer</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#524c9a]/5 flex items-center justify-between">
                        <p className="text-[10px] text-[#524c9a]/60 font-medium">View official offer letter</p>
                        <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-[10px] font-bold shadow-md shadow-primary/20">Respond</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppliedJobsScreen;