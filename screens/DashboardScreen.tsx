import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-24">
            {/* Header */}
            <header className="sticky top-0 z-40 flex items-center justify-between p-6 pb-2 bg-background-light/80 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl">grid_view</span>
                    <h1 className="text-xl font-bold tracking-tight text-text-dark">Dashboard</h1>
                </div>
                <div className="relative">
                    <button 
                        onClick={() => navigate('/activity')}
                        className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm border border-primary/10 active:scale-95 transition-transform"
                    >
                        <span className="material-symbols-outlined text-text-muted">notifications</span>
                    </button>
                    <span className="absolute top-0 right-0 size-2.5 bg-red-500 border-2 border-white rounded-full"></span>
                </div>
            </header>

            {/* Profile Section */}
            <section className="px-6 py-6 flex flex-col items-center">
                <div className="relative group cursor-pointer" onClick={() => navigate('/profile')}>
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div 
                        className="relative size-28 rounded-full border-4 border-white shadow-xl bg-center bg-cover"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJuWDNisHEld1R2Hd1icJr1IOBGGRRJ4VzHUUbgoctPme7s8Io2lArRU5hXB3eGyjpiV-rsjrevJsRvz1F4KPEvElzOOXgTj5NeJVW0iLv_9eEimqCjoAyV-J62bYR1mYeCgoJ57Xr_9rpVfafi42pBcBfj-kZhOEE6WJy2xe8vEplKmBiu-nDQuZU0uic3X7td9DI_KuMaXWeSrJlIit9Vdt-L_vnHOroFa92BuHV4lceENzLqPFN7lx-rcfcCbOXZ_1wrSVEP8YQ')" }}
                    ></div>
                    <button className="absolute bottom-1 right-1 size-8 bg-primary text-white rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                </div>
                <div className="mt-4 text-center">
                    <h2 className="text-2xl font-bold text-text-dark">Jordan Sterling</h2>
                    <p className="text-text-muted font-medium flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-sm">work</span> Senior Product Designer
                    </p>
                    <p className="text-text-muted/60 text-sm mt-1 flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span> New York, NY
                    </p>
                </div>
            </section>

            {/* Resume Card */}
            <section className="px-6 pb-6">
                <div 
                    onClick={() => navigate('/resume')}
                    className="glass rounded-2xl p-5 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-transform cursor-pointer"
                >
                    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl">description</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-text-dark">Professional Resume</h3>
                        <p className="text-xs text-text-muted mt-0.5">Updated 2 days ago</p>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-primary/20 flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">upload</span>
                        Update
                    </button>
                </div>
            </section>

            {/* Tabs */}
            <div className="px-6">
                <div className="bg-primary/5 p-1 rounded-xl flex items-center justify-between mb-6">
                    <button 
                        onClick={() => navigate('/applied')}
                        className="flex-1 py-2 text-sm font-bold rounded-lg bg-white text-primary shadow-sm transition-all"
                    >
                        Applied
                    </button>
                    <button 
                        onClick={() => navigate('/saved')}
                        className="flex-1 py-2 text-sm font-medium text-text-muted transition-all"
                    >
                        Saved
                    </button>
                    <button 
                         onClick={() => navigate('/profile')}
                         className="flex-1 py-2 text-sm font-medium text-text-muted transition-all"
                    >
                        Profile
                    </button>
                </div>
            </div>

            {/* Recent Activity */}
            <section className="px-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-text-dark">Recent Activity</h3>
                    <button className="text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">cleaning_services</span>
                        Clear All
                    </button>
                </div>
                <div className="space-y-3">
                    <div className="bg-white rounded-xl p-4 flex gap-4 border border-primary/5 shadow-sm">
                        <div className="size-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-green-600">check_circle</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <p className="text-sm font-bold text-text-dark">Application Viewed</p>
                                <span className="text-[10px] text-text-muted/50">12m ago</span>
                            </div>
                            <p className="text-xs text-text-muted mt-1">Design Studio X reviewed your application for Lead UX.</p>
                        </div>
                        <div className="size-2 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                    </div>

                    <div onClick={() => navigate('/chat')} className="bg-white rounded-xl p-4 flex gap-4 border border-primary/5 shadow-sm cursor-pointer active:scale-[0.98] transition-transform">
                        <div className="size-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary">calendar_month</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <p className="text-sm font-bold text-text-dark">Interview Scheduled</p>
                                <span className="text-[10px] text-text-muted/50">2h ago</span>
                            </div>
                            <p className="text-xs text-text-muted mt-1">Confirmed: Interview with TechFlow Inc. for Friday at 10 AM.</p>
                        </div>
                        <div className="size-2 bg-primary rounded-full mt-1.5 shrink-0"></div>
                    </div>

                    <div className="bg-white rounded-xl p-4 flex gap-4 border border-primary/5 shadow-sm">
                        <div className="size-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-orange-600">info</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <p className="text-sm font-bold text-text-dark">Missing Portfolio Link</p>
                                <span className="text-[10px] text-text-muted/50">5h ago</span>
                            </div>
                            <p className="text-xs text-text-muted mt-1">Your application for Creative Hub requires a portfolio link.</p>
                        </div>
                        <div className="size-2 bg-orange-400 rounded-full mt-1.5 shrink-0"></div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="px-6 mt-8 grid grid-cols-2 gap-4">
                <div onClick={() => navigate('/applied')} className="bg-gradient-to-br from-primary to-blue-700 p-5 rounded-2xl text-white shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-transform">
                    <p className="text-xs opacity-80 font-medium">Applied Jobs</p>
                    <p className="text-3xl font-bold mt-1">12</p>
                    <div className="mt-4 flex items-center gap-1 text-[10px] bg-white/20 w-fit px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-xs">trending_up</span> +3 this week
                    </div>
                </div>
                <div onClick={() => navigate('/saved')} className="bg-white p-5 rounded-2xl border border-primary/10 shadow-sm cursor-pointer active:scale-95 transition-transform">
                    <p className="text-xs text-text-muted font-medium">Saved Jobs</p>
                    <p className="text-3xl font-bold mt-1 text-text-dark">24</p>
                    <div className="mt-4 flex items-center gap-1 text-[10px] text-primary bg-primary/5 w-fit px-2 py-1 rounded-full">
                        <span className="material-symbols-outlined text-xs">bookmark</span> 5 expiring soon
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashboardScreen;