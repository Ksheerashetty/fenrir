import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0B0E14] p-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-orange-600/20 to-red-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[5%] w-[600px] h-[600px] bg-teal-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-[30%] left-[10%] w-[120%] h-[250px] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent rotate-[30deg] blur-[90px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1080px] flex flex-col md:flex-row rounded-[40px] overflow-hidden shadow-2xl border border-white/5 bg-[#11141B]/40 backdrop-blur-md">
        <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-between text-left">
          <div>
            <div className="flex items-center gap-2 mb-20">
              <div className="w-6 h-6 rounded-full bg-[#14A098] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">aps</span>
            </div>
            <h1 className="text-5xl font-semibold text-white leading-tight mb-8">
              Expert level Cybersecurity <br />
              in <span className="text-[#14A098]">hours</span> not weeks.
            </h1>
            <ul className="space-y-4 text-zinc-300 text-sm">
              <li className="flex gap-3"><span className="text-[#14A098] font-bold">✓</span> Effortlessly spider and map targets...</li>
              <li className="flex gap-3"><span className="text-[#14A098] font-bold">✓</span> Deliver high-quality, validated findings...</li>
              <li className="flex gap-3"><span className="text-[#14A098] font-bold">✓</span> Generate professional, enterprise-grade reports...</li>
            </ul>
          </div>
          <p className="text-white text-lg font-medium pt-10">★ Trustpilot <span className="text-zinc-500 font-normal ml-2">Rated 4.5/5.0</span></p>
        </div>
        <div className="w-full md:w-1/2 bg-white p-12 lg:p-16 flex items-center justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-4xl font-bold text-zinc-900 mb-2">Sign up</h2>
            <p className="text-zinc-500 text-sm mb-8">Already have an account? <span className="text-[#14A098] font-semibold cursor-pointer">Log in</span></p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First name*" className="w-full p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:ring-2 focus:ring-[#14A098]/10 focus:border-[#14A098] outline-none" />
                <input type="text" placeholder="Last name*" className="w-full p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:ring-2 focus:ring-[#14A098]/10 focus:border-[#14A098] outline-none" />
              </div>
              <input type="email" placeholder="Email address*" className="w-full p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:ring-2 focus:ring-[#14A098]/10 focus:border-[#14A098] outline-none" />
              <div className="relative">
                <input type="password" placeholder="Password*" className="w-full p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 focus:ring-2 focus:ring-[#14A098]/10 focus:border-[#14A098] outline-none" />
                <Eye className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5 cursor-pointer" />
              </div>
              <button onClick={() => navigate('/dashboard')} className="w-full bg-[#14A098] hover:bg-[#118A83] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#14A098]/20 mt-4">Create account</button>
              <div className="flex gap-3 pt-6">
                <button className="flex-1 flex justify-center py-3 rounded-full bg-black text-white hover:bg-zinc-800 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.073 10.567c-.015-2.525 2.062-3.74 2.158-3.793-1.171-1.713-2.993-1.946-3.64-1.973-1.543-.156-3.012.909-3.793.909-.783 0-1.996-.89-3.297-.864-1.71.025-3.287.994-4.168 2.527-1.78 3.09-.455 7.662 1.282 10.165.849 1.223 1.854 2.595 3.172 2.546 1.267-.049 1.748-.817 3.282-.817 1.533 0 1.967.817 3.297.79 1.36-.024 2.222-1.237 3.058-2.458.966-1.411 1.365-2.778 1.384-2.844-.03-.013-2.657-1.02-2.684-4.041zm-2.028-6.1c.69-.836 1.156-1.998 1.029-3.15-.992.04-2.193.66-2.903 1.493-.637.734-1.196 1.921-1.048 3.048 1.106.086 2.234-.555 2.922-1.391z" /></svg>
                </button>
                <button className="flex-1 flex justify-center py-3 rounded-full bg-[#FFF5F2] border border-[#FFEDE8] hover:bg-orange-50 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.47-1.92 4.64-1.16 1.16-2.67 1.92-5.92 1.92-5.33 0-9.69-4.35-9.69-9.69s4.35-9.69 9.69-9.69c2.89 0 5.06 1.11 6.64 2.59l2.37-2.37C19.14 1.05 16.14 0 12.48 0 5.58 0 0 5.58 0 12.48s5.58 12.48 12.48 12.48c3.75 0 6.58-1.24 8.75-3.52 2.25-2.25 2.96-5.41 2.96-7.94 0-.76-.07-1.48-.18-2.12h-11.55z" /></svg>
                </button>
                <button className="flex-1 flex justify-center py-3 rounded-full bg-[#E7EAF3] text-[#4267B2] hover:bg-[#DCE1EF] transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 6.12c-1.135 0-2.226.434-3.102 1.233-.625.57-1.113 1.309-1.45 2.148-.337-.839-.825-1.577-1.45-2.148-.876-.799-1.967-1.233-3.102-1.233-2.357 0-4.275 1.918-4.275 4.275 0 2.357 1.918 4.275 4.275 4.275 1.135 0 2.226-.434 3.102-1.233.505-.461.921-1.033 1.238-1.676.317.643.733 1.215 1.238 1.676.876.799 1.967 1.233 3.102 1.233 2.357 0 4.275-1.918 4.275-4.275 0-2.357-1.918-4.275-4.275-4.275zm-9.004 6.793c-.63 0-1.226-.245-1.672-.69-.445-.446-.69-1.042-.69-1.672s.245-1.226.69-1.672c.446-.445 1.042-.69 1.672-.69s1.226.245 1.672.69c.445.446.69 1.042.69 1.672s-.245 1.226-.69 1.672c-.446.445-1.042.69-1.672.69zm9.004 0c-.63 0-1.226-.245-1.672-.69-.445-.446-.69-1.042-.69-1.672s.245-1.226.69-1.672c.446-.445 1.042-.69 1.672-.69s1.226.245 1.672.69c.445.446.69 1.042.69 1.672s-.245 1.226-.69 1.672c-.446.445-1.042.69-1.672.69z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;