import { mockStations, mockUsers } from '@/lib/mock-data';

const Stations = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Fuel Stations</h1>
        <p className="text-muted-foreground">Manage all registered stations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockStations.map((station) => {
          const manager = mockUsers.find(u => u.id === station.managerId);
          return (
            <div key={station.id} className="rounded-xl border border-border bg-card p-5 shadow-card hover:glow-border transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground">{station.name}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${station.isActive ? 'bg-status-delivered/20 text-status-delivered' : 'bg-destructive/20 text-destructive'}`}>
                  {station.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{station.address}</p>
              <p className="text-sm text-muted-foreground mt-1">City: {station.city}</p>
              {manager && <p className="text-sm text-muted-foreground mt-1">Manager: {manager.name}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stations;
