import { Building2, Users, ShoppingCart, TrendingUp, Fuel, Truck } from 'lucide-react';
import { mockStations, mockOrders, mockUsers, mockFuelProducts } from '@/lib/mock-data';
import { ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types';
import StatCard from '@/components/StatCard';
import OrderTable from '@/components/OrderTable';

const AdminDashboard = () => {
  const totalRevenue = mockOrders.filter(o => o.status === 'delivered').reduce((s, o) => s + o.totalCost, 0);
  const activeStations = mockStations.filter(s => s.isActive).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">System overview and management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Building2 />} label="Active Stations" value={activeStations} />
        <StatCard icon={<Users />} label="Total Users" value={mockUsers.length} />
        <StatCard icon={<ShoppingCart />} label="Total Orders" value={mockOrders.length} />
        <StatCard icon={<TrendingUp />} label="Revenue" value={`₦${totalRevenue.toLocaleString()}`} />
      </div>

      <div>
        <h2 className="text-lg font-display font-semibold text-foreground mb-3">Recent Orders</h2>
        <OrderTable orders={mockOrders} />
      </div>
    </div>
  );
};

export default AdminDashboard;
