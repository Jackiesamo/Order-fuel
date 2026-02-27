import { Package, AlertTriangle, CheckCircle } from 'lucide-react';
import { mockOrders } from '@/lib/mock-data';
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types';
import StatCard from '@/components/StatCard';

const AttendantDashboard = () => {
  const assignedOrders = mockOrders.filter(o => o.attendantId === 'u3');
  const preparing = assignedOrders.filter(o => ['confirmed', 'preparing'].includes(o.status));
  const ready = assignedOrders.filter(o => o.status === 'ready_for_pickup');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Attendant Dashboard</h1>
        <p className="text-muted-foreground">Fuel preparation & dispatch</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={<Package />} label="Assigned Orders" value={assignedOrders.length} />
        <StatCard icon={<AlertTriangle />} label="Preparing" value={preparing.length} />
        <StatCard icon={<CheckCircle />} label="Ready" value={ready.length} />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-display font-semibold text-foreground">Assigned Orders</h2>
        {assignedOrders.map((order) => (
          <div key={order.id} className="rounded-xl border border-border bg-card p-4 shadow-card hover:glow-border transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-primary">{order.id.toUpperCase()}</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${ORDER_STATUS_COLORS[order.status]}`}>
                {ORDER_STATUS_LABELS[order.status]}
              </span>
            </div>
            <p className="text-foreground font-medium">{order.fuelType} — {order.quantity}L</p>
            <p className="text-sm text-muted-foreground">Rider: {order.riderName || 'Unassigned'}</p>
            <p className="text-sm text-muted-foreground">{order.deliveryAddress}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendantDashboard;
