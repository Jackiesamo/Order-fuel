import { mockOrders } from '@/lib/mock-data';
import OrderTable from '@/components/OrderTable';

const Orders = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">All Orders</h1>
        <p className="text-muted-foreground">View and manage all platform orders</p>
      </div>
      <OrderTable orders={mockOrders} />
    </div>
  );
};

export default Orders;
