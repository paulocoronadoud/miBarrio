/**
 * MiBarrio - OpenSpec Configuration Entry Point
 */

export { modules } from './modules/index.js';
export type { ModuleContext } from './modules/index.js';

// Re-export individual module types (adjust imports based on actual bundler)
export type { MetricsState } from './modules/dashboard.js';
export type { User, defaultUserState as usersInitialState } from './modules/users.js';
export type { Service, defaultServicesState as servicesInitialState } from './modules/services.js';
export type { Event, defaultEventsState as eventsInitialState } from './modules/events.js';
export type { ReportData, defaultReportsState as reportsInitialState } from './modules/reports.js';
