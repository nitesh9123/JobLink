import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyProfileScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex-1 overflow-y-auto pb-24 bg-background-light">
             {/* Header Image */}
             <div className="relative h-[240px] w-full">
                <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoHqeeXjdsIX0OKsuDFEUetlhduR9CU53jf0dyzyzGUfa3G4P1gQUN3Hiqbcim7usSORG-hAFIwBUzLFXaDOkrQZf93HP1fv74PeuFSKsTDk_dfMZCwIyI77NCacRwcDFexuWIO3YJY80ujvPiVC7ngsOm9seemPrqiLkku1KqCcgXTA4gAokL01NWklRgcfkihxIUufWnTqUsnL-5cFsWXIsiTkVDG3t2A0tWpwtLLlqGIzvL0_lnGiIMxr_tqWIkvem8d1U7_cmJ" alt="Office" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
                
                <button onClick={() => navigate(-1)} className="absolute top-12 left-6 glass size-10 rounded-full flex items-center justify-center text-slate-800">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="absolute top-12 right-6 glass size-10 rounded-full flex items-center justify-center text-slate-800">
                    <span className="material-symbols-outlined">share</span>
                </button>

                <div className="absolute -bottom-8 left-6">
                    <div className="size-20 rounded-2xl bg-white p-1 shadow-xl flex items-center justify-center border-4 border-white">
                        <img className="w-full h-full object-contain rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTytd21ppCaNrn0uvjuvXOOvJL-vIl6fXRkmfXwNlHr1e7mOzbVty6OyqXbAWxZvPTgU90ZYA2rv_TT_I32vRp6Z_zWahCrhTP7fMioeu5Vh-wOwZCoDQgKDoCEXWJE9b6AOCrG2zvRzbuoTLmARH3UtxxevP_aUfy13NEBXzcQ_AQfc02WgNw1hkRWGBBeq-BhB7ibMRMVFtWsvdF7d20-dBk0ngjlLsnJe7-iaQ6cmNVzfy-DDquqqRf3ebiMUYIL8E1X7fQ3hi7" alt="TechCorp Logo" />
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="px-6 pt-12 pb-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-text-dark">TechCorp Solutions</h1>
                        <p className="text-text-muted font-medium">Enterprise Software • San Francisco, CA</p>
                    </div>
                    <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20">Follow</button>
                </div>
                <div className="flex gap-4 mt-6">
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-primary/10 shadow-sm">
                        <span className="material-symbols-outlined text-sm text-primary">groups</span>
                        <span className="text-xs font-semibold text-slate-700">500-1000</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-primary/10 shadow-sm">
                        <span className="material-symbols-outlined text-sm text-yellow-500 font-variation-fill">star</span>
                        <span className="text-xs font-semibold text-slate-700">4.8 (1.2k)</span>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="px-6 border-b border-slate-200/60 overflow-x-auto flex gap-6 no-scrollbar">
                <button className="pb-3 border-b-2 border-primary text-primary font-bold text-sm whitespace-nowrap">About Us</button>
                <button className="pb-3 border-b-2 border-transparent text-text-muted font-medium text-sm whitespace-nowrap">Open Positions</button>
                <button className="pb-3 border-b-2 border-transparent text-text-muted font-medium text-sm whitespace-nowrap">Culture</button>
                <button className="pb-3 border-b-2 border-transparent text-text-muted font-medium text-sm whitespace-nowrap">Reviews</button>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-text-dark mb-3">About Us</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        TechCorp Solutions is a leading innovator in enterprise infrastructure, focusing on creating seamless experiences for Fortune 500 companies. Founded in 2012, we've grown from a small garage team to a global powerhouse.
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-text-dark mb-3">Our Culture</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                        <div className="shrink-0 w-48 h-32 rounded-xl overflow-hidden glass shadow-md">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRJyXeO8kFMs_HSM-olNo5CaDJPg6XNyRQGZQ5SfcjsGu9UdTsjYwEb353Bs4MQ7qHKYWUQ5Cufw4uPBaElO2n350Q03QH1GyRDIbmwjz9SILLImSaThZjO_7-zCIMjJ_TwbcQGxDa1UY-cqVC13qulMo5-Ldi1CHr16J_qdn6-tR9StJbJBmkjFWDZ8p4CHdLscLKof5p-MFxAhrqpMphKHXA_IX1ihfMZNlbxaMp5dXIKYOZkvWzm5LCzUC2UYFQ6KBGymgBTx5O" alt="Culture 1" />
                        </div>
                        <div className="shrink-0 w-48 h-32 rounded-xl overflow-hidden glass shadow-md">
                            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJpUiPyW6Vg9gmu3YIDA-72a08Rf4TOxuPHj9NX1QAQhiCrjV7Ix17SDizKcNjAEXogxo9a9o9RbQlVNZS73i_WzB-88lQU7yP77in0IOYbxF0zTLCh_ga9weFQ0aqSv_fJ3bBA6Lk913eQuKlxApiAFEDAtOQb6dOyu5ylpJqfNoKTyF4W3leoe3gE-XCs9MJvJJKIWnrof4ficbuepMZGbtxFBt0LvX6hnjucwjlkb-KwlgWlIPReUY2B5EsemdWNXOoBXmnGkh-" alt="Culture 2" />
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-text-dark mb-4">Benefits</h3>
                    <div className="grid grid-cols-2 gap-3">
                         <div className="glass p-3 rounded-xl flex items-center gap-3 bg-white/60">
                            <div className="bg-blue-100 size-8 rounded-lg flex items-center justify-center text-blue-600">
                                <span className="material-symbols-outlined text-lg">medical_services</span>
                            </div>
                            <span className="text-xs font-bold text-slate-700">Health Care</span>
                        </div>
                        <div className="glass p-3 rounded-xl flex items-center gap-3 bg-white/60">
                            <div className="bg-purple-100 size-8 rounded-lg flex items-center justify-center text-purple-600">
                                <span className="material-symbols-outlined text-lg">home_work</span>
                            </div>
                            <span className="text-xs font-bold text-slate-700">Remote Work</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-text-dark">Open Positions</h3>
                        <button onClick={() => navigate('/search')} className="text-primary text-xs font-bold">See All 42</button>
                    </div>
                    <div className="space-y-4">
                        <div className="glass rounded-2xl p-5 shadow-sm border border-white/60 bg-white/60">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-text-dark text-base font-bold leading-tight">Senior Product Designer</h3>
                                    <p className="text-text-muted text-xs font-medium mt-1">Design • Remote</p>
                                </div>
                                <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase">New</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-primary font-bold text-sm">$120k - $160k</p>
                                <button className="bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">Apply</button>
                            </div>
                        </div>
                         <div className="glass rounded-2xl p-5 shadow-sm border border-white/60 bg-white/60">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-text-dark text-base font-bold leading-tight">Infrastructure Engineer</h3>
                                    <p className="text-text-muted text-xs font-medium mt-1">Engineering • Hybrid</p>
                                </div>
                                <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded uppercase">Full-time</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-primary font-bold text-sm">$140k - $190k</p>
                                <button className="bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">Apply</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CompanyProfileScreen;
