// Configuration for app URLs
// In production, these would point to different domains

export const APP_URLS = {
  // Web app URL - update this based on your deployment
  webApp: process.env.NEXT_PUBLIC_WEB_APP_URL || 'http://localhost:3000',
  
  // Specific routes
  login: `${process.env.NEXT_PUBLIC_WEB_APP_URL || 'http://localhost:3000'}/login`,
  register: `${process.env.NEXT_PUBLIC_WEB_APP_URL || 'http://localhost:3000'}/register`,
  dashboard: `${process.env.NEXT_PUBLIC_WEB_APP_URL || 'http://localhost:3000'}/dashboard`,
};