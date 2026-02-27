import { mockFuelProducts, mockStations } from '@/lib/mock-data';

const FuelProducts = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Fuel Products</h1>
        <p className="text-muted-foreground">Manage fuel types, pricing, and stock</p>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Fuel Type</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Station</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Price/L</th>
              <th className="text-left px-4 py-3 font-medium text-muted-foreground">Stock (L)</th>
            </tr>
          </thead>
          <tbody>
            {mockFuelProducts.map((fuel) => {
              const station = mockStations.find(s => s.id === fuel.stationId);
              return (
                <tr key={fuel.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{fuel.type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{station?.name}</td>
                  <td className="px-4 py-3 text-primary font-bold">₦{fuel.pricePerLitre.toLocaleString()}</td>
                  <td className="px-4 py-3 text-secondary-foreground">{fuel.stockLitres.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FuelProducts;
