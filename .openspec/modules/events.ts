export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  type: 'cultural' | 'educational' | 'sports' | 'volunteering' | 'social';
  capacity: number;
  registeredAttendees: number;
  organizer?: string;
  image?: string;
}

export interface Actions {
  createEvent(data: Omit<Event, 'id'>): Promise<Event>;
  getEvent(id: string): Promise<Event | null>;
  updateEvent(id: string, data: Partial<Event>): Promise<Event | null>;
  deleteEvent(id: string): Promise<void>;
  listEvents(): Promise<Event[]>;
  registerAttendee(eventId: string): Promise<Event | null>;
  searchEvents(query: string): Promise<Event[]>;
  filterByType(type: Event['type']): Promise<Event[]>;
}

// Default initial state
export const defaultEventsState: Record<string, Event> = {};
