import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { mockFuelProducts, mockStations } from '@/lib/mock-data';
import { FuelType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';

const OrderFuel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stationId, setStationId] = useState('s1');
  const [fuelType, setFuelType] = useState<FuelType>('Petrol');
  const [quantity, setQuantity] = useState(20);
  const [address, setAddress] = useState('');

  const activeStations = mockStations.filter(s => s.isActive);
  const availableFuels = mockFuelProducts.filter(f => f.stationId === stationId);
  const selectedFuel = availableFuels.find(f => f.type === fuelType);
  const totalCost = selectedFuel ? selectedFuel.pricePerLitre * quantity : 0;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      toast.error('Please enter a delivery address');
      return;
    }
    toast.success('Order placed successfully! You will receive a confirmation shortly.');
    navigate('/dashboard/my-orders');
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Order Fuel</h1>
        <p className="text-muted-foreground">Select fuel type, quantity, and delivery details</p>
      </div>

      <form onSubmit={handleOrder} className="rounded-xl border border-border bg-card p-6 shadow-card space-y-5">
        <div className="space-y-2">
          <Label className="text-secondary-foreground">Station</Label>
          <Select value={stationId} onValueChange={setStationId}>
            <SelectTrigger className="bg-muted border-border"><SelectValue /></SelectTrigger>
            <SelectContent>
              {activeStations.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-secondary-foreground">Fuel Type</Label>
          <Select value={fuelType} onValueChange={(v) => setFuelType(v as FuelType)}>
            <SelectTrigger className="bg-muted border-border"><SelectValue /></SelectTrigger>
            <SelectContent>
              {availableFuels.map(f => (
                <SelectItem key={f.id} value={f.type}>
                  {f.type} — ₦{f.pricePerLitre}/L
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-secondary-foreground">Quantity (Litres)</Label>
          <Input
            type="number"
            min={5}
            max={500}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            className="bg-muted border-border"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-secondary-foreground">Delivery Address</Label>
          <Input
            placeholder="Enter your delivery address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            className="bg-muted border-border"
            required
          />
        </div>

        {/* Total */}
        <div className="rounded-lg bg-muted p-4 flex items-center justify-between">
          <span className="text-muted-foreground font-medium">Estimated Total</span>
          <span className="text-2xl font-display font-bold text-primary">₦{totalCost.toLocaleString()}</span>
        </div>

        <Button type="submit" className="w-full bg-gradient-fuel text-primary-foreground font-semibold">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default OrderFuel;
