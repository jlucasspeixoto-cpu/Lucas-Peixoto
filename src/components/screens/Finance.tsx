import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  Wallet, 
  TrendingUp, 
  AlertTriangle, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  X,
  MessageSquare,
  Download,
  QrCode,
  MoreVertical
} from 'lucide-react';

const data = [
  { name: 'JAN', revenue: 4000, expense: 2400 },
  { name: 'FEB', revenue: 3000, expense: 1398 },
  { name: 'MAR', revenue: 2000, expense: 9800 },
  { name: 'APR', revenue: 2780, expense: 3908 },
  { name: 'MAY', revenue: 1890, expense: 4800 },
  { name: 'JUN', revenue: 2390, expense: 3800 },
];

export default function Finance() {
  const stats = [
    { label: 'Total Balance', value: 'R$ 142.500,00', icon: Wallet, color: 'primary' },
    { label: 'To Receive', value: 'R$ 28.340,00', icon: TrendingUp, color: 'tertiary' },
    { label: 'Overdue', value: 'R$ 4.120,00', icon: AlertTriangle, color: 'error' },
  ];

  const invoices = [
    { id: 1, client: 'Construtora Alvorada', matter: 'Civil Process #8293-A', date: '12 Apr 2024', amount: 'R$ 12.500,00', status: 'PAID' },
    { id: 2, client: 'Ricardo Mendonça', matter: 'Tax Consultancy', date: '15 Apr 2024', amount: 'R$ 4.800,00', status: 'PENDING', active: true },
    { id: 3, client: 'Marina Soluções IT', matter: 'Monthly Contract', date: '10 Apr 2024', amount: 'R$ 3.200,00', status: 'OVERDUE' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-on-surface uppercase">Financial Control</h1>
          <p className="text-sm text-secondary font-medium">Revenue, expenses, and billing management.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl border border-outline-variant text-secondary font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all">
            Monthly Report
          </button>
          <button className="px-4 py-2 rounded-xl bg-primary text-white font-bold text-[10px] uppercase tracking-widest hover:bg-primary-container transition-all">
            New Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 ambient-shadow border border-outline-variant">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary">Revenue vs. Expense</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-outline" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">Expense</span>
              </div>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EEEEEE" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#666666' }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#666666' }} 
                />
                <Tooltip 
                  cursor={{ fill: '#F5F5F5' }}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #EEEEEE', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="revenue" fill="#111111" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="expense" fill="#DDDDDD" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="space-y-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-outline-variant ambient-shadow flex items-center justify-between group hover:border-primary transition-all">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">{stat.label}</p>
                <p className="text-xl font-bold tracking-tight text-on-surface">{stat.value}</p>
              </div>
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                stat.color === 'error' ? "bg-primary text-white" : "bg-surface text-secondary group-hover:bg-primary group-hover:text-white"
              )}>
                <stat.icon size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-3xl ambient-shadow border border-outline-variant overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-on-surface">Recent Invoices</h3>
          <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface">
                {['Client', 'Matter', 'Due Date', 'Amount', 'Status'].map((header) => (
                  <th key={header} className="px-8 py-4 text-[9px] font-bold uppercase tracking-widest text-secondary">
                    {header}
                  </th>
                ))}
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-surface transition-colors group">
                  <td className="px-8 py-5">
                    <span className="text-xs font-bold text-on-surface">{inv.client}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs text-secondary font-medium">{inv.matter}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs text-secondary font-medium">{inv.date}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-bold text-on-surface">{inv.amount}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                      inv.status === 'PAID' ? "bg-surface text-secondary border-outline" : "bg-primary text-white border-primary"
                    )}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-outline hover:text-primary transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
