export type UserRole = 'customer' | 'admin' | 'station_manager' | 'attendant' | 'rider'

export type FuelType = 'Petrol' | 'Diesel' | 'Kerosene' | 'Petrol (PMS)' | 'Diesel (AGO)' | 'Kerosene (DPK)'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  phone?: string
}

export interface Order {
  id: string
  customerId: string
  customerName: string
  fuelType: string
  quantity: number
  totalPrice: number
  totalCost: number
  deliveryAddress: string
  status: 'pending' | 'confirmed' | 'preparing' | 'ready_for_pickup' | 'picked_up' | 'on_the_way' | 'delivered' | 'cancelled'
  createdAt: string
  riderId?: string
  riderName?: string
  attendantId?: string
  stationId?: string
  stationName?: string
}

export const ORDER_STATUS_LABELS: Record<Order['status'], string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  preparing: 'Preparing',
  ready_for_pickup: 'Ready for Pickup',
  picked_up: 'Picked Up',
  on_the_way: 'On the Way',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
}

export const ORDER_STATUS_COLORS: Record<Order['status'], string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  preparing: 'bg-orange-100 text-orange-800',
  ready_for_pickup: 'bg-cyan-100 text-cyan-800',
  picked_up: 'bg-indigo-100 text-indigo-800',
  on_the_way: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
}

export interface FuelProduct {
  id: string
  type: string
  pricePerLitre: number
  stockLitres: number
  stationId: string
  available: boolean
}

export interface Station {
  id: string
  name: string
  location: string
  address: string
  city: string
  manager: string
  managerId: string
  isActive: boolean
}
