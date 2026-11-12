/**
 * Module Specifications Index
 * 
 * This file exports all available module specifications
 */

import type { MetricsState } from './dashboard.js';
import type { User, defaultUserState as usersInitialState } from './users.js';
import type { Service, defaultServicesState as servicesInitialState } from './services.js';
import type { Event, defaultEventsState as eventsInitialState } from './events.js';
import type { ReportData, defaultReportsState as reportsInitialState } from './reports.js';

// Expose all types and initial states for use in implementations
export interface ModuleContext {
  dashboard: MetricsState;
  users: Record<string, User>;
  services: Record<string, Service>;
  events: Record<string, Event>;
  reports: Record<string, ReportData>;
}

// Initial state factory
export const createInitialContext = (): ModuleContext => ({
  dashboard: {
    activeUsers: 0,
    totalServices: 0,
    pendingEvents: 0,
    communityFeedback: [],
  },
  users: {},
  services: {},
  events: {},
  reports: {},
});

// Module metadata
export const modules = [
  { id: 'dashboard', name: 'Dashboard Principal' },
  { id: 'users', name: 'Gestión de Usuarios' },
  { id: 'services', name: 'Servicios Comunitarios' },
  { id: 'events', name: 'Eventos y Actividades' },
  { id: 'reports', name: 'Informes y Estadísticas' },
];
