import { cn } from '@/src/lib/utils';
import { 
  LayoutGrid, 
  ClipboardList, 
  Users, 
  Archive, 
  BarChart3, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck,
  Scale,
  CreditCard
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Home', icon: LayoutGrid },
    { id: 'matters', label: 'Matters', icon: ClipboardList },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'finance', label: 'Finance', icon: CreditCard },
    { id: 'archive', label: 'Archive', icon: Archive },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-surface-container-low flex flex-col py-8 px-4 border-r border-outline-variant">
      <div className="flex items-center gap-3 mb-10 px-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
          <Scale size={24} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-on-surface leading-tight tracking-tight">The Sovereign</h1>
          <p className="text-[10px] font-sans uppercase tracking-widest text-secondary font-bold">Legal Workspace</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 p-3 transition-all rounded-xl group",
              activeTab === item.id 
                ? "bg-primary text-white" 
                : "text-secondary hover:bg-surface"
            )}
          >
            <item.icon size={18} className={cn(activeTab === item.id ? "text-white" : "text-secondary group-hover:text-primary transition-colors")} />
            <span className="font-sans text-xs uppercase tracking-widest font-bold">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <button className="w-full py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform text-sm uppercase tracking-widest">
          <Sparkles size={18} />
          AI Copilot
        </button>
        
        <div className="space-y-1 pt-4 border-t border-outline-variant">
          <button className="w-full flex items-center gap-3 text-secondary p-2 hover:text-primary transition-colors">
            <HelpCircle size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Help</span>
          </button>
          <button className="w-full flex items-center gap-3 text-secondary p-2 hover:text-primary transition-colors">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Privacy</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
