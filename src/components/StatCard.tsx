import { ReactNode } from 'react';

const StatCard = ({ icon, label, value }: { icon: ReactNode; label: string; value: string | number }) => (
  <div className="rounded-xl border border-border bg-card p-5 shadow-card hover:glow-border transition-all">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-xl font-display font-bold text-foreground">{value}</p>
      </div>
    </div>
  </div>
);

export default StatCard;
