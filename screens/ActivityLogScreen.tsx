import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityLogScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-32 px-6">
            <header className="sticky top-0 z-50 flex items-center justify-between py-6 bg-background-light/60 backdrop-blur-xl border-b border-primary/5">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full bg-white border border-primary/10 shadow-sm text-[#0f0d1b]">
                         <span className="material-symbols-outlined">arrow_back_ios_new</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-tight text-[#0f0d1b]">Activity Log</h1>
                </div>
                <button className="size-10 flex items-center justify-center rounded-full bg-white border border-primary/10 shadow-sm text-primary">
                    <span className="material-symbols-outlined text-xl">filter_list</span>
                </button>
            </header>

            <div className="mt-2 mb-8 glass rounded-3xl p-5 shadow-sm bg-white/70">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Weekly Summary</p>
                    <span className="text-xs text-[#524c9a]/60">Oct 12 - Oct 19</span>
                </div>
                <div className="flex gap-4">
                    <div className="flex-1 text-center border-r border-primary/10">
                        <p className="text-2xl font-bold text-[#0f0d1b]">24</p>
                        <p className="text-[10px] text-[#524c9a]">Interactions</p>
                    </div>
                    <div className="flex-1 text-center border-r border-primary/10">
                        <p className="text-2xl font-bold text-[#0f0d1b]">8</p>
                        <p className="text-[10px] text-[#524c9a]">New Views</p>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="text-2xl font-bold text-[#0f0d1b]">3</p>
                        <p className="text-[10px] text-[#524c9a]">Matches</p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div>
                    <h3 className="text-xs font-bold text-[#524c9a]/40 uppercase tracking-widest mb-4">Today</h3>
                    <div className="space-y-4">
                         {/* Item 1 */}
                        <div className="flex gap-4">
                            <div className="relative">
                                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/10 overflow-hidden">
                                     <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJuWDNisHEld1R2Hd1icJr1IOBGGRRJ4VzHUUbgoctPme7s8Io2lArRU5hXB3eGyjpiV-rsjrevJsRvz1F4KPEvElzOOXgTj5NeJVW0iLv_9eEimqCjoAyV-J62bYR1mYeCgoJ57Xr_9rpVfafi42pBcBfj-kZhOEE6WJy2xe8vEplKmBiu-nDQuZU0uic3X7td9DI_KuMaXWeSrJlIit9Vdt-L_vnHOroFa92BuHV4lceENzLqPFN7lx-rcfcCbOXZ_1wrSVEP8YQ" alt="Recruiter" />
                                </div>
                                <div className="absolute -bottom-1 -right-1 size-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[10px] text-white font-variation-fill">chat_bubble</span>
                                </div>
                            </div>
                            <div className="flex-1 glass p-4 rounded-2xl bg-white/70">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm font-bold text-[#0f0d1b]">New Message</p>
                                    <span className="text-[10px] text-[#524c9a]/60">14:32</span>
                                </div>
                                <p className="text-xs text-[#524c9a] leading-relaxed">Sarah Miller from <span className="font-semibold">TechFlow Inc.</span> sent you a message regarding the Product Designer role.</p>
                                <button className="mt-3 text-xs font-bold text-primary flex items-center gap-1">
                                    Reply Now <span className="material-symbols-outlined text-xs">chevron_right</span>
                                </button>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="flex gap-4">
                            <div className="relative">
                                <div className="size-12 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 border border-purple-200">
                                    <span className="material-symbols-outlined text-purple-600">auto_awesome</span>
                                </div>
                            </div>
                            <div className="flex-1 glass p-4 rounded-2xl bg-white/70">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm font-bold text-[#0f0d1b]">New Job Match</p>
                                    <span className="text-[10px] text-[#524c9a]/60">11:05</span>
                                </div>
                                <p className="text-xs text-[#524c9a] leading-relaxed">Based on your skills, you're a 98% match for <span className="font-semibold">Senior UI/UX Designer</span> at Creative Hub.</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="flex gap-4">
                            <div className="relative">
                                <div className="size-12 rounded-2xl bg-green-100 flex items-center justify-center shrink-0 border border-green-200">
                                    <span className="material-symbols-outlined text-green-600">visibility</span>
                                </div>
                            </div>
                            <div className="flex-1 glass p-4 rounded-2xl bg-white/70">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm font-bold text-[#0f0d1b]">Application Viewed</p>
                                    <span className="text-[10px] text-[#524c9a]/60">09:15</span>
                                </div>
                                <p className="text-xs text-[#524c9a] leading-relaxed">Design Studio X has reviewed your application for <span className="font-semibold">Lead UX Designer</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-[#524c9a]/40 uppercase tracking-widest mb-4">Yesterday</h3>
                    <div className="space-y-4">
                         {/* Item 4 */}
                        <div className="flex gap-4">
                            <div className="relative">
                                <div className="size-12 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0 border border-orange-200">
                                    <span className="material-symbols-outlined text-orange-600">person_search</span>
                                </div>
                            </div>
                            <div className="flex-1 glass p-4 rounded-2xl bg-white/70">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm font-bold text-[#0f0d1b]">Profile Visited</p>
                                    <span className="text-[10px] text-[#524c9a]/60">18:40</span>
                                </div>
                                <p className="text-xs text-[#524c9a] leading-relaxed">A recruiter from <span className="font-semibold">Global Soft</span> viewed your profile twice today.</p>
                            </div>
                        </div>
                        {/* Item 5 */}
                        <div className="flex gap-4">
                            <div className="relative">
                                <div className="size-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                                     <span className="material-symbols-outlined text-blue-600">cloud_upload</span>
                                </div>
                            </div>
                            <div className="flex-1 glass p-4 rounded-2xl bg-white/70">
                                <div className="flex justify-between items-start mb-1">
                                    <p className="text-sm font-bold text-[#0f0d1b]">Resume Updated</p>
                                    <span className="text-[10px] text-[#524c9a]/60">Yesterday</span>
                                </div>
                                <p className="text-xs text-[#524c9a] leading-relaxed">Your professional resume has been successfully re-indexed for search.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityLogScreen;
