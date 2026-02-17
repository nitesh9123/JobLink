import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-white">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e00ff] via-[#7d00ff] to-[#ff00c8] opacity-90"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[40%] bg-blue-400 rounded-full blur-[100px] opacity-40"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-500 rounded-full blur-[120px] opacity-40"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-8 pt-12">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white">
                    <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                </button>
                <span className="text-white/40 font-bold tracking-[0.2em] text-[10px] uppercase">Career Elite</span>
                <div className="w-10"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 px-6 flex flex-col justify-center max-w-md mx-auto w-full">
                <div className="mb-10 text-center">
                    <h1 className="text-white text-5xl font-extrabold tracking-tight mb-3 leading-tight">
                        Welcome <span className="block opacity-90">Back</span>
                    </h1>
                    <p className="text-white/70 text-base font-medium">Elevate your career journey today</p>
                </div>

                <div className="glass-card rounded-[2.5rem] p-8 space-y-8 bg-white/20 border-white/30 shadow-2xl">
                    <div className="flex bg-white/20 p-1 rounded-2xl backdrop-blur-sm">
                        <button className="flex-1 py-3 text-sm font-bold rounded-xl bg-white text-primary shadow-sm transition-all">Sign In</button>
                        <button className="flex-1 py-3 text-sm font-semibold text-white/70 hover:text-white transition-all">Register</button>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
                        <div className="space-y-4">
                            <div className="relative flex items-center bg-white/40 rounded-2xl border border-white/40 px-4 py-4 group transition-all focus-within:bg-white focus-within:shadow-lg">
                                <span className="material-symbols-outlined text-white/70 group-focus-within:text-primary transition-colors mr-3">mail</span>
                                <div className="flex-1">
                                    <input 
                                        className="w-full bg-transparent border-none p-0 text-gray-900 placeholder:text-white/60 focus:ring-0 text-base font-medium group-focus-within:placeholder:text-gray-400" 
                                        type="email" 
                                        placeholder="Email Address" 
                                        defaultValue="jordan@design.co"
                                    />
                                </div>
                            </div>
                            <div className="relative flex items-center bg-white/40 rounded-2xl border border-white/40 px-4 py-4 group transition-all focus-within:bg-white focus-within:shadow-lg">
                                <span className="material-symbols-outlined text-white/70 group-focus-within:text-primary transition-colors mr-3">lock</span>
                                <div className="flex-1">
                                    <input 
                                        className="w-full bg-transparent border-none p-0 text-gray-900 placeholder:text-white/60 focus:ring-0 text-base font-medium group-focus-within:placeholder:text-gray-400" 
                                        type="password" 
                                        placeholder="Password"
                                        defaultValue="password"
                                    />
                                </div>
                                <button type="button" className="text-white/70 group-focus-within:text-gray-400">
                                    <span className="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button type="button" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Forgot password?</button>
                        </div>

                        <button 
                            type="submit"
                            className="group relative w-full overflow-hidden bg-primary text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/30 transition-all hover:shadow-primary/50 active:scale-[0.98]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Sign In
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                    </form>
                </div>

                <div className="mt-10 text-center">
                    <p className="text-white/60 text-sm font-medium">
                        New to the platform? 
                        <button className="text-white font-bold underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all ml-1">Create Account</button>
                    </p>
                </div>
            </div>

            <div className="relative z-10 px-8 pb-8 mt-auto">
                <div className="flex justify-center space-x-6">
                    <button className="text-[10px] font-bold text-white/30 uppercase tracking-widest hover:text-white/60 transition-colors">Support</button>
                    <button className="text-[10px] font-bold text-white/30 uppercase tracking-widest hover:text-white/60 transition-colors">Privacy</button>
                    <button className="text-[10px] font-bold text-white/30 uppercase tracking-widest hover:text-white/60 transition-colors">Terms</button>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
