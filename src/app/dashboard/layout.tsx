import { LayoutDashboard, HardHat, Settings, LogOut, FileText } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F9FAFB]">

      <aside className="w-64 bg-zinc-950 text-zinc-400 p-6 hidden md:flex flex-col">
        <div className="flex items-center gap-3 mb-10 text-white font-bold text-xl">
          <HardHat className="text-indigo-500" size={28} />
          <span>Obras Brasil</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 text-white bg-zinc-900 p-3 rounded-lg">
            <LayoutDashboard size={20} /> Visão Geral
          </a>
          <a href="#" className="flex items-center gap-3 p-3 hover:bg-zinc-900 hover:text-white rounded-lg transition-colors">
            <FileText size={20} /> Relatórios
          </a>
        </nav>

        <div className="pt-4 border-t border-zinc-800">
          <a href="#" className="flex items-center gap-3 p-3 hover:text-red-400 transition-colors">
            <LogOut size={20} /> Sair
          </a>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}