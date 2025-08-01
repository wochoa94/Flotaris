export interface Driver {
  id: string;
  name: string;
  email: string;
  age: number | null;
  address: string | null;
  idNumber: string;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Vehicle {
  id: string;
  name: string;
  status: 'active' | 'maintenance' | 'idle';
  vin: string | null;
  licensePlate: string | null;
  make: string | null;
  model: string | null;
  year: number | null;
  mileage: number | null;
  lastMaintenance: string | null;
  nextMaintenance: string | null;
  fuelType: string | null;
  maintenanceCost: number | null;
  assignedDriverId: string | null;
  userId?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface MaintenanceOrder {
  id: string;
  orderNumber: string;
  vehicleId: string;
  status: 'pending_authorization' | 'scheduled' | 'active' | 'completed';
  startDate: string;
  estimatedCompletionDate: string;
  location: string | null;
  type: string | null;
  urgent: boolean | null;
  description: string | null;
  quotationDetails: string | null;
  comments: string | null;
  cost: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface VehicleSchedule {
  id: string;
  vehicleId: string;
  driverId: string;
  startDate: string;
  endDate: string;
  notes: string | null;
  status: 'scheduled' | 'active' | 'completed';
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

export interface FleetData {
  vehicles: Vehicle[];
  drivers: Driver[];
  maintenanceOrders: MaintenanceOrder[];
  vehicleSchedules: VehicleSchedule[];
}

// Gantt Chart Types
export type GanttItemType = 'schedule' | 'maintenance';

export interface GanttItem {
  id: string;
  vehicleId: string;
  type: GanttItemType;
  title: string;
  startDate: string;
  endDate: string;
  color: string;
  details: {
    driverName?: string;
    orderNumber?: string;
    description?: string;
    status: string;
    urgent?: boolean;
    location?: string;
    notes?: string;
  };
}

export interface GanttVehicle {
  id: string;
  name: string;
  make: string | null;
  model: string | null;
  year: number | null;
  status: 'active' | 'maintenance' | 'idle';
}