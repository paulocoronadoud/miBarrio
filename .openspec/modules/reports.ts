export type ReportType = 'overview' | 'user-analytics' | 'service-usage' | 'event-participation' | 'financial';

export interface ReportData {
  period: string;
  metrics: Record<string, any>;
  trends?: Record<string, Array<{ value: number; date: string }>>;
  insights: Array<{
    title: string;
    description: string;
    severity: 'info' | 'warning' | 'critical';
  }>;
}

export interface Actions {
  generateReport(type: ReportType, options?: { startDate?: string; endDate?: string }): Promise<ReportData>;
  getAvailableReports(): Promise<ReportType[]>;
  exportReport(reportId: string, format: 'PDF' | 'CSV' | 'JSON'): Promise<Blob>;
  saveReport(reportId: string): Promise<string>;
}

// Default initial state
export const defaultReportsState: Record<string, ReportData> = {};
