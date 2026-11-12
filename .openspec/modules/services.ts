export interface Service {
  id: string;
  name: string;
  category: 'health' | 'education' | 'transport' | 'utilities' | 'other';
  description: string;
  contact: string;
  phone?: string;
  email?: string;
  website?: string;
  available: boolean;
  price?: number;
  location?: string;
}

export interface Actions {
  createService(data: Omit<Service, 'id'>): Promise<Service>;
  getService(id: string): Promise<Service | null>;
  updateService(id: string, data: Partial<Service>): Promise<Service | null>;
  deleteService(id: string): Promise<void>;
  listServices(): Promise<Service[]>;
  searchServices(query: string): Promise<Service[]>;
  filterByCategory(category: Service['category']): Promise<Service[]>;
}

// Default initial state
export const defaultServicesState: Record<string, Service> = {};
