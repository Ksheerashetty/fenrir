import { useNavigate } from 'react-router-dom';
import { mockScans } from '../mockData';
import ThemeToggle from '../ThemeToggle';
import {
    LayoutDashboard, Shield, ChevronRight, Ban, AlertTriangle, Info, SearchIcon
} from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen bg-white dark:bg-[#0B0E14] font-sans text-zinc-900 dark:text-zinc-100 overflow-hidden text-left transition-colors">
            <aside className="w-64 border-r border-zinc-100 dark:border-white/5 flex flex-col justify-between py-6 shrink-0">
                <div>
                    <div className="px-6 flex items-center gap-2 mb-10">
                        <div className="w-6 h-6 rounded-full bg-[#14A098] flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-white" /></div>
                        <span className="font-bold text-xl text-[#14A098]">aps</span>
                    </div>
                    <nav className="space-y-1 px-3">
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#E7F6F5] dark:bg-[#14A098]/10 text-[#14A098] font-medium cursor-pointer"><LayoutDashboard size={20} /> Dashboard</div>
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:bg-zinc-50 dark:hover:bg-white/5 cursor-pointer"><Shield size={20} /> Scans</div>
                        <ThemeToggle />
                    </nav>
                </div>
                <div className="px-3" onClick={() => navigate('/')}>
                    <div className="flex items-center gap-3 p-3 hover:bg-zinc-50 dark:hover:bg-white/5 rounded-xl cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-yellow-400 overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ksheera" alt="avatar" /></div>
                        <div className="flex-1 min-w-0"><p className="text-xs text-zinc-400 truncate">admin@edu.com</p><p className="text-sm font-bold truncate">Security Lead</p></div>
                        <ChevronRight size={16} className="text-zinc-400" />
                    </div>
                </div>
            </aside>

            <main className="flex-1 flex flex-col dark:bg-[#0B0E14] overflow-hidden">
                <header className="h-16 bg-white dark:bg-[#0B0E14] border-b border-zinc-100 dark:border-white/5 flex items-center px-8 shrink-0">
                    <span className="text-zinc-400 text-sm">Scan / <span className="text-[#14A098] font-medium">Dashboard</span></span>
                </header>

                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                    <div className="grid grid-cols-4 gap-6">
                        {[
                            { label: 'Critical Severity', count: 86, color: 'text-rose-600', bg: 'bg-rose-50', darkBg: 'dark:bg-rose-500/10', icon: Ban },
                            { label: 'High Severity', count: 16, color: 'text-orange-500', bg: 'bg-orange-50', darkBg: 'dark:bg-orange-500/10', icon: AlertTriangle },
                            { label: 'Medium Severity', count: 26, color: 'text-yellow-500', bg: 'bg-yellow-50', darkBg: 'dark:bg-yellow-500/10', icon: Info },
                            { label: 'Low Severity', count: 16, color: 'text-[#14A098]', bg: 'bg-teal-50', darkBg: 'dark:bg-[#14A098]/10', icon: SearchIcon },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white dark:bg-[#11141B] p-6 rounded-2xl border border-zinc-100 dark:border-white/10 shadow-sm transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-sm font-medium text-zinc-400 dark:text-zinc-500">{stat.label}</span>
                                    <div className={`p-2 rounded-lg ${stat.bg} ${stat.darkBg} ${stat.color}`}><stat.icon size={18} /></div>
                                </div>
                                <span className="text-3xl font-bold tracking-tight dark:text-white">{stat.count}</span>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-[#11141B] rounded-3xl border border-zinc-100 dark:border-white/10 shadow-sm overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-zinc-50/50 dark:bg-white/[0.02] text-zinc-400 dark:text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                                <tr><th className="px-8 py-4">Scan Name</th><th className="px-4 py-4">Status</th><th className="px-4 py-4">Progress</th><th className="px-4 py-4">Vulnerability</th><th className="px-8 py-4 text-right">Last Scan</th></tr>
                            </thead>
                            <tbody>
                                {mockScans.map((scan) => (
                                    <tr key={scan.id} onClick={() => navigate(`/scan/${scan.id}`)} className="hover:bg-zinc-50 dark:hover:bg-white/5 cursor-pointer border-b border-zinc-50 dark:border-white/5 transition-all">
                                        <td className="px-8 py-5 font-bold text-sm dark:text-zinc-200">{scan.name}</td>
                                        <td className="px-4 py-5"><span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase ${scan.status === 'Completed' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600' : 'bg-rose-50 dark:bg-rose-500/10 text-rose-600'}`}>{scan.status}</span></td>
                                        <td className="px-4 py-5"><div className="flex items-center gap-2"><div className="w-24 h-1.5 bg-zinc-100 dark:bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-[#14A098]" style={{ width: `${scan.progress}%` }} /></div><span className="text-[11px] font-bold">{scan.progress}%</span></div></td>
                                        <td className="px-4 py-5"><div className="flex items-center gap-1.5">{scan.vulnerabilities.critical > 0 && <span className="w-5 h-5 flex items-center justify-center bg-rose-500 text-white text-[10px] font-bold rounded-md">{scan.vulnerabilities.critical}</span>}{scan.vulnerabilities.high > 0 && <span className="w-5 h-5 flex items-center justify-center bg-orange-500 text-white text-[10px] font-bold rounded-md">{scan.vulnerabilities.high}</span>}</div></td>
                                        <td className="px-8 py-5 text-right text-xs text-zinc-400">{scan.lastScan}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;