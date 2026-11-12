/**
 * Module Context Manager
 * 
 * Manages the runtime context for all registered modules.
 */

const context = {
  // Module states (will be populated by module registration)
  _states: {},
  
  /**
   * Register a module with its initial state
   * @param {string} moduleName - Name of the module
   * @param {object} initialState - Initial state for this module
   */
  registerModule(moduleName, initialState) {
    this._states[moduleName] = initialState;
    console.log(`  [Context] ${moduleName} initialized`);
  },
  
  /**
   * Get the context for a specific module
   * @param {string} moduleName - Name of the module
   * @returns {object} Module state
   */
  get(moduleName) {
    if (!this._states[moduleName]) {
      throw new Error(`Module "${moduleName}" not registered`);
    }
    return this._states[moduleName];
  },
  
  /**
   * Get all module contexts
   * @returns {object} All module states
   */
  getAll() {
    return { ...this._states };
  },
  
  /**
   * Get the full application context combining all modules
   * @returns {object} Combined context
   */
  getFullContext() {
    const states = this.getAll();
    return {
      dashboard: states.dashboard || {},
      users: states.users || {},
      services: states.services || {},
      events: states.events || {},
      reports: states.reports || {},
    };
  },
  
  /**
   * Get initial state for a module if available
   * @param {string} moduleName - Module name
   * @returns {object|undefined} Initial state or undefined
   */
  getInitialState(moduleName) {
    return this._states[moduleName];
  },
};

// Export and also make available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = context;
}

// Add to global if in browser-like environment
if (typeof window !== 'undefined') {
  window.__openspecContext__ = context;
}
