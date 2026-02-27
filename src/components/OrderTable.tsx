import { Order, ORDER_STATUS_LABELS, ORDER_STATUS_COLORS } from '@/lib/types';

const OrderTable = ({ orders }: { orders: Order[] }) => (
  <div className="rounded-xl border border-border bg-card overflow-hidden shadow-card">
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Order ID</th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Customer</th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Fuel</th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Qty (L)</th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Total</th>
            <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
              <td className="px-4 py-3 font-mono text-xs text-primary">{order.id.toUpperCase()}</td>
              <td className="px-4 py-3 text-foreground">{order.customerName}</td>
              <td className="px-4 py-3 text-secondary-foreground">{order.fuelType}</td>
              <td className="px-4 py-3 text-secondary-foreground">{order.quantity}</td>
              <td className="px-4 py-3 font-medium text-foreground">₦{order.totalCost.toLocaleString()}</td>
              <td className="px-4 py-3">
                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${ORDER_STATUS_COLORS[order.status]}`}>
                  {ORDER_STATUS_LABELS[order.status]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default OrderTable;
