import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { 
  TrendingUp, 
  AlertCircle, 
  Filter, 
  MoreVertical, 
  Clock, 
  Sparkles, 
  Send,
  Calendar,
  ArrowRight,
  BarChart2
} from 'lucide-react';

export default function Dashboard() {
  const metrics = [
    { label: 'Active Processes', value: '142', change: '+12%', color: 'primary', progress: 66 },
    { label: 'Monthly Revenue', value: 'R$ 48.500', change: '+5.2%', color: 'tertiary', progress: 75 },
    { label: 'Fatal Deadlines', value: '08', change: 'TODAY', color: 'error', progress: 100, isAlert: true },
  ];

  const tasks = [
    { 
      id: 1, 
      column: 'To Do', 
      title: 'Initial Petition Review - Silva vs. Union', 
      tag: 'Urgent', 
      tagColor: 'error', 
      date: '12 Oct', 
      user: 'Dr. Ricardo M.' 
    },
    { 
      id: 2, 
      column: 'To Do', 
      title: 'Social Contract Analysis - Logística S.A.', 
      tag: 'Neutral', 
      tagColor: 'secondary', 
      date: '15 Oct', 
      user: 'Dra. Clara J.' 
    },
    { 
      id: 3, 
      column: 'In Progress', 
      title: 'File Defense - Process 2023.01.22', 
      tag: 'High Priority', 
      tagColor: 'tertiary', 
      date: 'Today', 
      user: 'My Task',
      isActive: true
    },
    { 
      id: 4, 
      column: 'Done', 
      title: 'Conciliation Meeting', 
      date: 'Finished at 09:30', 
      isDone: true 
    },
  ];

  const aiFeed = [
    { 
      id: 1, 
      type: 'urgent', 
      time: 'Now', 
      title: 'Urgent Publication', 
      content: 'Publication in Process 1002345: AI translated as - 15-day deadline for reply (HIGH PRIORITY).',
      actions: ['Generate Petition', 'Archive']
    },
    { 
      id: 2, 
      type: 'success', 
      time: '2h ago', 
      title: 'Movement', 
      content: 'Favorable decision identified in Process 500921-X. AI suggests notifying the client about the preliminary victory.' 
    },
    { 
      id: 3, 
      type: 'info', 
      time: '5h ago', 
      title: 'AI Suggestion', 
      content: 'We detected 3 contracts expiring next week. Would you like me to draft the renewal terms?' 
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "p-6 rounded-2xl ambient-shadow flex flex-col gap-1 group transition-all border border-outline-variant",
              m.isAlert ? "bg-primary text-white" : "bg-white hover:bg-surface"
            )}
          >
            <span className={cn("text-[10px] font-bold uppercase tracking-widest", m.isAlert ? "text-white/70" : "text-secondary")}>
              {m.label}
            </span>
            <div className="flex items-baseline gap-2">
              <span className={cn("text-3xl font-bold tracking-tighter", m.isAlert ? "text-white" : "text-on-surface")}>
                {m.value}
              </span>
              <span className={cn("text-[10px] font-bold", m.isAlert ? "text-white/50" : "text-secondary")}>
                {m.change}
              </span>
            </div>
            <div className={cn("mt-4 w-full h-1 rounded-full overflow-hidden", m.isAlert ? "bg-white/20" : "bg-outline-variant")}>
              <div 
                className={cn("h-full transition-all duration-1000", m.isAlert ? "bg-white" : "bg-primary")} 
                style={{ width: `${m.progress}%` }} 
              />
            </div>
            {m.isAlert && <p className="text-[10px] text-white/80 mt-2 font-bold uppercase tracking-widest">Action Required</p>}
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Kanban Board */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-on-surface tracking-tighter uppercase">Task Board</h2>
            <div className="flex gap-2">
              <button className="p-2 rounded-xl border border-outline-variant text-secondary hover:text-on-surface transition-all">
                <Filter size={16} />
              </button>
              <button className="p-2 rounded-xl border border-outline-variant text-secondary hover:text-on-surface transition-all">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['To Do', 'In Progress', 'Done'].map((col) => (
              <div key={col} className="bg-white border border-outline-variant p-4 rounded-3xl flex flex-col gap-4 min-h-[500px]">
                <div className="flex justify-between items-center px-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface">{col}</span>
                  <span className="bg-surface border border-outline-variant px-2 py-0.5 rounded-lg text-[10px] font-bold">
                    {tasks.filter(t => t.column === col).length.toString().padStart(2, '0')}
                  </span>
                </div>

                {tasks.filter(t => t.column === col).map((task) => (
                  <motion.div 
                    key={task.id}
                    layoutId={`task-${task.id}`}
                    className={cn(
                      "p-4 rounded-2xl border border-outline-variant transition-all cursor-pointer group",
                      task.isDone ? "bg-surface opacity-50" : "bg-white hover:border-primary",
                      task.isActive && "ring-1 ring-primary"
                    )}
                  >
                    {!task.isDone && (
                      <div className="flex justify-between items-start mb-3">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                          task.tagColor === 'error' ? "border-primary bg-primary text-white" : "border-outline text-secondary"
                        )}>
                          {task.tag}
                        </span>
                        <span className="text-[9px] text-secondary font-bold uppercase tracking-widest">{task.date}</span>
                      </div>
                    )}
                    <h4 className={cn("text-xs font-bold text-on-surface mb-3 leading-relaxed tracking-tight", task.isDone && "line-through")}>
                      {task.title}
                    </h4>
                    {task.isDone ? (
                      <p className="text-[9px] text-secondary font-bold uppercase tracking-widest">{task.date}</p>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-surface border border-outline-variant" />
                        <span className="text-[9px] text-secondary font-bold uppercase tracking-widest">{task.user}</span>
                      </div>
                    )}
                  </motion.div>
                ))}

                {col === 'To Do' && (
                  <button className="w-full py-4 border border-dashed border-outline-variant rounded-2xl text-secondary text-[9px] font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-all">
                    + New Task
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI Copilot Feed */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="bg-white rounded-3xl ambient-shadow h-full flex flex-col overflow-hidden border border-outline-variant">
            <div className="bg-primary p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles size={20} />
                <h2 className="text-lg font-bold tracking-tighter uppercase">AI Copilot</h2>
              </div>
              <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Real-time insights</p>
            </div>

            <div className="p-6 space-y-8 flex-1 overflow-y-auto no-scrollbar">
              {aiFeed.map((item, i) => (
                <div key={item.id} className="relative pl-8 border-l border-outline last:border-transparent">
                  <div className={cn(
                    "absolute -left-[5px] top-0 w-2 h-2 rounded-full",
                    item.type === 'urgent' ? "bg-primary" : "bg-outline"
                  )} />
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className={cn(
                        "text-[9px] font-bold uppercase tracking-widest",
                        item.type === 'urgent' ? "text-primary" : "text-secondary"
                      )}>
                        {item.title} • {item.time}
                      </span>
                    </div>
                    <div className="bg-surface p-4 rounded-2xl border border-outline-variant">
                      <p className="text-xs text-secondary leading-relaxed font-medium">
                        {item.content}
                      </p>
                    </div>
                    {item.actions && (
                      <div className="flex gap-2">
                        {item.actions.map(action => (
                          <button key={action} className="text-[9px] font-bold px-3 py-1.5 rounded-xl border border-outline text-secondary hover:border-primary hover:text-primary transition-all uppercase tracking-widest">
                            {action}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-outline-variant bg-surface">
              <div className="bg-white border border-outline-variant rounded-2xl p-3 flex items-center gap-3">
                <input 
                  type="text" 
                  placeholder="Ask AI..." 
                  className="flex-1 bg-transparent border-none text-xs focus:ring-0 placeholder:text-outline font-bold uppercase tracking-widest"
                />
                <button className="text-primary hover:scale-110 transition-transform">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bento Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-outline-variant">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface mb-6">Upcoming</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-2xl bg-surface border border-outline-variant flex flex-col items-center justify-center">
                <span className="text-sm font-bold">14</span>
                <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Oct</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Instruction Hearing</p>
                <p className="text-[9px] text-secondary font-bold uppercase tracking-widest">14:00 • 3rd Civil</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 bg-white p-8 rounded-3xl border border-outline-variant flex items-center justify-between relative overflow-hidden group">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tighter uppercase">Performance</h3>
            <p className="text-sm text-secondary font-medium leading-relaxed">
              Your productivity increased by 15% compared to last week.
            </p>
            <button className="mt-6 text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
              View report 
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute right-[-20px] top-[-20px] opacity-[0.02]">
            <BarChart2 size={240} className="text-primary" />
          </div>
          <div className="hidden lg:flex items-end gap-2 h-32 pr-8">
            {[40, 70, 45, 90, 65, 80].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="w-4 bg-primary/10 rounded-t-lg group-hover:bg-primary/20 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
