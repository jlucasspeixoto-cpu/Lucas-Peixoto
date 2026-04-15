import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  History, 
  Gavel, 
  CreditCard, 
  FolderOpen, 
  MessageCircle, 
  PhoneOff,
  Eye,
  FileText,
  Table
} from 'lucide-react';

export default function ClientDetails() {
  const timeline = [
    { 
      id: 1, 
      type: 'whatsapp', 
      title: 'WhatsApp', 
      time: 'Today at 10:45', 
      content: '"Good morning, Dr. I would like to know if we have had any progress on the injunction. Thanks!"',
      sentiment: 'Positive',
      sentimentColor: 'tertiary'
    },
    { 
      id: 2, 
      type: 'email', 
      title: 'Email Sent', 
      time: 'Yesterday at 16:20', 
      content: 'Monthly procedural progress report sent. Attachment: report_october.pdf',
      sentiment: 'Neutral',
      sentimentColor: 'secondary'
    },
    { 
      id: 3, 
      type: 'call', 
      title: 'Missed Call', 
      time: '02 Nov at 09:15', 
      content: 'Client attempt to contact regarding judicial block on checking account.',
      sentiment: 'Urgent',
      sentimentColor: 'error'
    },
  ];

  const documents = [
    { name: 'Social_Contract_2023.pdf', type: 'pdf', size: '2.4 MB', icon: FileText, color: 'error' },
    { name: 'Initial_Petition_V02.docx', type: 'docx', size: '1.1 MB', icon: FileText, color: 'primary' },
    { name: 'Cost_Sheet_Op.xlsx', type: 'xlsx', size: '840 KB', icon: Table, color: 'tertiary' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Sidebar */}
        <aside className="lg:w-80 flex flex-col gap-6">
          <div className="bg-white rounded-3xl p-8 ambient-shadow border border-outline-variant">
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border border-outline-variant">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbZ7pgbNMC7zM7MFLW3Rkn7mppzVm2D4sgEw9cavEUBzRC3IJfVeopEVfEmnLYxENt-YJxrqzxPtnEsAQLW-SKF07MS2U2S8Q5lhpfPTNxq0lQ6bPjCGQEZJ1xHjEc4Q3MFcO5Zq-dnHvABYwEhJyT-U9sFvllUSs1Z9sPMZqUcqnzLV1DLAMGbdDnAsyI4q10KwWBqir3YF_N5qCzNDwrMLl5TnUDEJch8L_f50OGZgwltYsx80WqZg1sY0Do-F7T0CYIvENb040" 
                  alt="Client Profile" 
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="text-xl font-bold text-on-surface tracking-tighter uppercase">Heloísa Cavalcanti</h1>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-4">Logistics Sector</p>
              <div className="flex gap-2">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">URGENT</span>
                <span className="bg-surface border border-outline text-secondary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">Active</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="p-4 bg-surface rounded-2xl border border-outline-variant">
                <label className="text-[9px] font-bold text-outline uppercase tracking-widest block mb-2">Contact</label>
                <div className="space-y-3">
                  <p className="text-xs font-bold text-on-surface flex items-center gap-2">
                    <Mail size={14} className="text-primary" /> heloisa.c@logistica.com
                  </p>
                  <p className="text-xs font-bold text-on-surface flex items-center gap-2">
                    <Phone size={14} className="text-primary" /> +55 (11) 98822-4412
                  </p>
                </div>
              </div>
              <div className="p-4 bg-surface rounded-2xl border border-outline-variant">
                <label className="text-[9px] font-bold text-outline uppercase tracking-widest block mb-2">Documents</label>
                <p className="text-xs font-bold text-on-surface">CPF: 123.456.789-00</p>
                <p className="text-xs font-bold text-on-surface mt-1">RG: 12.345.678-9</p>
              </div>
              <div className="p-4 bg-surface rounded-2xl border border-outline-variant">
                <label className="text-[9px] font-bold text-outline uppercase tracking-widest block mb-2">Address</label>
                <p className="text-xs font-bold text-on-surface leading-snug flex items-start gap-2">
                  <MapPin size={14} className="text-primary mt-0.5" />
                  Av. Faria Lima, 4500, São Paulo - SP
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 ambient-shadow border border-outline-variant">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-primary" />
              <h3 className="text-[10px] font-bold text-on-surface uppercase tracking-widest">AI Notes</h3>
            </div>
            <div className="bg-surface p-4 rounded-2xl border-l-4 border-primary">
              <p className="text-xs text-secondary leading-relaxed font-medium">
                Client demonstrates high concern with the deadline for process 0021-X. Proactive update recommended.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 space-y-8">
          {/* Segmented Control */}
          <div className="bg-white border border-outline-variant p-1 rounded-2xl flex gap-1">
            {[
              { id: 'history', label: 'History', icon: History },
              { id: 'processes', label: 'Processes', icon: Gavel },
              { id: 'finance', label: 'Finance', icon: CreditCard },
              { id: 'documents', label: 'Documents', icon: FolderOpen },
            ].map((tab) => (
              <button 
                key={tab.id}
                className={cn(
                  "flex-1 py-3 px-4 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all",
                  tab.id === 'history' ? "bg-primary text-white" : "text-secondary hover:bg-surface"
                )}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Timeline Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter text-on-surface uppercase">Communications</h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-outline-variant" />
              <div className="space-y-10">
                {timeline.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative pl-16 group"
                  >
                    <div className={cn(
                      "absolute left-[21px] top-1 w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm z-10",
                      item.type === 'whatsapp' ? "bg-primary" : item.type === 'email' ? "bg-primary" : "bg-primary"
                    )} />
                    <div className="bg-white p-6 rounded-3xl ambient-shadow group-hover:bg-surface transition-all border border-outline-variant">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center border border-outline-variant",
                            item.type === 'whatsapp' ? "bg-surface text-primary" : 
                            item.type === 'email' ? "bg-surface text-primary" : "bg-surface text-primary"
                          )}>
                            {item.type === 'whatsapp' ? <MessageCircle size={20} /> : 
                             item.type === 'email' ? <Mail size={20} /> : <PhoneOff size={20} />}
                          </div>
                          <div>
                            <h4 className="font-bold text-on-surface text-xs uppercase tracking-widest">{item.title}</h4>
                            <span className="text-[9px] uppercase font-bold text-outline tracking-widest">{item.time}</span>
                          </div>
                        </div>
                        <div className={cn(
                          "flex items-center gap-2 px-3 py-1 rounded-xl border border-outline-variant",
                          item.sentimentColor === 'tertiary' ? "bg-white text-secondary" : 
                          item.sentimentColor === 'secondary' ? "bg-white text-secondary" : "bg-primary text-white"
                        )}>
                          <span className="text-[9px] font-bold uppercase tracking-widest">{item.sentiment}</span>
                        </div>
                      </div>
                      <p className="text-xs text-secondary leading-relaxed font-medium">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="bg-white rounded-3xl p-8 ambient-shadow border border-outline-variant">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-on-surface tracking-tighter uppercase">Files</h3>
              <button className="text-primary font-bold text-[10px] uppercase tracking-widest hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, i) => (
                <div key={i} className="p-4 rounded-2xl bg-surface border border-outline-variant hover:border-primary transition-all cursor-pointer group">
                  <div className="w-full aspect-video rounded-xl bg-white mb-4 overflow-hidden flex items-center justify-center relative border border-outline-variant">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-all z-10">
                      <Eye size={24} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4 w-full h-full flex flex-col items-center justify-center gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                      <doc.icon size={48} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white border border-outline-variant text-primary">
                      <doc.icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-on-surface truncate uppercase tracking-widest">{doc.name}</p>
                      <p className="text-[9px] font-bold text-outline uppercase tracking-widest">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
