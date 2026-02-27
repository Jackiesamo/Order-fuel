import { BarChart3, TrendingUp, Fuel, ShoppingCart } from 'lucide-react';
import { mockOrders } from '@/lib/mock-data';
import StatCard from '@/components/StatCard';

const Analytics = () => {
  const delivered = mockOrders.filter(o => o.status === 'delivered');
  const totalRevenue = delivered.reduce((s, o) => s + o.totalCost, 0);
  const avgOrderValue = delivered.length ? Math.round(totalRevenue / delivered.length) : 0;
  const totalLitres = mockOrders.reduce((s, o) => s + o.quantity, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Platform performance overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<TrendingUp />} label="Total Revenue" value={`₦${totalRevenue.toLocaleString()}`} />
        <StatCard icon={<ShoppingCart />} label="Completed Orders" value={delivered.length} />
        <StatCard icon={<BarChart3 />} label="Avg Order Value" value={`₦${avgOrderValue.toLocaleString()}`} />
        <StatCard icon={<Fuel />} label="Total Litres Ordered" value={`${totalLitres}L`} />
      </div>

      {/* Simple chart placeholder */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-card">
        <h3 className="font-display font-semibold text-foreground mb-4">Order Status Distribution</h3>
        <div className="flex items-end gap-3 h-40">
          {Object.entries(
            mockOrders.reduce((acc, o) => {
              acc[o.status] = (acc[o.status] || 0) + 1;
              return acc;
            }, {} as Record<string, number>)
          ).map(([status, count]) => (
            <div key={status} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full rounded-t-lg bg-gradient-fuel"
                style={{ height: `${(count / mockOrders.length) * 100}%`, minHeight: '20px' }}
              />
              <span className="text-xs text-muted-foreground capitalize whitespace-nowrap">{status.replace('_', ' ')}</span>
              <span className="text-sm font-bold text-foreground">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
