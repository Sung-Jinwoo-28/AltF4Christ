import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AlertCircle, User, Award, BookOpen, Calendar, Zap, Lock, Eye, EyeOff, ArrowRight, Loader2, Mail, Building } from 'lucide-react';

export default function Register() {
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        branch: '',
        semester: '',
        year: '',
        college: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            const { error } = await signUp(formData.email, formData.password, {
                name: formData.name,
                branch: formData.branch,
                semester: formData.semester,
                year: formData.year,
                college: formData.college
            });
            if (error) throw error;
            navigate('/');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const canProceedStep1 = formData.name && formData.branch && formData.semester;
    const canProceedStep2 = formData.college && formData.year;

    return (
        <div className="min-h-screen flex items-center justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-30"></div>
            <div className="absolute top-[20%] right-[10%] size-[500px] bg-electric-blue/15 rounded-full blur-[150px] animate-float pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-[10%] size-[500px] bg-acid-green/15 rounded-full blur-[150px] animate-float-delayed pointer-events-none"></div>

            <div className="max-w-md w-full relative z-10 animate-fade-in-up">
                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center mb-6">
                        <div className="size-20 rounded-full p-[2px] bg-gradient-to-tr from-acid-green to-electric-blue animate-spin-slow">
                            <div className="size-full rounded-full bg-pitch-black flex items-center justify-center">
                                <Zap className="h-10 w-10 text-acid-green fill-current" />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white font-display mb-2">Initialize Identity</h2>
                    <p className="text-sm text-slate-500 font-medium">Create a secure node profile</p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center gap-2 mb-8 px-4">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex-1 flex items-center gap-2">
                            <div className={`flex-1 h-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-acid-green' : 'bg-white/10'
                                }`}></div>
                        </div>
                    ))}
                </div>

                {/* Form */}
                <div className="glass-card p-8 neon-shadow-green">
                    {error && (
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6 animate-scale-in">
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Step 1: Personal Info */}
                        {step === 1 && (
                            <div className="space-y-4 animate-fade-in-up">
                                <h3 className="text-xs font-bold text-acid-green uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="size-5 rounded-full bg-acid-green/10 flex items-center justify-center text-acid-green text-[10px]">1</span>
                                    Personal Details
                                </h3>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                            <User className="h-5 w-5" />
                                        </span>
                                        <input name="name" type="text" required className="input-field pl-10" placeholder="John Doe" value={formData.name} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="group">
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Branch</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                                <Award className="h-5 w-5" />
                                            </span>
                                            <input name="branch" type="text" required className="input-field pl-10" placeholder="CSE" value={formData.branch} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Semester</label>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                                <BookOpen className="h-5 w-5" />
                                            </span>
                                            <input name="semester" type="text" required className="input-field pl-10" placeholder="4" value={formData.semester} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    disabled={!canProceedStep1}
                                    onClick={() => setStep(2)}
                                    className="group w-full flex justify-center items-center gap-2 py-3.5 px-4 bg-acid-green hover:bg-acid-green/90 text-pitch-black rounded-xl text-sm font-bold font-display uppercase tracking-wider transition-all neon-shadow-green hover:scale-[1.02] active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
                                >
                                    Continue
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}

                        {/* Step 2: Academic Info */}
                        {step === 2 && (
                            <div className="space-y-4 animate-fade-in-up">
                                <h3 className="text-xs font-bold text-acid-green uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="size-5 rounded-full bg-acid-green/10 flex items-center justify-center text-acid-green text-[10px]">2</span>
                                    Academic Info
                                </h3>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">College / Institution</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                            <Building className="h-5 w-5" />
                                        </span>
                                        <input name="college" type="text" required className="input-field pl-10" placeholder="Christ University" value={formData.college} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Academic Year</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                            <Calendar className="h-5 w-5" />
                                        </span>
                                        <input name="year" type="text" required className="input-field pl-10" placeholder="2" value={formData.year} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-3.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-sm font-bold font-display uppercase tracking-wider transition-all active:scale-95">
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        disabled={!canProceedStep2}
                                        onClick={() => setStep(3)}
                                        className="group flex-1 flex justify-center items-center gap-2 py-3.5 px-4 bg-acid-green hover:bg-acid-green/90 text-pitch-black rounded-xl text-sm font-bold font-display uppercase tracking-wider transition-all neon-shadow-green hover:scale-[1.02] active:scale-95 disabled:opacity-30 disabled:hover:scale-100"
                                    >
                                        Continue
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Credentials */}
                        {step === 3 && (
                            <div className="space-y-4 animate-fade-in-up">
                                <h3 className="text-xs font-bold text-acid-green uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="size-5 rounded-full bg-acid-green/10 flex items-center justify-center text-acid-green text-[10px]">3</span>
                                    Credentials
                                </h3>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                            <Mail className="h-5 w-5" />
                                        </span>
                                        <input name="email" type="email" required className="input-field pl-10" placeholder="student@university.edu" value={formData.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Passkey</label>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                                            <Lock className="h-5 w-5" />
                                        </span>
                                        <input
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            className="input-field pl-10 pr-12"
                                            placeholder="••••••••"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button type="button" onClick={() => setStep(2)} className="flex-1 py-3.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-sm font-bold font-display uppercase tracking-wider transition-all active:scale-95">
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="group flex-[2] flex justify-center items-center gap-2 py-3.5 px-4 bg-acid-green hover:bg-acid-green/90 text-pitch-black rounded-xl text-sm font-bold font-display uppercase tracking-wider transition-all neon-shadow-green hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                                    >
                                        {loading ? (
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                        ) : (
                                            <>
                                                <Lock className="h-4 w-4" />
                                                Complete Registration
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <span className="text-sm text-slate-500 mr-1">Already a node?</span>
                        <Link to="/login" className="text-sm font-bold text-electric-blue hover:text-neon-violet transition-colors">
                            Reconnect →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
