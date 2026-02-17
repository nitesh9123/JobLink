import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-24">
            <header className="sticky top-0 z-50 glass px-6 py-4 flex items-center bg-white/60">
                <button onClick={() => navigate(-1)} className="mr-4 text-slate-900">
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <h1 className="text-xl font-bold tracking-tight text-[#0f0d1b]">App Settings</h1>
            </header>

            <div className="px-6 py-6 space-y-8">
                <section>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-1">Notifications</h2>
                    <div className="glass rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-white/60">
                        <div className="flex items-center justify-between p-4 border-b border-white/40">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-800">Job Alerts</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-800">Messages</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-1">Account & Security</h2>
                    <div className="glass rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-white/60">
                        <div className="flex items-center justify-between p-4 border-b border-white/40 active:bg-white/40 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-[20px]">lock</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-800">Change Password</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                        </div>
                        <div className="flex items-center justify-between p-4 border-b border-white/40 active:bg-white/40 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined text-[20px]">shield</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-800">Two-Factor Auth</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                        </div>
                        <div className="flex items-center justify-between p-4 active:bg-white/40 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-slate-800">Email Address</span>
                                    <span className="text-[10px] text-slate-400">jordan@design.co</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-1">App Preferences</h2>
                    <div className="glass rounded-2xl overflow-hidden shadow-sm border border-white/60 bg-white/60">
                        <div className="flex items-center justify-between p-4 border-b border-white/40 active:bg-white/40 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-[20px]">translate</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-slate-800">Language</span>
                                    <span className="text-[10px] text-slate-400">English (US)</span>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                        </div>
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <div className="size-9 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                                    <span className="material-symbols-outlined text-[20px]">dark_mode</span>
                                </div>
                                <span className="text-sm font-semibold text-slate-800">Dark Mode</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                        </div>
                    </div>
                </section>

                <div className="pt-4">
                    <button 
                        onClick={() => navigate('/login')}
                        className="w-full bg-white border border-red-100 text-red-500 py-4 rounded-2xl font-bold text-sm shadow-sm active:scale-[0.98] transition-all hover:bg-red-50"
                    >
                        Sign Out
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-6 font-medium">App Version 2.4.0 (Build 42)</p>
                </div>
            </div>
        </div>
    );
};

export default SettingsScreen;
