import { ShoppingCart, Package, TrendingUp } from 'lucide-react';
import { mockOrders, mockFuelProducts, mockStations } from '@/lib/mock-data';
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types';
import StatCard from '@/components/StatCard';

const CustomerDashboard = () => {
  const myOrders = mockOrders.filter(o => o.customerId === 'u5');
  const totalSpent = myOrders.filter(o => o.status === 'delivered').reduce((s, o) => s + o.totalCost, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Welcome back, Amina 👋</h1>
        <p className="text-muted-foreground">Order fuel and track your deliveries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={<ShoppingCart />} label="My Orders" value={myOrders.length} />
        <StatCard icon={<Package />} label="Active" value={myOrders.filter(o => o.status !== 'delivered').length} />
        <StatCard icon={<TrendingUp />} label="Total Spent" value={`₦${totalSpent.toLocaleString()}`} />
      </div>

      {/* Fuel prices */}
      <div>
        <h2 className="text-lg font-display font-semibold text-foreground mb-3">Available Fuel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockFuelProducts.filter(f => f.stationId === 's1').map((fuel) => (
            <div key={fuel.id} className="rounded-xl border border-border bg-card p-5 shadow-card hover:glow-border transition-all">
              <p className="text-lg font-display font-bold text-foreground">{fuel.type}</p>
              <p className="text-2xl font-bold text-primary mt-1">₦{fuel.pricePerLitre}<span className="text-sm text-muted-foreground font-normal">/litre</span></p>
              <p className="text-xs text-muted-foreground mt-2">{fuel.stockLitres.toLocaleString()}L in stock</p>
            </div>
          ))}
        </div>
      </div>

      {/* Order history */}
      <div>
        <h2 className="text-lg font-display font-semibold text-foreground mb-3">My Orders</h2>
        <div className="space-y-3">
          {myOrders.map((order) => (
            <div key={order.id} className="rounded-xl border border-border bg-card p-4 shadow-card">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-primary">{order.id.toUpperCase()}</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${ORDER_STATUS_COLORS[order.status]}`}>
                  {ORDER_STATUS_LABELS[order.status]}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">{order.fuelType} — {order.quantity}L</p>
                  <p className="text-sm text-muted-foreground">{order.stationName}</p>
                </div>
                <p className="font-display font-bold text-foreground">₦{order.totalCost.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
