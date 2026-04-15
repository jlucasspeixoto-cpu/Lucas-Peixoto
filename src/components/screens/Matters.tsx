import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { 
  Filter, 
  Download, 
  Gavel, 
  Building2, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Plus
} from 'lucide-react';

export default function Matters() {
  const processes = [
    { 
      id: '1023456-78.2023.8.26.0100', 
      client: 'Alpha Logística S/A', 
      clientInitials: 'AL',
      court: 'TJSP - 1st Civil Court', 
      type: 'Judicial', 
      status: 'FATAL', 
      lastUpdate: 'Publication of sanitizing order. 15-day deadline for evidence specification.' 
    },
    { 
      id: '45829/2023-RFB', 
      client: 'Mariana B. Silva', 
      clientInitials: 'MB',
      court: 'Federal Revenue - 4th Region', 
      type: 'Administrative', 
      status: 'URGENT', 
      lastUpdate: 'Administrative challenge received. Awaiting distribution to rapporteur.' 
    },
    { 
      id: '0012934-11.2022.5.02.0001', 
      client: 'TechCorp Solutions', 
      clientInitials: 'TC',
      court: 'TRT-2 - 1st Labor Court', 
      type: 'Judicial', 
      status: 'NEUTRAL', 
      lastUpdate: 'Instruction hearing scheduled for 10/15/2024 at 14:00.' 
    },
    { 
      id: '5001239-44.2023.4.03.6100', 
      client: 'João dos Santos', 
      clientInitials: 'JS',
      court: 'TRF-3 - 10th Federal Court', 
      type: 'Judicial', 
      status: 'FATAL', 
      lastUpdate: 'Judgment rendered: Dismissed. Appeal period in progress.' 
    },
    { 
      id: 'PROT-2023-8812', 
      client: 'Carlos Vinícius', 
      clientInitials: 'CV',
      court: 'INSS - Central Agency', 
      type: 'Administrative', 
      status: 'NEUTRAL', 
      lastUpdate: 'Requirement fulfilled by the insured. Awaiting final analysis of benefit.' 
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-on-surface uppercase">Process Portfolio</h1>
          <p className="text-sm text-secondary font-medium">Manage and track all active legal matters.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl border border-outline-variant text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
            <Filter size={14} /> Advanced Filters
          </button>
          <button className="px-4 py-2 rounded-xl border border-outline-variant text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {['All Processes', 'Administrative', 'Judicial', 'Fatal Deadlines', 'Archived'].map((filter, i) => (
          <button 
            key={filter}
            className={cn(
              "px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border",
              i === 0 ? "bg-primary text-white border-primary" : "bg-white text-secondary border-outline-variant hover:border-primary"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Process Table */}
        <div className="lg:col-span-9 bg-white rounded-3xl ambient-shadow border border-outline-variant overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant bg-surface">
                  {['Process ID', 'Client', 'Court / Agency', 'Type', 'Status', 'AI Update'].map((header) => (
                    <th key={header} className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-secondary">
                      {header}
                    </th>
                  ))}
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {processes.map((p) => (
                  <tr key={p.id} className="hover:bg-surface transition-colors group">
                    <td className="px-6 py-5">
                      <span className="text-xs font-bold text-on-surface tracking-tight">{p.id}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface border border-outline-variant" />
                        <span className="text-xs font-bold text-on-surface">{p.client}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-secondary">
                        <Building2 size={14} />
                        <span className="text-xs font-medium">{p.court}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{p.type}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                        p.status === 'FATAL' ? "bg-primary text-white border-primary" : "bg-surface text-secondary border-outline"
                      )}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest truncate max-w-[200px] block">{p.lastUpdate}</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 text-outline hover:text-primary transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-outline-variant flex justify-between items-center bg-surface">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Showing 1-10 of 248 processes</span>
            <div className="flex gap-2">
              <button className="p-2 rounded-xl border border-outline-variant hover:bg-white transition-all"><ChevronLeft size={16} /></button>
              <button className="p-2 rounded-xl border border-outline-variant hover:bg-white transition-all"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-primary p-6 rounded-3xl text-white ambient-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} />
              <h3 className="text-[10px] font-bold uppercase tracking-widest">AI Insights</h3>
            </div>
            <p className="text-xs font-medium leading-relaxed mb-6">
              Your workload in "Judicial" processes increased by 12% this week. Consider delegating administrative tasks.
            </p>
            <div className="space-y-2">
              {[
                { label: 'Judicial', value: 65 },
                { label: 'Admin', value: 35 },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest mb-1">
                    <span>{stat.label}</span>
                    <span>{stat.value}%</span>
                  </div>
                  <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white" style={{ width: `${stat.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-outline-variant ambient-shadow">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4">Next Fatal Deadline</h3>
            <div className="p-4 bg-surface rounded-2xl border-l-4 border-primary">
              <p className="text-xs font-bold text-on-surface mb-1">Process 0021-X</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Tomorrow, 14:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-2xl ambient-shadow flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Plus size={24} />
      </button>
    </div>
  );
}
