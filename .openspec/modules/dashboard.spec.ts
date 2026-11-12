module dashboard {
  interface MetricsState {
    activeUsers: number;
    totalServices: number;
    pendingEvents: number;
    communityFeedback: Array<{
      id: string;
      rating: number;
      comment: string;
      date: string;
    }>;
  }

  interface Actions {
    refreshMetrics(): void;
    exportToPDF(): Promise<void>;
    exportToCSV(): Promise<void>;
  }

  // Default initial state
  const defaultState: MetricsState = {
    activeUsers: 0,
    totalServices: 0,
    pendingEvents: 0,
    communityFeedback: [],
  };
}
