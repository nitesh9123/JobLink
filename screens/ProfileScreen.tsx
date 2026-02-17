import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-24">
             <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-md border-b border-white/40">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center size-10 rounded-full hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-slate-600">arrow_back_ios_new</span>
                </button>
                <h1 className="text-lg font-bold text-slate-800">Profile Settings</h1>
                <button onClick={() => navigate('/settings')} className="text-primary font-semibold text-sm">Settings</button>
            </header>

            <section className="px-6 py-8 flex flex-col items-center">
                 <div className="relative">
                    <div className="size-32 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary">
                        <div className="size-full rounded-full border-4 border-white overflow-hidden bg-cover bg-center bg-no-repeat shadow-inner" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJuWDNisHEld1R2Hd1icJr1IOBGGRRJ4VzHUUbgoctPme7s8Io2lArRU5hXB3eGyjpiV-rsjrevJsRvz1F4KPEvElzOOXgTj5NeJVW0iLv_9eEimqCjoAyV-J62bYR1mYeCgoJ57Xr_9rpVfafi42pBcBfj-kZhOEE6WJy2xe8vEplKmBiu-nDQuZU0uic3X7td9DI_KuMaXWeSrJlIit9Vdt-L_vnHOroFa92BuHV4lceENzLqPFN7lx-rcfcCbOXZ_1wrSVEP8YQ')" }}>
                        </div>
                    </div>
                    <button className="absolute bottom-1 right-1 size-9 bg-white text-primary rounded-full flex items-center justify-center border border-white shadow-xl">
                        <span className="material-symbols-outlined text-xl">photo_camera</span>
                    </button>
                </div>
                <div className="mt-4 text-center">
                    <h2 className="text-2xl font-bold text-slate-900">Jordan Sterling</h2>
                    <p className="text-slate-500 text-sm font-medium mt-1">jordan.sterling@design.co</p>
                </div>
                 <button className="mt-6 flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold text-sm shadow-sm hover:shadow-md transition-all">
                    <span className="material-symbols-outlined text-lg">visibility</span>
                    Preview Public Profile
                </button>
            </section>

             <section className="px-6 space-y-4">
                <div className="flex items-center justify-between px-2">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Personal Information</h3>
                    <button className="text-primary text-xs font-bold">Edit</button>
                </div>
                <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-5 space-y-5">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">person</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-slate-400 font-medium">Full Name</p>
                            <p className="text-[15px] font-semibold text-slate-800">Jordan Sterling</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                        <div className="size-10 rounded-xl bg-purple-100 flex items-center justify-center text-secondary">
                             <span className="material-symbols-outlined">work_outline</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-slate-400 font-medium">Role</p>
                            <p className="text-[15px] font-semibold text-slate-800">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                        <div className="size-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                             <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-slate-400 font-medium">Location</p>
                            <p className="text-[15px] font-semibold text-slate-800">New York, NY</p>
                        </div>
                    </div>
                </div>
            </section>

             <section className="px-6 mt-8 space-y-4">
                 <div className="flex items-center justify-between px-2">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Work Experience</h3>
                    <button className="size-7 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-xl">add</span>
                    </button>
                </div>
                <div className="space-y-3">
                    <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-4 flex gap-4">
                        <div className="size-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-slate-400">domain</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <h4 className="font-bold text-slate-800">TechFlow Inc.</h4>
                                <span className="material-symbols-outlined text-slate-300 text-lg">edit</span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">Senior UI/UX Designer</p>
                            <p className="text-[10px] text-primary font-bold mt-2 bg-primary/5 w-fit px-2 py-0.5 rounded-full">Jan 2021 — Present</p>
                        </div>
                    </div>
                     <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm rounded-2xl p-4 flex gap-4">
                         <div className="size-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-slate-400">domain</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <h4 className="font-bold text-slate-800">Studio Pixel</h4>
                                <span className="material-symbols-outlined text-slate-300 text-lg">edit</span>
                            </div>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">Junior Product Designer</p>
                            <p className="text-[10px] text-slate-400 font-bold mt-2 bg-slate-50 w-fit px-2 py-0.5 rounded-full">Jun 2018 — Dec 2020</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileScreen;
