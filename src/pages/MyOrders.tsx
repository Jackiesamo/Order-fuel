import { mockOrders } from '@/lib/mock-data';
import { useAuth } from '@/contexts/AuthContext';
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types';

const MyOrders = () => {
  const { user } = useAuth();
  const orders = mockOrders.filter(o => o.customerId === user?.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">My Orders</h1>
        <p className="text-muted-foreground">Track and manage your fuel orders</p>
      </div>

      {orders.length === 0 ? (
        <p className="text-muted-foreground">No orders yet.</p>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-primary">{order.id.toUpperCase()}</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${ORDER_STATUS_COLORS[order.status]}`}>
                  {ORDER_STATUS_LABELS[order.status]}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div><span className="text-muted-foreground">Fuel:</span> <span className="text-foreground">{order.fuelType}</span></div>
                <div><span className="text-muted-foreground">Qty:</span> <span className="text-foreground">{order.quantity}L</span></div>
                <div><span className="text-muted-foreground">Station:</span> <span className="text-foreground">{order.stationName}</span></div>
                <div><span className="text-muted-foreground">Total:</span> <span className="text-foreground font-bold">₦{order.totalCost.toLocaleString()}</span></div>
              </div>
              {order.riderName && (
                <p className="text-sm text-muted-foreground mt-2">Rider: {order.riderName}</p>
              )}

              {/* Order timeline */}
              <div className="mt-4 flex items-center gap-1">
                {(['pending', 'confirmed', 'preparing', 'ready_for_pickup', 'on_the_way', 'delivered'] as const).map((step, i, arr) => {
                  const allSteps = ['pending', 'confirmed', 'preparing', 'ready_for_pickup', 'picked_up', 'on_the_way', 'delivered'];
                  const stepIndex = allSteps.indexOf(order.status);
                  const currentIdx = allSteps.indexOf(step);
                  const done = currentIdx <= stepIndex;
                  return (
                    <div key={step} className="flex items-center flex-1">
                      <div className={`w-2.5 h-2.5 rounded-full ${done ? 'bg-primary' : 'bg-muted'}`} />
                      {i < arr.length - 1 && <div className={`flex-1 h-0.5 ${done && i < stepIndex ? 'bg-primary' : 'bg-muted'}`} />}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
