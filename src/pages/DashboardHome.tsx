import { useAuth } from '@/contexts/AuthContext';
import AdminDashboard from '@/components/dashboards/AdminDashboard';
import ManagerDashboard from '@/components/dashboards/ManagerDashboard';
import AttendantDashboard from '@/components/dashboards/AttendantDashboard';
import RiderDashboard from '@/components/dashboards/RiderDashboard';
import CustomerDashboard from '@/components/dashboards/CustomerDashboard';

const DashboardHome = () => {
  const { user } = useAuth();

  switch (user?.role) {
    case 'admin': return <AdminDashboard />;
    case 'station_manager': return <ManagerDashboard />;
    case 'attendant': return <AttendantDashboard />;
    case 'rider': return <RiderDashboard />;
    case 'customer': return <CustomerDashboard />;
    default: return <div className="text-muted-foreground">Unknown role</div>;
  }
};

export default DashboardHome;
