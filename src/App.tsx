import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Stations from "./pages/Stations";
import FuelProducts from "./pages/FuelProducts";
import UsersPage from "./pages/UsersPage";
import Orders from "./pages/Orders";
import OrderFuel from "./pages/OrderFuel";
import MyOrders from "./pages/MyOrders";
import Deliveries from "./pages/Deliveries";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="stations" element={<Stations />} />
              <Route path="fuels" element={<FuelProducts />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="orders" element={<Orders />} />
              <Route path="order" element={<OrderFuel />} />
              <Route path="my-orders" element={<MyOrders />} />
              <Route path="deliveries" element={<Deliveries />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
