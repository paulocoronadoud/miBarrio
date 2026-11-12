/**
 * MiBarrio - OpenSpec Runtime Entry Point
 * 
 * This file loads and registers all module specifications at runtime.
 * In a real implementation, this would also bootstrap the application.
 */

// Load configuration
const config = require('./config.yaml');

// Load module specifications
const modules = {
  dashboard: require('./modules/dashboard.spec.js'),
  users: require('./modules/users.spec.js'),
  services: require('./modules/services.spec.js'),
  events: require('./modules/events.spec.js'),
  reports: require('./modules/reports.spec.js'),
};

/**
 * Initialize the OpenSpec runtime
 */
function initialize() {
  console.log('MiBarrio OpenSpec Runtime');
  console.log('=========================');
  console.log(`Project: ${config.name}`);
  console.log(`Version: ${config.version}`);
  console.log(`Modules: ${modules.dashboard ? 'Dashboard' : ''}, ${modules.users ? 'Users' : ''}, 
${modules.services ? 'Services' : ''}, ${modules.events ? 'Events' : ''}, 
${modules.reports ? 'Reports' : ''}`);
  
  // Register each module
  Object.keys(modules).forEach(moduleName => {
    const module = modules[moduleName];
    console.log(`Module registered: ${moduleName}`);
    
    // If module has a default state, register it as global context
    if (module.defaultState) {
      require('./modules/context.js').registerModule(moduleName, module.defaultState);
    }
  });
  
  return config;
}

// Export functions
exports.initialize = initialize;
exports.config = config;
exports.modules = modules;

// Auto-initialize if running as main module
if (require.main === module) {
  initialize();
}
