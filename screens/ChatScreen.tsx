import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen flex-col bg-background-light overflow-hidden">
             <header className="bg-gradient-to-br from-primary to-secondary px-6 pt-12 pb-6 text-white shrink-0 shadow-lg relative z-20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button onClick={() => navigate(-1)} className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                            <span className="material-symbols-outlined text-white block">arrow_back_ios_new</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img className="size-10 rounded-full border-2 border-white/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoHqeeXjdsIX0OKsuDFEUetlhduR9CU53jf0dyzyzGUfa3G4P1gQUN3Hiqbcim7usSORG-hAFIwBUzLFXaDOkrQZf93HP1fv74PeuFSKsTDk_dfMZCwIyI77NCacRwcDFexuWIO3YJY80ujvPiVC7ngsOm9seemPrqiLkku1KqCcgXTA4gAokL01NWklRgcfkihxIUufWnTqUsnL-5cFsWXIsiTkVDG3t2A0tWpwtLLlqGIzvL0_lnGiIMxr_tqWIkvem8d1U7_cmJ" alt="Recruiter" />
                                <div className="absolute bottom-0 right-0 size-3 bg-green-400 border-2 border-primary rounded-full"></div>
                            </div>
                            <div>
                                <h2 className="font-bold text-base leading-none">Sarah Jenkins</h2>
                                <p className="text-[10px] text-white/70 mt-1 font-medium tracking-wide">Senior Recruiter • TechCorp</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-white/80"><span className="material-symbols-outlined">videocam</span></button>
                        <button className="text-white/80"><span className="material-symbols-outlined">more_vert</span></button>
                    </div>
                </div>
            </header>

            <div className="flex-1 flex flex-col min-h-0 relative bg-background-light">
                 {/* Stories / Active Chats */}
                <div className="bg-white/40 backdrop-blur-sm border-b border-white px-6 py-4 overflow-x-auto flex gap-6 no-scrollbar shrink-0">
                    <div className="flex flex-col items-center gap-1.5 opacity-100">
                        <div className="size-14 rounded-full border-2 border-primary p-0.5 relative">
                            <img className="size-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoHqeeXjdsIX0OKsuDFEUetlhduR9CU53jf0dyzyzGUfa3G4P1gQUN3Hiqbcim7usSORG-hAFIwBUzLFXaDOkrQZf93HP1fv74PeuFSKsTDk_dfMZCwIyI77NCacRwcDFexuWIO3YJY80ujvPiVC7ngsOm9seemPrqiLkku1KqCcgXTA4gAokL01NWklRgcfkihxIUufWnTqUsnL-5cFsWXIsiTkVDG3t2A0tWpwtLLlqGIzvL0_lnGiIMxr_tqWIkvem8d1U7_cmJ" alt="Active" />
                        </div>
                        <span className="text-[10px] font-bold text-primary">Sarah</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5 opacity-50">
                         <div className="size-14 rounded-full border border-slate-200 p-0.5">
                            <img className="size-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRJyXeO8kFMs_HSM-olNo5CaDJPg6XNyRQGZQ5SfcjsGu9UdTsjYwEb353Bs4MQ7qHKYWUQ5Cufw4uPBaElO2n350Q03QH1GyRDIbmwjz9SILLImSaThZjO_7-zCIMjJ_TwbcQGxDa1UY-cqVC13qulMo5-Ldi1CHr16J_qdn6-tR9StJbJBmkjFWDZ8p4CHdLscLKof5p-MFxAhrqpMphKHXA_IX1ihfMZNlbxaMp5dXIKYOZkvWzm5LCzUC2UYFQ6KBGymgBTx5O" alt="Marcus" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-500">Marcus</span>
                    </div>
                    {/* More avatars... */}
                </div>

                {/* Messages */}
                <main className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                    <div className="flex justify-center">
                        <span className="bg-slate-200/50 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider">Yesterday</span>
                    </div>

                    <div className="flex items-end gap-3 max-w-[85%]">
                        <img className="size-8 rounded-full shadow-sm shrink-0 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoHqeeXjdsIX0OKsuDFEUetlhduR9CU53jf0dyzyzGUfa3G4P1gQUN3Hiqbcim7usSORG-hAFIwBUzLFXaDOkrQZf93HP1fv74PeuFSKsTDk_dfMZCwIyI77NCacRwcDFexuWIO3YJY80ujvPiVC7ngsOm9seemPrqiLkku1KqCcgXTA4gAokL01NWklRgcfkihxIUufWnTqUsnL-5cFsWXIsiTkVDG3t2A0tWpwtLLlqGIzvL0_lnGiIMxr_tqWIkvem8d1U7_cmJ" alt="Recruiter" />
                        <div>
                            <div className="glass p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-slate-700 leading-relaxed bg-white/60">
                                Hi there! I saw your portfolio on Dribbble and was very impressed with your UI work. We're looking for a Senior Product Designer at TechCorp.
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 ml-1">11:24 AM</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 ml-auto max-w-[85%]">
                         <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none shadow-lg shadow-primary/20 text-sm leading-relaxed">
                            Hi Sarah! Thanks for reaching out. I've been following TechCorp's growth for a while now. I'd love to learn more about the role.
                        </div>
                        <div className="flex items-center gap-1 mt-1 mr-1">
                            <span className="text-[10px] text-slate-400">11:30 AM</span>
                            <span className="material-symbols-outlined text-primary text-xs">done_all</span>
                        </div>
                    </div>

                     <div className="flex items-end gap-3 max-w-[85%]">
                        <img className="size-8 rounded-full shadow-sm shrink-0 mb-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoHqeeXjdsIX0OKsuDFEUetlhduR9CU53jf0dyzyzGUfa3G4P1gQUN3Hiqbcim7usSORG-hAFIwBUzLFXaDOkrQZf93HP1fv74PeuFSKsTDk_dfMZCwIyI77NCacRwcDFexuWIO3YJY80ujvPiVC7ngsOm9seemPrqiLkku1KqCcgXTA4gAokL01NWklRgcfkihxIUufWnTqUsnL-5cFsWXIsiTkVDG3t2A0tWpwtLLlqGIzvL0_lnGiIMxr_tqWIkvem8d1U7_cmJ" alt="Recruiter" />
                        <div>
                            <div className="glass p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-slate-700 leading-relaxed bg-white/60">
                                That's great! Are you available for a quick introductory call tomorrow around 2 PM EST?
                            </div>
                            <span className="text-[10px] text-slate-400 mt-1 ml-1">11:32 AM</span>
                        </div>
                    </div>

                    <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
                        <button className="shrink-0 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-semibold shadow-sm">Yes, that works!</button>
                        <button className="shrink-0 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-semibold shadow-sm">Can we do 3 PM?</button>
                         <button className="shrink-0 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-semibold shadow-sm">Send resume</button>
                    </div>
                </main>

                <div className="p-6 bg-background-light border-t border-slate-200/60 pb-10">
                    <div className="glass rounded-2xl p-2 flex items-center gap-2 shadow-xl shadow-slate-200/50 bg-white/60">
                        <button className="size-10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">add_circle</span>
                        </button>
                        <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400" type="text" placeholder="Type your message..." />
                        <button className="bg-primary size-10 flex items-center justify-center rounded-xl text-white shadow-lg shadow-primary/30 active:scale-95 transition-transform">
                             <span className="material-symbols-outlined text-[20px]">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
