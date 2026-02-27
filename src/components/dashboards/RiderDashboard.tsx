import { Truck, MapPin, CheckCircle } from 'lucide-react';
import { mockOrders } from '@/lib/mock-data';
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types';
import StatCard from '@/components/StatCard';

const RiderDashboard = () => {
  const myDeliveries = mockOrders.filter(o => o.riderId === 'u4');
  const active = myDeliveries.filter(o => ['picked_up', 'on_the_way', 'ready_for_pickup'].includes(o.status));
  const completed = myDeliveries.filter(o => o.status === 'delivered');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Rider Dashboard</h1>
        <p className="text-muted-foreground">Your delivery assignments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={<Truck />} label="Total Deliveries" value={myDeliveries.length} />
        <StatCard icon={<MapPin />} label="Active" value={active.length} />
        <StatCard icon={<CheckCircle />} label="Completed" value={completed.length} />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-display font-semibold text-foreground">Active Deliveries</h2>
        {active.length === 0 && <p className="text-muted-foreground text-sm">No active deliveries</p>}
        {active.map((order) => (
          <div key={order.id} className="rounded-xl border border-border bg-card p-4 shadow-card hover:glow-border transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-primary">{order.id.toUpperCase()}</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${ORDER_STATUS_COLORS[order.status]}`}>
                {ORDER_STATUS_LABELS[order.status]}
              </span>
            </div>
            <p className="text-foreground font-medium">{order.fuelType} — {order.quantity}L</p>
            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              <MapPin className="w-3 h-3" />
              {order.deliveryAddress}
            </div>
            <p className="text-sm text-muted-foreground mt-1">Customer: {order.customerName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiderDashboard;
