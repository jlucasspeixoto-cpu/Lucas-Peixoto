export interface SearchItem {
  id: string;
  title: string;
  category: 'Matter' | 'Client' | 'Finance' | 'Task';
  description: string;
  tab: string;
}

export const searchData: SearchItem[] = [
  { id: '1', title: 'Silva vs. Union', category: 'Matter', description: 'Initial Petition Review - Process #8293-A', tab: 'matters' },
  { id: '2', title: 'Alpha Logística S/A', category: 'Client', description: 'Logistics Sector - Active Client', tab: 'clients' },
  { id: '3', title: 'Mariana B. Silva', category: 'Client', description: 'Tax Consultancy - Federal Revenue', tab: 'clients' },
  { id: '4', title: 'TechCorp Solutions', category: 'Client', description: 'Labor Court - TRT-2', tab: 'clients' },
  { id: '5', title: 'João dos Santos', category: 'Client', description: 'Judicial - TRF-3', tab: 'clients' },
  { id: '6', title: 'Carlos Vinícius', category: 'Client', description: 'Administrative - INSS', tab: 'clients' },
  { id: '7', title: 'Construtora Alvorada', category: 'Finance', description: 'Paid Invoice - R$ 12.500,00', tab: 'finance' },
  { id: '8', title: 'Ricardo Mendonça', category: 'Finance', description: 'Pending Invoice - R$ 4.800,00', tab: 'finance' },
  { id: '9', title: 'Marina Soluções IT', category: 'Finance', description: 'Overdue Invoice - R$ 3.200,00', tab: 'finance' },
  { id: '10', title: 'Initial Petition Review', category: 'Task', description: 'Urgent task for Silva vs. Union', tab: 'dashboard' },
  { id: '11', title: 'Social Contract Analysis', category: 'Task', description: 'Task for Logística S.A.', tab: 'dashboard' },
  { id: '12', title: 'File Defense', category: 'Task', description: 'In Progress - Process 2023.01.22', tab: 'dashboard' },
];
