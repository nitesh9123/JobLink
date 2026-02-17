import React from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import SearchScreen from './screens/SearchScreen';
import JobDetailsScreen from './screens/JobDetailsScreen';
import CompanyProfileScreen from './screens/CompanyProfileScreen';
import ApplicationStatusScreen from './screens/ApplicationStatusScreen';
import ChatScreen from './screens/ChatScreen';
import SavedJobsScreen from './screens/SavedJobsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ResumeScreen from './screens/ResumeScreen';
import ActivityLogScreen from './screens/ActivityLogScreen';
import SettingsScreen from './screens/SettingsScreen';
import AppliedJobsScreen from './screens/AppliedJobsScreen';

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const isActive = (path: string) => {
        if (path === '/') return currentPath === '/' || currentPath === '/dashboard';
        return currentPath.startsWith(path);
    };

    if (currentPath === '/login') return null;

    return (
        <nav className="absolute bottom-0 inset-x-0 h-20 bg-white/80 backdrop-blur-xl border-t border-[#d1cfe7] px-6 flex items-center justify-between pb-4 z-50 rounded-b-[30px]">
            <button 
                onClick={() => navigate('/dashboard')}
                className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-primary' : 'text-text-muted/60'}`}
            >
                <span className={`material-symbols-outlined ${isActive('/') ? 'font-variation-fill' : ''}`}>home</span>
                <span className={`text-[10px] ${isActive('/') ? 'font-bold' : 'font-medium'}`}>Home</span>
            </button>

            <button 
                onClick={() => navigate('/search')}
                className={`flex flex-col items-center gap-1 ${isActive('/search') ? 'text-primary' : 'text-text-muted/60'}`}
            >
                <span className={`material-symbols-outlined ${isActive('/search') ? 'font-variation-fill' : ''}`}>search</span>
                <span className={`text-[10px] ${isActive('/search') ? 'font-bold' : 'font-medium'}`}>Search</span>
            </button>

            <div className="flex flex-col items-center justify-center -translate-y-6">
                <button className="size-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 active:scale-95 transition-transform border-4 border-[#f6f6f8]">
                    <span className="material-symbols-outlined text-3xl">add</span>
                </button>
            </div>

            <button 
                onClick={() => navigate('/activity')}
                className={`flex flex-col items-center gap-1 ${isActive('/activity') ? 'text-primary' : 'text-text-muted/60'}`}
            >
                <span className={`material-symbols-outlined ${isActive('/activity') ? 'font-variation-fill' : ''}`}>history</span>
                <span className={`text-[10px] ${isActive('/activity') ? 'font-bold' : 'font-medium'}`}>Activity</span>
            </button>

            <button 
                onClick={() => navigate('/profile')}
                className={`flex flex-col items-center gap-1 ${isActive('/profile') ? 'text-primary' : 'text-text-muted/60'}`}
            >
                <span className={`material-symbols-outlined ${isActive('/profile') ? 'font-variation-fill' : ''}`}>person</span>
                <span className={`text-[10px] ${isActive('/profile') ? 'font-bold' : 'font-medium'}`}>Profile</span>
            </button>
        </nav>
    );
};

const MobileContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center min-h-screen bg-[#e0e2eb] font-sans">
            <div className="w-full max-w-[430px] bg-mesh min-h-screen shadow-2xl relative overflow-hidden flex flex-col sm:rounded-[30px] sm:my-8 sm:h-[calc(100vh-64px)] sm:border-[8px] sm:border-white">
                {children}
                <BottomNav />
                {/* iOS Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full z-[60]"></div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <HashRouter>
            <MobileContainer>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/" element={<DashboardScreen />} />
                    <Route path="/dashboard" element={<DashboardScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/jobs/:id" element={<JobDetailsScreen />} />
                    <Route path="/company/:id" element={<CompanyProfileScreen />} />
                    <Route path="/status/:id" element={<ApplicationStatusScreen />} />
                    <Route path="/chat" element={<ChatScreen />} />
                    <Route path="/saved" element={<SavedJobsScreen />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/resume" element={<ResumeScreen />} />
                    <Route path="/activity" element={<ActivityLogScreen />} />
                    <Route path="/settings" element={<SettingsScreen />} />
                    <Route path="/applied" element={<AppliedJobsScreen />} />
                </Routes>
            </MobileContainer>
        </HashRouter>
    );
};

export default App;
