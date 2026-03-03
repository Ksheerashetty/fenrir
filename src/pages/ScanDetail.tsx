import { useNavigate, useParams } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import { LayoutDashboard, Shield, Activity } from 'lucide-react';

const ScanDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="flex h-screen bg-[#F8FAFC] dark:bg-[#0B0E14] font-sans text-zinc-900 dark:text-zinc-100 overflow-hidden text-left transition-colors">
            <aside className="w-64 border-r border-zinc-100 dark:border-white/5 bg-white dark:bg-[#0B0E14] flex flex-col justify-between py-6 shrink-0">
                <div>
                    <div className="px-6 flex items-center gap-2 mb-10"><div className="w-6 h-6 rounded-full bg-[#14A098] flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-white" /></div><span className="font-bold text-xl text-[#14A098]">aps</span></div>
                    <nav className="space-y-1 px-3">
                        <div onClick={() => navigate('/dashboard')} className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-zinc-500 hover:bg-zinc-50 dark:hover:bg-white/5"><LayoutDashboard size={20} /> Dashboard</div>
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#E7F6F5] dark:bg-[#14A098]/10 text-[#14A098] font-medium cursor-pointer"><Shield size={20} /> Scans</div>
                        <ThemeToggle />
                    </nav>
                </div>
            </aside>

            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white dark:bg-[#0B0E14] border-b border-zinc-100 dark:border-white/5 flex items-center px-8 shrink-0">
                    <span className="text-zinc-400 text-sm">Scan / <span className="text-[#14A098] font-medium">ID: {id}</span></span>
                </header>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="bg-white dark:bg-[#11141B] rounded-3xl border border-zinc-100 dark:border-white/10 p-8 shadow-sm flex items-center gap-12 transition-colors">
                        <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-zinc-100 dark:text-white/5" />
                                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray="364.4" strokeDashoffset="364.4" className="text-[#14A098]" />
                            </svg>
                            <div className="absolute flex flex-col items-center"><span className="text-2xl font-black italic dark:text-white">0%</span><span className="text-[10px] text-zinc-400 font-bold uppercase">In Progress</span></div>
                        </div>
                        <div className="flex-1 flex justify-between px-4">
                            {['Spidering', 'Mapping', 'Testing', 'Validating', 'Reporting'].map((label, i) => (
                                <div key={label} className="flex flex-col items-center gap-2">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${i === 0 ? 'bg-[#14A098] border-[#14A098] text-white' : 'border-zinc-100 text-zinc-300'}`}><Activity size={18} /></div>
                                    <span className={`text-[10px] font-bold uppercase ${i === 0 ? 'text-zinc-800 dark:text-white' : 'text-zinc-300'}`}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#11141B] rounded-3xl border border-zinc-100 dark:border-white/10 shadow-sm overflow-hidden flex flex-col h-[500px] transition-colors">
                        <div className="px-6 py-4 border-b border-zinc-50 dark:border-white/5 bg-zinc-50/30 dark:bg-white/[0.02] flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#14A098] animate-pulse" />
                            <span className="text-[#14A098] text-[11px] font-bold uppercase tracking-widest">Live Scan Console</span>
                        </div>
                        <div className="flex-1 p-6 font-mono text-[13px] leading-relaxed overflow-y-auto dark:text-zinc-300">
                            <p><span className="text-zinc-300 dark:text-zinc-600">[09:00:00]</span> Systematic penetration test started on <span className="text-[#14A098]">helpdesk.democorp.com</span>. [cite: 54]</p>
                            <p><span className="text-zinc-300 dark:text-zinc-600">[09:06:00]</span> Found endpoint: <span className="bg-teal-50 dark:bg-[#14A098]/10 text-[#14A098] px-1 rounded">X-UserId: 10032</span>. [cite: 65]</p>
                            <p className="font-bold text-rose-500">IDOR vulnerability identified. [cite: 66]</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ScanDetail;