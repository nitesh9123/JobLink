import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobDetailsScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-28 bg-white">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-100">
                <button onClick={() => navigate(-1)} className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <span className="material-symbols-outlined text-slate-700">arrow_back_ios_new</span>
                </button>
                <div className="flex gap-2">
                    <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 transition-colors">
                        <span className="material-symbols-outlined text-slate-700">share</span>
                    </button>
                    <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-100 transition-colors text-red-500">
                        <span className="material-symbols-outlined font-variation-fill">favorite</span>
                    </button>
                </div>
            </header>

            {/* Hero */}
            <section className="px-6 pt-6 pb-4 flex flex-col items-center">
                <div 
                    onClick={() => navigate('/company/techflow')}
                    className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-6 overflow-hidden border border-slate-100 cursor-pointer active:scale-95 transition-transform"
                >
                    <img className="w-16 h-16 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe665R1KUOOtZT9NdDPP-VHehjNtcAwA2OcD64HlttXOpM6v5Y1axVdL6U0hUPRMsF0vbkL5gDuWoJ2Rs2epEPwdORttaHo_CqrIufNh5gW0mIrjQ3JW86R7FCb2wFB5MzCfnKP-XKl7i7LEltzCYVWN4nglf4bQfrrbvpehEgYbb-20cIQfgjKw0Z4PT50uKddHR1UKssNM0YrG82AMH3k3togQQnNQJ-xQ5r4YqfpL0DtnmKyTnJLYJgkFNKBCH-kSjA2OQIOv36" alt="TechFlow" />
                </div>
                <h1 className="text-2xl font-bold text-center mb-1 leading-tight text-text-dark">Senior Product Designer</h1>
                <div 
                    onClick={() => navigate('/company/techflow')}
                    className="flex items-center gap-1 mb-2 text-primary font-semibold cursor-pointer"
                >
                    <span>TechFlow Inc.</span>
                    <span className="material-symbols-outlined text-sm">verified</span>
                </div>
                <p className="text-text-muted text-sm mb-6 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">location_on</span> San Francisco, CA (Remote Friendly)
                </p>

                {/* Chips */}
                <div className="flex flex-wrap justify-center gap-2">
                    <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Full-Time</div>
                    <div className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">Senior Level</div>
                    <div className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">$140k - $190k</div>
                </div>
            </section>

            {/* Content */}
            <div className="px-6 space-y-8 mt-4">
                <section>
                    <h2 className="text-lg font-bold mb-3 flex items-center gap-2 text-text-dark">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Job Description
                    </h2>
                    <div className="text-slate-600 leading-relaxed text-sm">
                        <p className="mb-3">We are looking for a visionary Senior Product Designer to join our team and help shape the future of our digital products. You will work closely with engineering and product management to deliver high-quality designs that delight millions of users.</p>
                        <p>In this role, you will be responsible for leading the design lifecycle from research to high-fidelity prototyping and hand-off. You'll join a fast-paced environment where innovation is celebrated.</p>
                    </div>
                    <button className="mt-3 text-primary font-semibold text-sm">Read more</button>
                </section>

                <section className="p-5 rounded-2xl glass-card bg-white border border-slate-200 shadow-sm">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-text-dark">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Requirements
                    </h2>
                    <ul className="space-y-4">
                        {[
                            "5+ years of experience in product design for web and mobile platforms.",
                            "Proficiency in Figma, Prototyping, and Design Systems.",
                            "Strong portfolio showcasing end-to-end design process and business impact.",
                            "Experience working in an Agile/Scrum environment."
                        ].map((req, i) => (
                            <li key={i} className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                <span className="text-sm text-slate-700">{req}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-text-dark">
                        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                        Benefits & Perks
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { icon: "health_and_safety", label: "Full Health" },
                            { icon: "flight_takeoff", label: "Unlimited PTO" },
                            { icon: "savings", label: "401k Match" },
                            { icon: "laptop_mac", label: "Work Stipend" },
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                                <span className="material-symbols-outlined text-primary">{benefit.icon}</span>
                                <span className="text-xs font-medium text-slate-700">{benefit.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 text-text-dark">
                            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                            Location
                        </h2>
                        <span className="text-primary text-xs font-semibold">View map</span>
                    </div>
                    <div className="w-full h-32 rounded-xl bg-slate-200 overflow-hidden relative border border-slate-100">
                        <div 
                            className="absolute inset-0 bg-cover bg-center" 
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAadLpIkGf1gU0McbBWyBNAIN7eiSPx9Kv5ub9t-Sv4rP6iD1eqi_8m-F8SLx_c4idCjd4JechDADlxHFUihrQmY_TtKlgQ7mO64FuYWp9YZIHfSx8SFaIUAM3g_PzMa2rob-fRo1ZYi4jaYfNWgi_Lcptjv_hKAtFP0i7jeWlDpQ0cj5kRuGDLBtyMrgH9oR5Bd7NGsOKmpvw4WwLmrmIsRlEJBFLrM2crNWUBpBYwk4kXrSukX3dYbkAJuCAVEWGqPTM6NhMFgVC3')" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-primary/20 shadow-xl">
                                <span className="material-symbols-outlined text-sm">location_on</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Bottom Action */}
            <footer className="fixed bottom-0 inset-x-0 max-w-[430px] mx-auto bg-white/90 backdrop-blur-xl border-t border-slate-200 p-6 z-50">
                <button 
                    onClick={() => navigate('/status/1')}
                    className="w-full bg-primary text-white h-14 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/40 active:scale-[0.98] transition-all"
                >
                    Apply Now
                </button>
            </footer>
        </div>
    );
};

export default JobDetailsScreen;
