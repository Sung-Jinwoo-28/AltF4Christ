import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, Upload, Search, User, Zap, Menu, X, BookOpen, Sparkles } from 'lucide-react';

export default function Navbar() {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleSignOut = async () => {
        await signOut();
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 inset-x-0 bg-pitch-black/70 backdrop-blur-2xl border-b border-white/5 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="size-10 rounded-full p-[1.5px] bg-gradient-to-tr from-electric-blue via-neon-violet to-acid-green group-hover:animate-spin-slow transition-all duration-500 group-hover:shadow-lg group-hover:shadow-electric-blue/20">
                                    <div className="size-full rounded-full bg-pitch-black flex items-center justify-center">
                                        <Zap className="h-5 w-5 text-electric-blue fill-current group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-0.5 -right-0.5 size-2.5 bg-acid-green rounded-full border-2 border-pitch-black animate-pulse"></div>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold font-display tracking-tight text-white leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-electric-blue group-hover:to-neon-violet transition-all">CampusResources</h1>
                                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                    <span className="text-electric-blue">●</span> Online
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>

                    {/* Navigation Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        {user ? (
                            <>
                                <div className="flex items-center gap-1">
                                    <Link to="/resources" className={`relative px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 ${isActive('/resources')
                                        ? 'text-electric-blue bg-electric-blue/10'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}>
                                        <Search className="h-4 w-4" />
                                        Browse
                                        {isActive('/resources') && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-electric-blue rounded-full"></span>}
                                    </Link>
                                    <Link to="/upload" className="group px-5 py-2.5 bg-electric-blue hover:bg-electric-blue/90 text-white rounded-xl flex items-center gap-2 transition-all neon-shadow-blue hover:scale-105 active:scale-95">
                                        <Upload className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                                        <span className="text-xs font-bold font-display uppercase tracking-wider">Upload</span>
                                    </Link>
                                </div>

                                {/* User Profile */}
                                <div className="flex items-center gap-4 pl-6 border-l border-white/5">
                                    <Link to="/profile" className="flex items-center gap-4 group">
                                        <div className="text-right hidden sm:block">
                                            <p className="text-sm font-bold text-white font-display group-hover:text-electric-blue transition-colors">{user.name || 'Student'}</p>
                                            <p className="text-[10px] font-bold text-acid-green uppercase tracking-wider flex items-center justify-end gap-1">
                                                <Sparkles className="h-3 w-3" />
                                                {user.points || 0} PTS
                                            </p>
                                        </div>
                                        <div className="size-10 rounded-full bg-gradient-to-tr from-electric-blue/20 to-neon-violet/20 border border-white/10 flex items-center justify-center text-electric-blue group-hover:border-electric-blue/50 group-hover:scale-110 transition-all duration-300">
                                            <User className="h-5 w-5" />
                                        </div>
                                    </Link>
                                    <button
                                        onClick={handleSignOut}
                                        className="p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all"
                                        title="Sign Out"
                                    >
                                        <LogOut className="h-5 w-5" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link to="/login" className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors px-4 py-2 rounded-xl hover:bg-white/5">
                                    Login
                                </Link>
                                <Link to="/register" className="group bg-gradient-to-r from-electric-blue to-neon-violet p-[1px] rounded-xl transition-all hover:shadow-lg hover:shadow-electric-blue/20">
                                    <span className="block bg-pitch-black hover:bg-pitch-black/80 px-5 py-2 rounded-[11px] text-xs font-bold font-display uppercase tracking-wider text-white transition-colors">
                                        Register
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-white/5 bg-pitch-black/95 backdrop-blur-2xl animate-slide-down">
                    <div className="px-4 py-4 space-y-2">
                        {user ? (
                            <>
                                <Link to="/resources" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                                    <Search className="h-5 w-5" /> Browse Resources
                                </Link>
                                <Link to="/upload" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                                    <Upload className="h-5 w-5" /> Upload Resource
                                </Link>
                                <Link to="/profile" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                                    <User className="h-5 w-5" /> Profile
                                </Link>
                                <button onClick={() => { handleSignOut(); setMobileOpen(false); }} className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all">
                                    <LogOut className="h-5 w-5" /> Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all">
                                    Login
                                </Link>
                                <Link to="/register" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-white bg-electric-blue/10 hover:bg-electric-blue/20 transition-all text-center font-bold">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
