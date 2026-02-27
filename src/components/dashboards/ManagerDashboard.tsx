import { Package, TrendingUp, Users, ClipboardList } from 'lucide-react';
import { mockOrders } from '@/lib/mock-data';
import StatCard from '@/components/StatCard';
import OrderTable from '@/components/OrderTable';

const ManagerDashboard = () => {
  const stationOrders = mockOrders.filter(o => o.stationId === 's1');
  const revenue = stationOrders.filter(o => o.status === 'delivered').reduce((s, o) => s + o.totalCost, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Station Manager</h1>
        <p className="text-muted-foreground">FuelFlow Lagos Central</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={<ClipboardList />} label="Station Orders" value={stationOrders.length} />
        <StatCard icon={<TrendingUp />} label="Revenue" value={`₦${revenue.toLocaleString()}`} />
        <StatCard icon={<Package />} label="Pending" value={stationOrders.filter(o => o.status === 'pending').length} />
      </div>

      <div>
        <h2 className="text-lg font-display font-semibold text-foreground mb-3">Station Orders</h2>
        <OrderTable orders={stationOrders} />
      </div>
    </div>
  );
};

export default ManagerDashboard;
