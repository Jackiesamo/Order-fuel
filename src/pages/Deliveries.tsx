import { mockOrders } from '@/lib/mock-data';
import { useAuth } from '@/contexts/AuthContext';
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types';
import { MapPin } from 'lucide-react';

const Deliveries = () => {
  const { user } = useAuth();
  const deliveries = mockOrders.filter(o => o.riderId === user?.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">My Deliveries</h1>
        <p className="text-muted-foreground">All assigned delivery tasks</p>
      </div>

      {deliveries.length === 0 ? (
        <p className="text-muted-foreground">No deliveries assigned.</p>
      ) : (
        <div className="space-y-3">
          {deliveries.map((order) => (
            <div key={order.id} className="rounded-xl border border-border bg-card p-5 shadow-card hover:glow-border transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-primary">{order.id.toUpperCase()}</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${ORDER_STATUS_COLORS[order.status]}`}>
                  {ORDER_STATUS_LABELS[order.status]}
                </span>
              </div>
              <p className="text-foreground font-medium">{order.fuelType} — {order.quantity}L</p>
              <p className="text-sm text-muted-foreground">Customer: {order.customerName}</p>
              <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {order.deliveryAddress}
              </div>
              <p className="text-sm font-bold text-foreground mt-2">₦{order.totalCost.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Deliveries;
