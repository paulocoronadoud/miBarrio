export interface User {
  id: string;
  type: 'resident' | 'volunteer' | 'staff';
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role?: string;
  createdAt: string;
}

export interface Actions {
  createUser(data: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  getUser(id: string): Promise<User | null>;
  updateUser(id: string, data: Partial<User>): Promise<User | null>;
  deleteUser(id: string): Promise<void>;
  getResidents(): Promise<User[]>;
  getVolunteers(): Promise<User[]>;
  getStaff(): Promise<User[]>;
}

// Default initial state
export const defaultUserState: Record<string, User> = {};
