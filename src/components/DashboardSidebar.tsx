import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Fuel, LayoutDashboard, Building2, Package, Users, ShoppingCart, 
  Truck, ClipboardList, BarChart3, LogOut, Droplets, MapPin
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserRole } from '@/lib/types';

interface NavItem {
  label: string;
  to: string;
  icon: React.ReactNode;
  roles: UserRole[];
}

const navItems: NavItem[] = [
  { label: 'Dashboard', to: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" />, roles: ['admin', 'station_manager', 'attendant', 'rider', 'customer'] },
  { label: 'Stations', to: '/dashboard/stations', icon: <Building2 className="w-4 h-4" />, roles: ['admin'] },
  { label: 'Fuel Products', to: '/dashboard/fuels', icon: <Droplets className="w-4 h-4" />, roles: ['admin', 'station_manager'] },
  { label: 'Users', to: '/dashboard/users', icon: <Users className="w-4 h-4" />, roles: ['admin', 'station_manager'] },
  { label: 'All Orders', to: '/dashboard/orders', icon: <ClipboardList className="w-4 h-4" />, roles: ['admin', 'station_manager', 'attendant'] },
  { label: 'Order Fuel', to: '/dashboard/order', icon: <ShoppingCart className="w-4 h-4" />, roles: ['customer'] },
  { label: 'My Orders', to: '/dashboard/my-orders', icon: <Package className="w-4 h-4" />, roles: ['customer'] },
  { label: 'Deliveries', to: '/dashboard/deliveries', icon: <Truck className="w-4 h-4" />, roles: ['rider'] },
  { label: 'Analytics', to: '/dashboard/analytics', icon: <BarChart3 className="w-4 h-4" />, roles: ['admin', 'station_manager'] },
];

const DashboardSidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const filteredNav = navItems.filter((item) => user && item.roles.includes(user.role));

  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-fuel flex items-center justify-center">
            <Fuel className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-display font-bold text-foreground">FuelFlow</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {filteredNav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/dashboard'}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                isActive
                  ? 'bg-sidebar-accent text-primary glow-border'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-foreground'
              )
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-fuel flex items-center justify-center text-xs font-bold text-primary-foreground">
            {user?.name?.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{user?.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{user?.role?.replace('_', ' ')}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
